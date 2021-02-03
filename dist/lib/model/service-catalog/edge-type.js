"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_list_1 = require("./attribute-list");
class EdgeType extends attribute_list_1.default {
    /**
     * An edge type that are linked with messages in SQDs
     * @param name Human-readable edge name
     */
    constructor(name, attributes) {
        super(attributes);
        this.name = name;
    }
}
exports.default = EdgeType;
//# sourceMappingURL=edge-type.js.map