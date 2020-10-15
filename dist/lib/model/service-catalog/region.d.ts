import Service from './service';
import CloudProvider from './cloud-provider';
/**
 * Represenation of one cloud region.
 * Since some regions might offer differnt service,
 * we use a region also as a group.
 */
export default class Region {
    id: string;
    name: string;
    /**
     * Array of all services that belong to this region
     */
    services: Service[];
    /**
     * Reference to the cloud provider of the region.
     */
    cloudProvider: CloudProvider;
    /**
     * Create new region
     * @param id A unique region ID
     * @param name The region's name
     */
    constructor(id: string, name: string);
}
