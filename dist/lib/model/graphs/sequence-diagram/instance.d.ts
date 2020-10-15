import Element from './element';
import Message from './message';
import ComponentWrapper from '../../service-catalog/component-wrapper';
import SequenceDiagram from './sequence-diagram';
export default class Instance extends Element {
    graph: SequenceDiagram;
    componentWrapper: ComponentWrapper;
    /**
     * Sorted array of all incomming messages.
     */
    edgesIn: Message[];
    /**
     * Sorted array of all outgoing messages.
     */
    edgesOut: Message[];
    constructor(graph: SequenceDiagram, componentWrapper: ComponentWrapper);
    getType(): string;
}
