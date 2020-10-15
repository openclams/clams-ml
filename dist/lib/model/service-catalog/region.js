"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represenation of one cloud region.
 * Since some regions might offer differnt service,
 * we use a region also as a group.
 */
class Region {
    /**
     * Create new region
     * @param id A unique region ID
     * @param name The region's name
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.services = [];
        this.cloudProvider = null;
    }
}
exports.default = Region;
//# sourceMappingURL=region.js.map