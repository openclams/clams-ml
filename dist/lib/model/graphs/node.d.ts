import Graph from './graph';
import Geometry from './geometry';
/**
 * A generic node. This node can represent either
 * a state in the user profile, or an element in the
 * sequence diagram.
 */
export default abstract class Node {
    graph: Graph;
    /**
     * Node id, which is unique within a graph.
     */
    id: string;
    /**
     * The geometry of the node when drawn to a canvas.
     */
    geometry: Geometry;
    /**
     * Create new node and assing automatically an unique id.
     * @param graph Reference to the graph that contains this node.
     */
    constructor(graph: Graph);
    /**
     * Return the type of the component
     */
    abstract getType(): string;
}
