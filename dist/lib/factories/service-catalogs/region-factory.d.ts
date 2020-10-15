import JsonRegion from '../../schema/service-catalog/json-region';
import Region from '../../model/service-catalog/region';
export default class RegionFactory {
    static fromJSON(jsonRegion: JsonRegion): Region;
    static toJSON(region: Region): JsonRegion;
}
