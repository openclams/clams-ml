import Edge from '../edge';
import EdgeType from '../../service-catalog/edge-type';
import Instance from './instance';
/**
 * A message is an edge that connects
 * two instances.
 */
export default class Message extends Edge {
    /**
     * The edge type contains additional infromation
     * like the name of the edge type and attributes.
     */
    type: EdgeType;
    /**
     * Positon on the lifeline of the source
     * element
     */
    position: number;
    constructor(from: Instance, to: Instance);
    getType(): string;
    getId(): string;
}
