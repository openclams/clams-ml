import JsonCatalog from '../../json-model/service-catalog/json-catalog';
import Catalog from '../../model/service-catalog/catalog';
import Component from '../../model/service-catalog/component';
import Service from '../../model/service-catalog/service';
import AttributeFactory from './attribute-factory';
import Pattern from 'src/model/service-catalog/pattern';
import Template from 'src/model/service-catalog/template';
import EdgeType from 'src/model/service-catalog/edge-type';
import EdgeTypeFactory from './edge-type-factory';
import CloudProvider from 'src/model/service-catalog/cloud-provider';

export default class CatalogFactory {
    public static fromJSON(cloudProvider: CloudProvider, jsonCatalog: JsonCatalog): Catalog {
        const cachedComponents: Record<string, Component> = {};

        const components: Component[] = jsonCatalog.nodes.map<Component>(jsonCatalogComponent => {
            let component: Component = null;
            if (jsonCatalogComponent.children && jsonCatalogComponent.children.length > 0) {
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
                if ('regions' in jsonCatalogComponent && jsonCatalogComponent.regions) {
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

            if ('attributes' in jsonCatalogComponent && jsonCatalogComponent.attributes) {
                component.attributes =  jsonCatalogComponent.attributes.map(jsonAttribute => AttributeFactory.fromJSON(jsonAttribute));
            }
            // store the component for temporar use when
            // creating templates and edge types.
            cachedComponents[jsonCatalogComponent.id] = component;
            return component;
        }).filter(c => c); // Filter all non-null components.

        // Connect parents and childrens
        jsonCatalog.nodes.forEach(jsonCatalogComponent => {
           const component = cachedComponents[jsonCatalogComponent.id];
           if ('parents' in jsonCatalogComponent &&
                jsonCatalogComponent.parents &&
                jsonCatalogComponent.parents.length > 0) {
                const parent = cachedComponents[jsonCatalogComponent.parents[0]];
                component.parent = parent;
           }

           if ( jsonCatalogComponent.children &&
                jsonCatalogComponent.children.length > 0) {
                    component.children = jsonCatalogComponent.children.map<Component>(id => cachedComponents[id]);
           }
        });

        if (jsonCatalog.templates && jsonCatalog.templates.length > 0) {
            // Add templates to the catalog
            const templates = jsonCatalog.templates.map<Template>( jsonCatalogTemplate => {
                let attributes = [];
                if ('attributes' in jsonCatalogTemplate && jsonCatalogTemplate.attributes) {
                    attributes =  jsonCatalogTemplate.attributes.map(jsonAttribute => AttributeFactory.fromJSON(jsonAttribute));
                }
                const template =  new Template(jsonCatalogTemplate.id,
                    jsonCatalogTemplate.name,
                    jsonCatalogTemplate.img, attributes, cloudProvider);
                cachedComponents[template.id] = template;
                return template;
            });

            components.concat(templates);

            // Add components to templates
            jsonCatalog.templates.forEach( jsonCatalogTemplate => {
                const template = cachedComponents[jsonCatalogTemplate.id] as Template;
                template.components = jsonCatalogTemplate.components.map( componentRef => {
                    return cachedComponents[componentRef.id];
                });
            });
        }
        /**
         * ISSUE 10: It should be also possible to call  EdgeTypeFactory.fromJSON.call(cachedComponents,jsonEdgeType)
         * to implement the edge constraits.
         */
        let edgeTypes = [];
        if (jsonCatalog.edges && jsonCatalog.edges.length > 0) {
            edgeTypes = jsonCatalog.edges.map<EdgeType>(jsonEdgeType => {
                const edgeType = EdgeTypeFactory.fromJSON(jsonEdgeType);
                if ('allowed' in jsonEdgeType) {
                    jsonEdgeType.allowed.forEach(constraint => {
                        edgeType.allowed.push({
                            from: cachedComponents[constraint.from],
                            to: cachedComponents[constraint.to]
                        });
                    });
                }
                if ('exclude' in jsonEdgeType) {
                    jsonEdgeType.exclude.forEach(constraint => {
                        edgeType.exclude.push({
                            from: cachedComponents[constraint.from],
                            to: cachedComponents[constraint.to]
                        });
                    });
                }
                return edgeType;
            });
        }
        return new Catalog(edgeTypes, components, cloudProvider);
    }
}
