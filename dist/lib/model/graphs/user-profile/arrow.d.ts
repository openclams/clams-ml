import Edge from '../edge';
/**
 * User profiles use arrows as edges to connect
 * the states.
 */
export default class Arrow extends Edge {
    constructor(from: any, to: any);
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
    getId(): string;
    getType(): string;
}
