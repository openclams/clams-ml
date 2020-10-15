import JsonGeometry from '../../schema/graphs/json-geometry';
import Geometry from '../../model/graphs/geometry';
export default class GeometryFactory {
    static fromJSON(jsonGeometry: JsonGeometry): Geometry;
    static toJSON(geometry: Geometry): JsonGeometry;
}
