import Model from '../model';
import Edge from './edge';
import Node from './node';
/**
 * Generic graph class to represent
 * sequence diagrams and user profiles.
 * Both graph type consist of nodes and edges,
 * and will implement their specific class representations.
 */
export default abstract class Graph {
    model: Model;
    /**
     * Latest node count. Every time when we add a new node to
     * the graph, the node gets an unique id within this graph.
     * The id is, however, not unique across multuiple graphs.
     * This filed store the lates id, which was issued.
     * Generally, we use node ids to serilize edges later,
     * becasue edges reference nodes by their ids.
     */
    lastId: number;
    /**
     * id of the Graph. This id is unique accross this model.
     * We need this id, wehn we serilize user profiles. The state
     * will use this id to reference its sequence diagram when transformed
     * to JSON
     */
    id: string;
    /**
     * Human-readable graph name (for visualization purpose).
     */
    name: string;
    /**
     * Set of nodes in the graph.
     */
    nodes: Node[];
    /**
     * Set of edges in the graph.
     * Every edge should have nodes from this graph as
     * reference.
     */
    edges: Edge[];
    /**
     * On init, set all fileds to empty, and assing
     * an id to the graph.
     * @param model Reference to the model where the graph belongs
     */
    constructor(model: Model);
    /**
     * Generate a unqique id when creating a new node
     * for this graph.
     * @param prefix The id can have a prefix to make it
     * more informative when transforming to JSON.
     */
    getNewId(prefix?: string): string;
    /**
     * Overload get type to return the name of the class.
     */
    abstract getType(): string;
}
