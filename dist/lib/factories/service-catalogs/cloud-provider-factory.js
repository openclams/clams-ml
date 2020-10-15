"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_provider_1 = require("../../model/service-catalog/cloud-provider");
const region_factory_1 = require("./region-factory");
class CloudProviderFactory {
    static fromJSON(jsonCloudProvider) {
        const cloudProvider = Object.assign(new cloud_provider_1.default(), jsonCloudProvider);
        cloudProvider.regions = jsonCloudProvider.regions.map(jsonRegion => region_factory_1.default.fromJSON.call(cloudProvider, jsonRegion));
        return cloudProvider;
    }
    static toJSON(cloudProvider) {
        const jsonCloudProvider = {
            target: cloudProvider.target,
            title: cloudProvider.title,
            company: cloudProvider.company,
            costLookupFile: cloudProvider.costLookupFile,
            basePath: cloudProvider.basePath,
            catalogFile: cloudProvider.catalogFile,
            image: cloudProvider.image,
            regions: cloudProvider.regions.map(region => region_factory_1.default.toJSON(region))
        };
        return jsonCloudProvider;
    }
}
exports.default = CloudProviderFactory;
//# sourceMappingURL=cloud-provider-factory.js.map