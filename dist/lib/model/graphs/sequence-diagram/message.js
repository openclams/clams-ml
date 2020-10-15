"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = require("../edge");
/**
 * A message is an edge that connects
 * two instances.
 */
class Message extends edge_1.default {
    constructor(from, to) {
        super(from, to);
        this.position = 0;
    }
    getType() {
        return 'Message';
    }
    getId() {
        return this.from.id + this.to.id + this.position;
    }
}
exports.default = Message;
//# sourceMappingURL=message.js.map