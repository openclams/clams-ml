"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_component_factory_1 = require("./catalog-component-factory");
class CatalogFactory {
    static fromJSON(cloudProvider, jsonCatalogComponents) {
        const components = jsonCatalogComponents.map(jsonCatalogComponent => {
            return catalog_component_factory_1.default.fromJSON(cloudProvider, jsonCatalogComponent);
        }).filter(c => c); // Filter all non-null components.
        return components;
    }
}
exports.default = CatalogFactory;
//# sourceMappingURL=catalog-factory.js.map