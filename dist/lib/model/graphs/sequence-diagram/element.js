"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("../node");
/**
 * In context of sequence diagrams,
 * an element is a node that represents a component
 * from the service catalog.
 */
class Element extends node_1.default {
    /**
     * Creating a new element in an sequence diagramm.
     * @param componentWrapper A reference to the direct component
     * item in the components array of model. This reference can
     * be used to traverse all graphs that contain an element that
     * references the same component.
     */
    constructor(graph, componentWrapper) {
        super(graph);
        this.graph = graph;
        this.componentWrapper = componentWrapper;
        this.parent = null;
    }
    /**
     * Return the the component of this element
     */
    get component() {
        return this.componentWrapper.component;
    }
}
exports.default = Element;
//# sourceMappingURL=element.js.map