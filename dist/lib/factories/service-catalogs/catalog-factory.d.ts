import JsonCatalog from '../../schema/service-catalog/json-catalog';
import Catalog from '../../model/service-catalog/catalog';
import CloudProvider from '../../model/service-catalog/cloud-provider';
export default class CatalogFactory {
    static fromJSON(cloudProvider: CloudProvider, jsonCatalog: JsonCatalog): Catalog;
}
