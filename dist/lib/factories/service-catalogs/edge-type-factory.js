"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edge_type_1 = require("../../model/service-catalog/edge-type");
const attribute_factory_1 = require("./attribute-factory");
class EdgeTypeFactory {
    static fromJSON(jsonEdgeType) {
        const edgeType = new edge_type_1.default(jsonEdgeType.id, jsonEdgeType.name, [], [], []);
        if ('attributes' in jsonEdgeType) {
            edgeType.attributes = jsonEdgeType.attributes.map(attr => attribute_factory_1.default.fromJSON(attr));
        }
        return edgeType;
    }
    static toJSON(edgetype) {
        const jsonEdgeType = {
            id: edgetype.id,
            name: edgetype.name,
            attributes: [],
        };
        if (edgetype.attributes) {
            jsonEdgeType.attributes = edgetype.attributes.map(attr => attribute_factory_1.default.toJSON(attr));
        }
        // ISSUE 10: we do not serialize allowd and exclude fields
        // Archtectual decision needs to be made later.
        // * How do we behave if the componentes do not exits anymore
        // * What are de implications for copy/past of an edge
        // if(this.allowed){
        //   jsonEdgeType['allowed'] = this.allowed.map(item => Object.assign({'from':item.from.id,'to':item.to.id},{}) );
        // }
        // if(this.exclude){
        //   jsonEdgeType['exclude'] = this.exclude.map(item => Object.assign({'from':item.from.id,'to':item.to.id},{}) );
        // }
        return jsonEdgeType;
    }
}
exports.default = EdgeTypeFactory;
//# sourceMappingURL=edge-type-factory.js.map