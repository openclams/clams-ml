import JsonGeometry from './json-geometry';
/**
 * This interface defines the shape of a node when serialized to JSON.
 * It is a union of all properties of every node type, such as elements, and states
 */
export default interface JsonNode {
    /**
     *  For example, 'State', 'Instance', or 'Template'
     */
    type: string;
    /**
     * The node's id
     */
    id: string;
    /**
     * Geometry information for rendering
     */
    geometry: JsonGeometry;
    /**
     * [For States]
     * The graph id of the sequene diagram referenced by this state
     */
    sequenceDiagramId?: string;
    /**
     * [For Instances and Templetes]
     * Reference to particular component stored in the
     * model's component array. Here component referes to
     * to the attribute 'name'.
     */
    component?: string;
    /**
     * [For Templates]
     * The acctual nodes that were instanciated to form the template.
     */
    nodes?: JsonNode[];
}
