import Region from './region';
import Catalog from './catalog';
/**
 * A representation of a cloud provider
 */
export default class CloudProvider {
    /**
     * Short name, e.g. 'aws', 'azure', etc...
     */
    target: string;
    /**
     * Full name of the cloud, e.g. 'Amazone Web Services'
     */
    title: string;
    /**
     * Company name, e.g. 'Amazon'
     */
    company: string;
    categoryListUrl: string;
    componentUrl: string;
    edgesUrl: string;
    /**
     * Image URL to a logo of the cloud provider
     */
    image: string;
    /**
     * Array of all available regions for this cloud provider in this model
     */
    regions: Region[];
    /**
     * Reference to the service catalog of the cloud provider
     */
    catalog: Catalog;
    constructor();
}
