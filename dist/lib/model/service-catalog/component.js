"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_list_1 = require("./attribute-list");
/**
 * Gerenic component to represent,
 *  services
 *  patterns
 *  templates
 *
 * Components form a refinement tree.
 */
class Component extends attribute_list_1.default {
    /**
     * A component in the service catalog
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The component's icon
     */
    constructor(id, name, img, attributes, cloudProvider) {
        super(attributes);
        this.id = id;
        this.name = name;
        this.img = img;
        this.cloudProvider = cloudProvider;
        this.children = [];
        this.parent = null;
    }
    /**
     * Is a root component in the refinement tree.
     */
    isRoot() {
        return this.parent == null;
    }
    bindTo(component) {
        this.category = component.category;
        this.cloudProvider = component.cloudProvider;
    }
}
exports.default = Component;
//# sourceMappingURL=component.js.map