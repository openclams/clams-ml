"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_component_factory_1 = require("./catalog-component-factory");
class CatalogFactory {
    static fromJSON(cloudProvider, jsonCatalogComponents) {
        const components = jsonCatalogComponents.map(jsonCatalogComponent => {
            return catalog_component_factory_1.default.fromJSON(cloudProvider, jsonCatalogComponent);
        }).filter(c => c); // Filter all non-null components.
        // // Connect parents and childrens
        // jsonCatalog.nodes.forEach(jsonCatalogComponent => {
        //    const component = cachedComponents[jsonCatalogComponent.id];
        //    // If a component is not in the cache then it was filtered,
        //    // becasue it belongs to a different region
        //    // We just ignore this component then
        //    if (component === undefined) {
        //          return;
        //     }
        //     //    if ('parents' in jsonCatalogComponent &&
        //     //         jsonCatalogComponent.parents &&
        //     //         jsonCatalogComponent.parents.length > 0) {
        //     //         const parent = cachedComponents[jsonCatalogComponent.parents[0]];
        //     //         component.parent = parent;
        //     //    }
        //    if ( jsonCatalogComponent.children &&
        //         jsonCatalogComponent.children.length > 0) {
        //             component.children = jsonCatalogComponent.children.map<Component>(id => cachedComponents[id]).filter(p => p);
        //             component.children.forEach(c => c.parent = component);
        //    }
        // });
        // // If the child has no image, then we inherit the image of the parent.
        // components.forEach(c => {
        //     // Image already contains the base path at the begining
        //     // hence, we check if the end has null as string
        //     if (c.img.endsWith('null')) {
        //         let parent = c.parent;
        //         while (parent) {
        //             if (!parent.img.endsWith('null')) {
        //                 c.img = parent.img;
        //                 break;
        //             }
        //             parent = parent.parent;
        //         }
        //     }
        // });
        // if (jsonCatalog.templates && jsonCatalog.templates.length > 0) {
        //     // Add templates to the catalog
        //     const templates = jsonCatalog.templates.map<Template>( jsonCatalogTemplate => {
        //         let attributes = [];
        //         if ('attributes' in jsonCatalogTemplate && jsonCatalogTemplate.attributes) {
        //             attributes =  jsonCatalogTemplate.attributes.map(jsonAttribute => AttributeFactory.fromJSON(jsonAttribute));
        //         }
        //         const template =  new Template(jsonCatalogTemplate.id,
        //             jsonCatalogTemplate.name,
        //             jsonCatalogTemplate.img, attributes, cloudProvider);
        //         return template;
        //     });
        //     templates.forEach(t => components.push(t));
        //     // // Add components to templates
        //     // jsonCatalog.templates.forEach( jsonCatalogTemplate => {
        //     //     const template = cachedComponents[jsonCatalogTemplate.id] as Template;
        //     //     template.components = jsonCatalogTemplate.components.map( componentRef => {
        //     //         return cachedComponents[componentRef.id];
        //     //     });
        //     // });
        // }
        /**
         * ISSUE 10: It should be also possible to call  EdgeTypeFactory.fromJSON.call(cachedComponents,jsonEdgeType)
         * to implement the edge constraits.
         */
        // let edgeTypes = [];
        // if (jsonCatalog.edges && jsonCatalog.edges.length > 0) {
        //     edgeTypes = jsonCatalog.edges.map<EdgeType>(jsonEdgeType => {
        //         const edgeType = EdgeTypeFactory.fromJSON(jsonEdgeType);
        //         if ('allowed' in jsonEdgeType) {
        //             jsonEdgeType.allowed.forEach(constraint => {
        //                 edgeType.allowed.push({
        //                     from: constraint.from,
        //                     to:constraint.to
        //                 });
        //             });
        //         }
        //         if ('exclude' in jsonEdgeType) {
        //             jsonEdgeType.exclude.forEach(constraint => {
        //                 edgeType.exclude.push({
        //                     from: constraint.from,
        //                     to: constraint.to
        //                 });
        //             });
        //         }
        //         return edgeType;
        //     });
        // }
        return components;
    }
}
exports.default = CatalogFactory;
//# sourceMappingURL=catalog-factory.js.map