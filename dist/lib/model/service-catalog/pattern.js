"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
class Pattern extends component_1.default {
    /**
     * Patterns are components, they do not define a particular service but
     * rather group service togther to an tree structure.
     * Pattern are the inner nodes of the tree
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The patterns's icon
     * @param attributes A map of attributes
     */
    constructor(id, name, img, attributes, cloudProvider) {
        super(id, name, img, attributes, cloudProvider);
        this.id = id;
        this.name = name;
        this.img = img;
        this.attributes = attributes;
        this.cloudProvider = cloudProvider;
    }
    getType() {
        return 'Pattern';
    }
}
exports.default = Pattern;
//# sourceMappingURL=pattern.js.map