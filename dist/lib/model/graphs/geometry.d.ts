/**
 * Geomerty information when rendering a node.
 * This geometry class will be used to represent
 * a point (x,y) or rectang (x,y,w,h) accordingly.
 */
export default class Geometry {
    x: number;
    y: number;
    w: number;
    h: number;
    /**
     * Create a geomerty object for nodes.
     * @param x x-Pos
     * @param y y-Pos
     * @param w width
     * @param h height
     */
    constructor(x: number, y: number, w?: number, h?: number);
}
