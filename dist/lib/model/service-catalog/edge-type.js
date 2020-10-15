"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EdgeType {
    /**
     * An edge type that are linked with messages in SQDs
     * @param id Unique Edge Id
     * @param name Human-readable edge name
     * @param allowed white list of allowed connections
     * @param exclude black list of disallowed connections
     * @param attributes Array of attributes
     */
    constructor(id, name, allowed, exclude, attributes) {
        this.id = id;
        this.name = name;
        this.allowed = allowed;
        this.exclude = exclude;
        this.attributes = attributes;
        this.attributes = [];
        this.allowed = [];
        this.exclude = [];
    }
    /**
     * Returns the attribute if id exists, and undefined otherwise.
     * @param id Attribute id
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
}
exports.default = EdgeType;
//# sourceMappingURL=edge-type.js.map