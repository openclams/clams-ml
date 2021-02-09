import JsonCatalogComponent from '../../schema/service-catalog/json-catalog-component';
import Component from '../../model/service-catalog/component';
import CloudProvider from '../../model/service-catalog/cloud-provider';
import CatalogComponentFactory from './catalog-component-factory';

export default class CatalogFactory {
    public static fromJSON(cloudProvider: CloudProvider, jsonCatalogComponents: JsonCatalogComponent[]): Component[] {

        const components: Component[] = jsonCatalogComponents.map<Component>(jsonCatalogComponent => {
            return CatalogComponentFactory.fromJSON(cloudProvider, jsonCatalogComponent);
        }).filter(c => c); // Filter all non-null components.

        return  components;
    }
}
