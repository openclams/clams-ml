"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const region_1 = require("../../model/service-catalog/region");
const cloud_provider_1 = require("../../model/service-catalog/cloud-provider");
class RegionFactory {
    static fromJSON(jsonRegion) {
        const region = new region_1.default(jsonRegion.id, jsonRegion.name);
        if (this instanceof cloud_provider_1.default) {
            region.cloudProvider = this;
        }
        return region;
    }
    static toJSON(region) {
        return {
            id: region.id,
            name: region.name
        };
    }
}
exports.default = RegionFactory;
//# sourceMappingURL=region-factory.js.map