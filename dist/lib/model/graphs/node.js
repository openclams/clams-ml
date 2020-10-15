"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_1 = require("./geometry");
/**
 * A generic node. This node can represent either
 * a state in the user profile, or an element in the
 * sequence diagram.
 */
class Node {
    /**
     * Create new node and assing automatically an unique id.
     * @param graph Reference to the graph that contains this node.
     */
    constructor(graph) {
        this.graph = graph;
        if (this.graph) {
            this.id = this.graph.getNewId(this.getType());
        }
        this.geometry = new geometry_1.default(0, 0, 0, 0);
    }
}
exports.default = Node;
//# sourceMappingURL=node.js.map