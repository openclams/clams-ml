"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_1 = require("./attribute");
class AttributeList {
    constructor(attributes) {
        this.attributes = [];
        this.attributes = attributes;
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
    getMetaList() {
        return this.attributes.filter(a => a.id === '_meta_');
    }
    addMeta(key, value) {
        const attr = new attribute_1.default('_meta_');
        attr.id = '_meta_';
        attr.img = null;
        attr.name = key;
        attr.type = 'string';
        attr.value = value;
        attr.readable = false;
        attr.description = '';
        this.attributes.push(attr);
        return attr;
    }
    removeMeta(meta) {
        const index = this.attributes.indexOf(meta, 0);
        if (index > -1) {
            this.attributes.splice(index, 1);
        }
    }
}
exports.default = AttributeList;
//# sourceMappingURL=attribute-list.js.map