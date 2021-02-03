"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The service catalog, which contains
 * all ocmponents and edges types for the use
 * in sequence diagrams.
 */
class Catalog {
    /**
     * Create a new service catalog
     * @param edges All  edgetypes for this component selection.
     * @param components All its components
     */
    constructor(edges = [], components = [], cloudProvider) {
        this.edges = edges;
        this.components = components;
        this.cloudProvider = cloudProvider;
        this.categories = [];
    }
    getComponentById(id) {
        return this.components.find(node => node.id === id);
    }
    getComponentByName(name) {
        return this.components.find(eachNode => eachNode.name === name);
    }
    getEdgeByName(name) {
        return this.edges.find(eachEdge => eachEdge.name === name);
    }
    getComponentsByCategoryName(name) {
        return this.categories.find(category => category.name === name).components;
    }
}
exports.default = Catalog;
//# sourceMappingURL=catalog.js.map