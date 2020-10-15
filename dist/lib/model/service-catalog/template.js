"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
class Template extends component_1.default {
    /**
     * Patterns are components, they do not define a particular service but
     * rather group service togther to an tree structure.
     * Pattern are the inner nodes of the tree
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The template's icon
     * @param attributes An array of attributes
     */
    constructor(id, name, img, attributes, cloudProvider) {
        super(id, name, img, attributes, cloudProvider);
        this.id = id;
        this.name = name;
        this.img = img;
        this.attributes = attributes;
        this.cloudProvider = cloudProvider;
        this.components = [];
    }
    getType() {
        return 'Template';
    }
    bindTo(component) {
        super.bindTo(component);
        this.components.forEach((c, idx) => c.bindTo(component.components[idx]));
    }
}
exports.default = Template;
//# sourceMappingURL=template.js.map