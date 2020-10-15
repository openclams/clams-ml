import JsonEdge from '../../schema/graphs/json-edge';
import Arrow from '../../model/graphs/user-profile/arrow';
export default class ArrowFactory {
    static fromJSON(jsonEdge: JsonEdge): Arrow;
    static toJSON(arrow: Arrow): JsonEdge;
}
