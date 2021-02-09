import JsonNode from '../../schema/graphs/json-node';
import Dot from '../../model/graphs/user-profile/dot';
import State from '../../model/graphs/user-profile/state';
import Template from '../../model/graphs/sequence-diagram/template';
import Instance from '../../model/graphs/sequence-diagram/instance';
import Node from '../../model/graphs/node';
export default class NodeFactory {
    static fromJSON(jsonNode: JsonNode): Node;
    static toJSON(node: Node): JsonNode;
}
export declare class DotFactory {
    static fromJSON(jsonNode: JsonNode): Dot;
    static toJSON(dot: Dot): JsonNode;
}
export declare class StateFactory {
    static fromJSON(jsonState: JsonNode): State;
    static toJSON(state: State): JsonNode;
}
export declare class TemplateFactory {
    static fromJSON(jsonInstance: JsonNode): Template;
    static toJSON(template: Template): JsonNode;
}
export declare class InstanceFactory {
    static fromJSON(jsonInstance: JsonNode): Instance;
    static toJSON(instance: Instance): JsonNode;
}
