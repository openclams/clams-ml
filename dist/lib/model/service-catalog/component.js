"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gerenic component to represent,
 *  services
 *  patterns
 *  templates
 *
 * Components form a refinement tree.
 */
class Component {
    /**
     * A component in the service catalog
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The component's icon
     * @param attributes A map of attributes
     */
    constructor(id, name, img, attributes, cloudProvider) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.attributes = attributes;
        this.cloudProvider = cloudProvider;
        this.children = [];
        this.attributes = [];
        this.parent = null;
    }
    /**
     * Returns the attribute if id exists, and undefined otherwise.
     */
    getAttribute(id) {
        return this.attributes.find(attribute => attribute.id === id);
    }
    /**
     * Attach or repliace an attribute
     */
    setAttribute(attribute) {
        const id = this.attributes.findIndex(a => a.id === attribute.id);
        if (id < 0) {
            this.attributes.push(attribute);
        }
        else {
            this.attributes[id] = attribute;
        }
    }
    /**
     * Is a root component in the refinement tree.
     */
    isRoot() {
        return this.parent == null;
    }
    bindTo(component) {
        this.children = component.children;
        this.category = component.category;
        this.parent = component.parent;
        this.cloudProvider = component.cloudProvider;
    }
}
exports.default = Component;
//# sourceMappingURL=component.js.map