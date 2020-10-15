import JsonEdgeType from '../../schema/service-catalog/json-edge-type';
import EdgeType from '../../model/service-catalog/edge-type';
export default class EdgeTypeFactory {
    static fromJSON(jsonEdgeType: JsonEdgeType): EdgeType;
    static toJSON(edgetype: EdgeType): JsonEdgeType;
}
