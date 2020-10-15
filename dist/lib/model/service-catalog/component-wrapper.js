"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a helper class to ease the
 * search for all instances, that reference the same component
 * across all graphs efficently.
 */
class ComponentWrapper {
    constructor(component) {
        this.component = component;
        this.instances = [];
    }
}
exports.default = ComponentWrapper;
//# sourceMappingURL=component-wrapper.js.map