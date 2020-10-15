"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_1 = require("../../model/service-catalog/attribute");
const cost_factory_1 = require("./cost-factory");
const component_1 = require("../../model/service-catalog/component");
class AttributeFactory {
    static fromJSON(jsonAttribute) {
        const attribute = Object.assign(new attribute_1.default(jsonAttribute.id), jsonAttribute);
        if (attribute.type === 'Cost') {
            attribute.value = cost_factory_1.default.fromJSON(jsonAttribute.value);
            if (this instanceof component_1.default) {
                // Bind the region of the cost to the region of the cloud provider
                const region = attribute.value.region;
                attribute.value.region = this.cloudProvider.regions.find(r => r.id === region.id);
                if (!attribute.value.region) {
                    // If the cloud provider does not have the region, we go back to default
                    attribute.value.region = region;
                }
            }
        }
        return attribute;
    }
    static toJSON(attribute) {
        const jsonAttribute = Object.assign({}, attribute);
        if (attribute.type === 'Cost') {
            jsonAttribute.value = cost_factory_1.default.toJSON(attribute.value);
        }
        return jsonAttribute;
    }
}
exports.default = AttributeFactory;
//# sourceMappingURL=attribute-factory.js.map