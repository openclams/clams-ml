"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cost_1 = require("../../model/service-catalog/cost");
const region_factory_1 = require("./region-factory");
class CostFactory {
    static fromJSON(jsonCost) {
        const cost = new cost_1.default(region_factory_1.default.fromJSON(jsonCost.region), jsonCost.model, jsonCost.units, jsonCost.cost);
        return cost;
    }
    static toJSON(cost) {
        return {
            region: region_factory_1.default.toJSON(cost.region),
            model: cost.model,
            units: cost.units,
            cost: cost.cost
        };
    }
}
exports.default = CostFactory;
//# sourceMappingURL=cost-factory.js.map