import Node from './node';
/**
 * A gneric (directed) Edge.
 */
export default abstract class Edge {
    from: Node;
    to: Node;
    /**
     * Create a (directed) Edge.
     * Both nodes should belong to the same graph
     * @param from Source node
     * @param to  Destination node
     */
    protected constructor(from: Node, to: Node);
    /**
     * Return the type of the component
     */
    abstract getType(): string;
    abstract getId(): string;
}
