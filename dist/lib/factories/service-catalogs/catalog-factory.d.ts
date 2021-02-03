import JsonCatalogComponent from '../../schema/service-catalog/json-catalog-component';
import Component from '../../model/service-catalog/component';
import CloudProvider from '../../model/service-catalog/cloud-provider';
export default class CatalogFactory {
    static fromJSON(cloudProvider: CloudProvider, jsonCatalogComponents: JsonCatalogComponent[]): Component[];
}
