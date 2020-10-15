"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./element");
/**
 * This is the class defintion of the template
 * element, which is an instance of the template
 * component in ther service catalog.
 */
class Template extends element_1.default {
    constructor(graph, componentWrapper) {
        super(graph, componentWrapper);
        this.nodes = [];
    }
    getType() {
        return 'Template';
    }
}
exports.default = Template;
//# sourceMappingURL=template.js.map