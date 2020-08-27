import JsonEdge from '../../json-model/graphs/json-edge';
import Message from '../../model/graphs/sequence-diagram/message';
import EdgeTypeFactory from '../service-catalogs/edge-type-factory';
import SequenceDiagram from '../../model/graphs/sequence-diagram/sequence-diagram';
import Instance from '../../model/graphs/sequence-diagram/instance';

export default class MessageFactory {
    public static fromJSON(jsonEdge: JsonEdge): Message {
        const message = new Message(null, null);
        message.position = jsonEdge.position;
        message.type = EdgeTypeFactory.fromJSON(jsonEdge.edgeType);
        if (this instanceof SequenceDiagram) {
            message.from = this.nodes.find(node => node.id === jsonEdge.from);
            message.to = this.nodes.find(node => node.id === jsonEdge.to);
            if (message.from instanceof Instance) {
                message.from.edgesOut.push(message);
            }
            if (message.to instanceof Instance) {
                message.to.edgesIn.push(message);
            }
        }
        return message;
    }
    public static toJSON(message: Message): JsonEdge {
        const jsonEdge = {
            'type': 'Message',
            'from': message.from.id,
            'to': message.to.id,
        };
        jsonEdge['position'] = message.position;
        jsonEdge['edgeType'] = EdgeTypeFactory.toJSON(message.type);
        return jsonEdge;
    }
}
