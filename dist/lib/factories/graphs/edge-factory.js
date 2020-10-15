"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrow_factory_1 = require("./arrow-factory");
const message_factory_1 = require("./message-factory");
const arrow_1 = require("../../model/graphs/user-profile/arrow");
const message_1 = require("../../model/graphs/sequence-diagram/message");
class EdgeFactory {
    static fromJSON(jsonEdge) {
        let edge = null;
        if (jsonEdge.type === 'Arrow') {
            edge = arrow_factory_1.default.fromJSON.call(this, jsonEdge);
        }
        else {
            edge = message_factory_1.default.fromJSON.call(this, jsonEdge);
        }
        return edge;
    }
    static toJSON(edge) {
        if (edge instanceof arrow_1.default) {
            return arrow_factory_1.default.toJSON(edge);
        }
        else if (edge instanceof message_1.default) {
            return message_factory_1.default.toJSON(edge);
        }
        return null;
    }
}
exports.default = EdgeFactory;
//# sourceMappingURL=edge-factory.js.map