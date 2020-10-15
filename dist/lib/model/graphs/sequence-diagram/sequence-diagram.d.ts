import Graph from '../graph';
/**
 * A sequence diagramm consists of elements and messages.
 */
export default class SequenceDiagram extends Graph {
    /**
     * Return the type of this graph
     */
    getType(): string;
    /**
     * Assign a unique id to an element.
     * @param prefix A prefix to make the id more informative
     */
    getNewId(prefix?: string): string;
}
