"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("../node");
/**
 * States are nodes in the user profiles.
 * Each states as a reference to an existing
 * sequence diagramm.
 *
 * Note: If the sequence diagram
 * gets removed, that this state should also be removed
 * from the user profile.
 */
class State extends node_1.default {
    /**
     * Create a new state
     * @param graph User profile of the state
     * @param sequenceDiagram Reference to the state's sequence diagram
     */
    constructor(graph, sequenceDiagram) {
        super(graph);
        this.sequenceDiagram = sequenceDiagram;
        this.edgesIn = [];
        this.edgesOut = [];
    }
    getType() {
        return 'State';
    }
}
exports.default = State;
//# sourceMappingURL=state.js.map