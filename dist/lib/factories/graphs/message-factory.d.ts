import JsonEdge from '../../schema/graphs/json-edge';
import Message from '../../model/graphs/sequence-diagram/message';
import Element from '../../model/graphs/sequence-diagram/element';
export default class MessageFactory {
    static fromJSON(jsonEdge: JsonEdge): Message;
    static findNode(nodeId: string, nodes: Element[]): any;
    static toJSON(message: Message): JsonEdge;
}
