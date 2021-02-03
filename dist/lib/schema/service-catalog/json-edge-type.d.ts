import JsonAttribute from './json-attribute';
/**
 * This interface defines the shape of an edge type when serialized to JSON
 * or read from the service catalog JSON.
 * Edge Types are only in combination with Messages
 */
export default interface JsonEdgeType {
    /**
     * Name of the edge type, e.g. "HTTP Communication"
     */
    name: string;
    /**
     * Edges have the possibility of attributes
     */
    attributes?: JsonAttribute[];
}
