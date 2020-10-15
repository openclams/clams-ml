"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_1 = require("../../model/service-catalog/catalog");
const service_1 = require("../../model/service-catalog/service");
const attribute_factory_1 = require("./attribute-factory");
const pattern_1 = require("../../model/service-catalog/pattern");
const template_1 = require("../../model/service-catalog/template");
const edge_type_factory_1 = require("./edge-type-factory");
class CatalogFactory {
    static fromJSON(cloudProvider, jsonCatalog) {
        const cachedComponents = {};
        const components = jsonCatalog.nodes.map(jsonCatalogComponent => {
            let component = null;
            if (jsonCatalogComponent.children && !jsonCatalogComponent.children.length) {
                // We have a service
                component = new service_1.default(jsonCatalogComponent.id, jsonCatalogComponent.name, cloudProvider.basePath + jsonCatalogComponent.img, [], cloudProvider);
                // An empty regions for services implies, that the service
                // is available for all regions.
                const service = component;
                service.regions = [];
                // Consider region restrictions
                if ('regions' in jsonCatalogComponent && jsonCatalogComponent.regions) {
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
                // Assign service to regions
                service.regions.forEach(region => region.services.push(service));
            }
            else {
                // We have a pattern
                component = new pattern_1.default(jsonCatalogComponent.id, jsonCatalogComponent.name, cloudProvider.basePath + jsonCatalogComponent.img, [], cloudProvider);
            }
            if ('attributes' in jsonCatalogComponent && jsonCatalogComponent.attributes) {
                component.attributes = jsonCatalogComponent.attributes.map(jsonAttribute => attribute_factory_1.default.fromJSON(jsonAttribute));
            }
            // store the component for temporar use when
            // creating templates and edge types.
            cachedComponents[jsonCatalogComponent.id] = component;
            return component;
        }).filter(c => c); // Filter all non-null components.
        // Connect parents and childrens
        jsonCatalog.nodes.forEach(jsonCatalogComponent => {
            const component = cachedComponents[jsonCatalogComponent.id];
            // If a component is not in the cache then it was filtered,
            // becasue it belongs to a different region
            // We just ignore this component then
            if (component === undefined) {
                return;
            }
            //    if ('parents' in jsonCatalogComponent &&
            //         jsonCatalogComponent.parents &&
            //         jsonCatalogComponent.parents.length > 0) {
            //         const parent = cachedComponents[jsonCatalogComponent.parents[0]];
            //         component.parent = parent;
            //    }
            if (jsonCatalogComponent.children &&
                jsonCatalogComponent.children.length > 0) {
                component.children = jsonCatalogComponent.children.map(id => cachedComponents[id]).filter(p => p);
                component.children.forEach(c => c.parent = component);
            }
        });
        // If the child has no image, then we inherit the image of the parent.
        components.forEach(c => {
            // Image already contains the base path at the begining
            // hence, we check if the end has null as string
            if (c.img.endsWith('null')) {
                let parent = c.parent;
                while (parent) {
                    if (!parent.img.endsWith('null')) {
                        c.img = parent.img;
                        break;
                    }
                    parent = parent.parent;
                }
            }
        });
        if (jsonCatalog.templates && jsonCatalog.templates.length > 0) {
            // Add templates to the catalog
            const templates = jsonCatalog.templates.map(jsonCatalogTemplate => {
                let attributes = [];
                if ('attributes' in jsonCatalogTemplate && jsonCatalogTemplate.attributes) {
                    attributes = jsonCatalogTemplate.attributes.map(jsonAttribute => attribute_factory_1.default.fromJSON(jsonAttribute));
                }
                const template = new template_1.default(jsonCatalogTemplate.id, jsonCatalogTemplate.name, cloudProvider.basePath + jsonCatalogTemplate.img, attributes, cloudProvider);
                cachedComponents[template.id] = template;
                return template;
            });
            templates.forEach(t => components.push(t));
            // Add components to templates
            jsonCatalog.templates.forEach(jsonCatalogTemplate => {
                const template = cachedComponents[jsonCatalogTemplate.id];
                template.components = jsonCatalogTemplate.components.map(componentRef => {
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
            edgeTypes = jsonCatalog.edges.map(jsonEdgeType => {
                const edgeType = edge_type_factory_1.default.fromJSON(jsonEdgeType);
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
        cloudProvider.catalog = new catalog_1.default(edgeTypes, components, cloudProvider);
        return cloudProvider.catalog;
    }
}
exports.default = CatalogFactory;
//# sourceMappingURL=catalog-factory.js.map