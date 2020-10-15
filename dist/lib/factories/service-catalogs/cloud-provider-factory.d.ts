import CloudProvider from '../../model/service-catalog/cloud-provider';
import JsonCloudProvider from '../../schema/service-catalog/json-cloud-provider';
export default class CloudProviderFactory {
    static fromJSON(jsonCloudProvider: JsonCloudProvider): CloudProvider;
    static toJSON(cloudProvider: CloudProvider): JsonCloudProvider;
}
