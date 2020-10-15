"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A gneric (directed) Edge.
 */
class Edge {
    /**
     * Create a (directed) Edge.
     * Both nodes should belong to the same graph
     * @param from Source node
     * @param to  Destination node
     */
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
exports.default = Edge;
//# sourceMappingURL=edge.js.map