"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A cost entry from the cost look up.
 * This class is used as the value of
 * an attribute when the type is 'cost'.
 */
class Cost {
    /**
     * Create a new Cost entry.
     * @param region The cost according to the region
     * @param model The cost model, e.g., time-based or event based.
     * @param units The number of units
     * @param cost  Cost of an unit
     */
    constructor(region, model, units, cost) {
        this.region = region;
        this.model = model;
        this.units = units;
        this.cost = cost;
    }
}
exports.default = Cost;
//# sourceMappingURL=cost.js.map