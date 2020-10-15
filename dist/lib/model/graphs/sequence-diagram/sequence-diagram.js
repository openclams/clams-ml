"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("../graph");
/**
 * A sequence diagramm consists of elements and messages.
 */
class SequenceDiagram extends graph_1.default {
    /**
     * Return the type of this graph
     */
    getType() {
        return 'SequenceDiagram';
    }
    /**
     * Assign a unique id to an element.
     * @param prefix A prefix to make the id more informative
     */
    getNewId(prefix = 'Element_') {
        return super.getNewId(prefix);
    }
}
exports.default = SequenceDiagram;
//# sourceMappingURL=sequence-diagram.js.map