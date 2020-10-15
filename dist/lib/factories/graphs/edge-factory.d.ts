import JsonEdge from '../../schema/graphs/json-edge';
import Edge from '../../model/graphs/edge';
export default class EdgeFactory {
    static fromJSON(jsonEdge: JsonEdge): Edge;
    static toJSON(edge: Edge): JsonEdge;
}
