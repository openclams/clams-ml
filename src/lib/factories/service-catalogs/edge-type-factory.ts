 import JsonEdgeType from '../../schema/service-catalog/json-edge-type';
import EdgeType from '../../model/service-catalog/edge-type';
import AttributeFactory from './attribute-factory';


export default class EdgeTypeFactory {
    public static fromJSON(jsonEdgeType: JsonEdgeType): EdgeType {
        const edgeType = new EdgeType(jsonEdgeType.name, []);
        if ('attributes' in jsonEdgeType) {
            edgeType.attributes = jsonEdgeType.attributes.map(attr => AttributeFactory.fromJSON(attr));
        }
        return edgeType;
    }
    public static toJSON(edgetype: EdgeType): JsonEdgeType {
        const jsonEdgeType = {
            name: edgetype.name,
            attributes: [],
        } as JsonEdgeType;
        if (edgetype.attributes) {
            jsonEdgeType.attributes = edgetype.attributes.map(attr => AttributeFactory.toJSON(attr));
        }
        return jsonEdgeType;
    }
}
