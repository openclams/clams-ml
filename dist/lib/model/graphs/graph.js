"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic graph class to represent
 * sequence diagrams and user profiles.
 * Both graph type consist of nodes and edges,
 * and will implement their specific class representations.
 */
class Graph {
    /**
     * On init, set all fileds to empty, and assing
     * an id to the graph.
     * @param model Reference to the model where the graph belongs
     */
    constructor(model) {
        this.model = model;
        if (this.model) {
            this.id = this.model.getNewId();
        }
        this.lastId = 0;
        this.nodes = [];
        this.edges = [];
        this.name = '';
    }
    /**
     * Generate a unqique id when creating a new node
     * for this graph.
     * @param prefix The id can have a prefix to make it
     * more informative when transforming to JSON.
     */
    getNewId(prefix = '') {
        return prefix + (this.lastId++);
    }
}
exports.default = Graph;
//# sourceMappingURL=graph.js.map