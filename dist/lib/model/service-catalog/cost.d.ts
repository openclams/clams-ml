import Region from './region';
/**
 * A cost entry from the cost look up.
 * This class is used as the value of
 * an attribute when the type is 'cost'.
 */
export default class Cost {
    region: Region;
    model: string;
    units: number;
    cost: number;
    /**
     * Create a new Cost entry.
     * @param region The cost according to the region
     * @param model The cost model, e.g., time-based or event based.
     * @param units The number of units
     * @param cost  Cost of an unit
     */
    constructor(region: Region, model: string, units: number, cost: number);
}
