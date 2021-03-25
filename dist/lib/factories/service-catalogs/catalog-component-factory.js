"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../../model/service-catalog/service");
const pattern_1 = require("../../model/service-catalog/pattern");
const attribute_factory_1 = require("./attribute-factory");
const template_1 = require("../../model/service-catalog/template");
const cost_factory_1 = require("./cost-factory");
class CatalogComponentFactory {
    static fromJSON(cloudProvider, jsonCatalogComponent) {
        let component = null;
        if (jsonCatalogComponent.components && jsonCatalogComponent.components.length > 0) {
            // We have a template
            component = new template_1.default(jsonCatalogComponent.id, jsonCatalogComponent.name, jsonCatalogComponent.img, [], cloudProvider);
            // ISSUE: There is no clear specification on how to deal with components that are not part of the selected regions
            // For now, we leave services out, if they are not part of the selected region (to avoid null pointers)
            component.components = jsonCatalogComponent.components.map(jc => {
                return CatalogComponentFactory.fromJSON(cloudProvider, jc);
            }).filter(c => c);
        }
        else {
            if (!('children' in jsonCatalogComponent) || (jsonCatalogComponent.children && jsonCatalogComponent.children.length === 0)) {
                // We have a service
                component = new service_1.default(jsonCatalogComponent.id, jsonCatalogComponent.name, jsonCatalogComponent.img, [], cloudProvider);
                // An empty regions for services implies, that the service
                // is available for all regions.
                const service = component;
                service.regions = [];
                // Consider region restrictions
                if ('regions' in jsonCatalogComponent
                    && jsonCatalogComponent.regions
                    && jsonCatalogComponent.regions.length > 0) {
                    service.regions = cloudProvider.regions.filter(region => {
                        return jsonCatalogComponent.regions.find(r => r === region.id) !== undefined;
                    });
                    // If there is no regional overlap to the available regions of the cloud provider,
                    // then we do not consdier this service.
                    if (service.regions.length === 0) {
                        return null;
                    }
                }
                else {
                    // This service is available for all regions
                    service.regions = cloudProvider.regions;
                }
                // Parse cost pobjects
                if (jsonCatalogComponent.costs) {
                    service.costs = jsonCatalogComponent.costs.map(costRegion => {
                        if (!service.cloudProvider.regions.some(r => r.id === costRegion.region.id)) {
                            return null;
                        }
                        const cost = cost_factory_1.default.fromJSON(costRegion);
                        // Since the units fields is not available for the cost objects int he lookup table,
                        // we simply add now the units with default 0.
                        cost.units = 0;
                        return cost;
                    }).filter(c => c);
                }
                // Assign service to regions
                service.regions.forEach(region => region.services.push(service));
            }
            else {
                // We have a pattern
                component = new pattern_1.default(jsonCatalogComponent.id, jsonCatalogComponent.name, jsonCatalogComponent.img, [], cloudProvider);
            }
        }
        if ('attributes' in jsonCatalogComponent && jsonCatalogComponent.attributes) {
            component.attributes = jsonCatalogComponent.attributes.map(jsonAttribute => attribute_factory_1.default.fromJSON(jsonAttribute));
        }
        // store the component for temporar use when
        // creating templates and edge types.
        return component;
    }
}
exports.default = CatalogComponentFactory;
//# sourceMappingURL=catalog-component-factory.js.map