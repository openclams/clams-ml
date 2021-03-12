"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
class Service extends component_1.default {
    /**
     * Patterns are components, they do not define a particular service but
     * rather group service togther to an tree structure.
     * Pattern are the inner nodes of the tree
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The service's icon
     * @param attributes A map of attributes
     */
    constructor(id, name, img, attributes, cloudProvider) {
        super(id, name, img, attributes, cloudProvider);
        this.id = id;
        this.name = name;
        this.img = img;
        this.attributes = attributes;
        this.cloudProvider = cloudProvider;
        this.regions = [];
        this.costs = [];
    }
    getType() {
        return 'Service';
    }
    bindTo(component) {
        super.bindTo(component);
        if (component instanceof Service) {
            this.regions = component.regions;
        }
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map