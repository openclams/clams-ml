import JsonCatalogComponent from '../../schema/service-catalog/json-catalog-component';
import CloudProvider from '../../model/service-catalog/cloud-provider';
import Component from '../../model/service-catalog/component';
import Service from '../../model/service-catalog/service';
import Pattern from '../../model/service-catalog/pattern';
import AttributeFactory from './attribute-factory';
import Template from '../../model/service-catalog/template';
import CostFactory from './cost-factory';

export default class CatalogComponentFactory {
    public static fromJSON(cloudProvider: CloudProvider, jsonCatalogComponent: JsonCatalogComponent): Component {
        let component: Component = null;


        if (jsonCatalogComponent.components && jsonCatalogComponent.components.length > 0) {
            // We have a template
            component = new Template(jsonCatalogComponent.id,
                jsonCatalogComponent.name,
                jsonCatalogComponent.img, [], cloudProvider);
            // ISSUE: There is no clear specification on how to deal with components that are not part of the selected regions
            // For now, we leave services out, if they are not part of the selected region (to avoid null pointers)
            (component as Template).components = jsonCatalogComponent.components.map<Component>( jc => {
                return CatalogComponentFactory.fromJSON(cloudProvider, jc);
            }).filter(c => c);

        } else {
            if ( !('children' in jsonCatalogComponent) || (jsonCatalogComponent.children && jsonCatalogComponent.children.length === 0)) {
                // We have a service
                component = new Service(jsonCatalogComponent.id,
                    jsonCatalogComponent.name,
                    jsonCatalogComponent.img,
                    [],
                    cloudProvider);

                // An empty regions for services implies, that the service
                // is available for all regions.
                const service = component as Service;
                service.regions = [];

                // Consider region restrictions
                if ('regions' in jsonCatalogComponent
                    && jsonCatalogComponent.regions
                    && jsonCatalogComponent.regions.length > 0) {

                    service.regions = cloudProvider.regions.filter( region => {
                        return jsonCatalogComponent.regions.find(r => r === region.id) !== undefined;
                    });
                    // If there is no regional overlap to the available regions of the cloud provider,
                    // then we do not consdier this service.
                    if (service.regions.length === 0 ) {
                        return null;
                    }
                } else {
                    // This service is available for all regions
                    service.regions = cloudProvider.regions;
                }
                // Parse cost pobjects
                service.costs = jsonCatalogComponent.costs.map( costRegion => {

                    if (!service.cloudProvider.regions.some( r => r.id === costRegion.region.id)) {

                        return null;

                    }

                    const cost = CostFactory.fromJSON(costRegion);
                    // Since the units fields is not available for the cost objects int he lookup table,
                    // we simply add now the units with default 0.
                    cost.units = 0;

                    return cost;
                }).filter(c => c);

                // Assign service to regions
                service.regions.forEach(region => region.services.push(service));

            } else {
                // We have a pattern
                component = new Pattern(jsonCatalogComponent.id,
                    jsonCatalogComponent.name,
                    jsonCatalogComponent.img,
                    [],
                    cloudProvider);
            }
        }

        if ('attributes' in jsonCatalogComponent && jsonCatalogComponent.attributes) {
            component.attributes =  jsonCatalogComponent.attributes.map(jsonAttribute => AttributeFactory.fromJSON(jsonAttribute));
        }
        // store the component for temporar use when
        // creating templates and edge types.
        return component;
    }
}
