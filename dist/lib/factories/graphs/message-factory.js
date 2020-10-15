"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../../model/graphs/sequence-diagram/message");
const edge_type_factory_1 = require("../service-catalogs/edge-type-factory");
const sequence_diagram_1 = require("../../model/graphs/sequence-diagram/sequence-diagram");
const instance_1 = require("../../model/graphs/sequence-diagram/instance");
const template_1 = require("../../model/graphs/sequence-diagram/template");
class MessageFactory {
    static fromJSON(jsonEdge) {
        const message = new message_1.default(null, null);
        message.position = jsonEdge.position;
        message.type = edge_type_factory_1.default.fromJSON(jsonEdge.edgeType);
        if (this instanceof sequence_diagram_1.default) {
            message.from = MessageFactory.findNode(jsonEdge.from, this.nodes);
            message.to = MessageFactory.findNode(jsonEdge.to, this.nodes);
            if (message.from instanceof instance_1.default) {
                message.from.edgesOut.push(message);
            }
            if (message.to instanceof instance_1.default) {
                message.to.edgesIn.push(message);
            }
        }
        return message;
    }
    static findNode(nodeId, nodes) {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
            return node;
        }
        else {
            for (const n of nodes) {
                if (n instanceof template_1.default) {
                    return MessageFactory.findNode(nodeId, n.nodes);
                }
            }
            return null;
        }
    }
    static toJSON(message) {
        const jsonEdge = {
            type: message.getType(),
            from: message.from.id,
            to: message.to.id,
            position: message.position,
            edgeType: edge_type_factory_1.default.toJSON(message.type)
        };
        return jsonEdge;
    }
}
exports.default = MessageFactory;
//# sourceMappingURL=message-factory.js.map