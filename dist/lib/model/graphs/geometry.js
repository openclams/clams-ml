"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Geomerty information when rendering a node.
 * This geometry class will be used to represent
 * a point (x,y) or rectang (x,y,w,h) accordingly.
 */
class Geometry {
    /**
     * Create a geomerty object for nodes.
     * @param x x-Pos
     * @param y y-Pos
     * @param w width
     * @param h height
     */
    constructor(x, y, w = 1, h = 1) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
exports.default = Geometry;
//# sourceMappingURL=geometry.js.map