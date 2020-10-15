"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_1 = require("../../model/graphs/geometry");
class GeometryFactory {
    static fromJSON(jsonGeometry) {
        return new geometry_1.default(jsonGeometry.x, jsonGeometry.y, jsonGeometry.w, jsonGeometry.h);
    }
    static toJSON(geometry) {
        return Object.assign({}, geometry);
    }
}
exports.default = GeometryFactory;
//# sourceMappingURL=geometry-factory.js.map