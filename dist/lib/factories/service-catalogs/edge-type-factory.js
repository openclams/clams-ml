"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edge_type_1 = require("../../model/service-catalog/edge-type");
const attribute_factory_1 = require("./attribute-factory");
class EdgeTypeFactory {
    static fromJSON(jsonEdgeType) {
        const edgeType = new edge_type_1.default(jsonEdgeType.name, []);
        if ('attributes' in jsonEdgeType) {
            edgeType.attributes = jsonEdgeType.attributes.map(attr => attribute_factory_1.default.fromJSON(attr));
        }
        return edgeType;
    }
    static toJSON(edgetype) {
        const jsonEdgeType = {
            name: edgetype.name,
            attributes: [],
        };
        if (edgetype.attributes) {
            jsonEdgeType.attributes = edgetype.attributes.map(attr => attribute_factory_1.default.toJSON(attr));
        }
        return jsonEdgeType;
    }
}
exports.default = EdgeTypeFactory;
//# sourceMappingURL=edge-type-factory.js.map