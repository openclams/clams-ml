"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = require("../edge");
/**
 * User profiles use arrows as edges to connect
 * the states.
 */
class Arrow extends edge_1.default {
    constructor(from, to) {
        super(from, to);
        /**
         * Probability annotation of the arrow.
         */
        this.probability = 1;
    }
    getId() {
        return this.from.id + this.to.id;
    }
    getType() {
        return 'Arrow';
    }
}
exports.default = Arrow;
//# sourceMappingURL=arrow.js.map