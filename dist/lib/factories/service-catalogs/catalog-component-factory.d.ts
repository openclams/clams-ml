import JsonCatalogComponent from "../../schema/service-catalog/json-catalog-component";
import CloudProvider from "../../model/service-catalog/cloud-provider";
import Component from "../../model/service-catalog/component";
export default class CatalogComponentFactory {
    static fromJSON(cloudProvider: CloudProvider, jsonCatalogComponent: JsonCatalogComponent): Component;
}
