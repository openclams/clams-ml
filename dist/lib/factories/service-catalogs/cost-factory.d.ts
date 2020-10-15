import JsonCost from '../../schema/service-catalog/json-cost';
import Cost from '../../model/service-catalog/cost';
export default class CostFactory {
    static fromJSON(jsonCost: JsonCost): Cost;
    static toJSON(cost: Cost): JsonCost;
}
