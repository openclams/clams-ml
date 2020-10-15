import Edge from '../edge';
/**
 * User profiles use arrows as edges to connect
 * the states.
 */
export default class Arrow extends Edge {
    getId(): string;
    /**
     * Probability annotation of the arrow.
     */
    probability: number;
    /**
     * Shape infromation of the arrow's coners
     * for rendering.
     */
    shape: {
        x: number;
        y: number;
    }[];
    constructor(from: any, to: any);
    getType(): string;
}
