"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state");
/**
 * A dot is a special state that does not reference a
 * sequence diagramm. A dot is the entry point of the
 * user profile. Every user profile should have only one dot.
 */
class Dot extends state_1.default {
    constructor(graph) {
        super(graph, null);
    }
    getType() {
        return 'Dot';
    }
}
exports.default = Dot;
//# sourceMappingURL=dot.js.map