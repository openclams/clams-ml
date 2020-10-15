"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./element");
class Instance extends element_1.default {
    constructor(graph, componentWrapper) {
        super(graph, componentWrapper);
        this.graph = graph;
        this.componentWrapper = componentWrapper;
        /**
         * Sorted array of all incomming messages.
         */
        this.edgesIn = [];
        /**
         * Sorted array of all outgoing messages.
         */
        this.edgesOut = [];
    }
    getType() {
        return 'Instance';
    }
}
exports.default = Instance;
//# sourceMappingURL=instance.js.map