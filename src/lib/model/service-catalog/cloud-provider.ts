import Region from './region';
import Catalog from './catalog';

/**
 * A representation of a cloud provider
 */
export default  class CloudProvider {
  /**
   * Short name, e.g. 'aws', 'azure', etc...
   */
  public target: string;
  /**
   * Full name of the cloud, e.g. 'Amazone Web Services'
   */
  public title: string;
  /**
   * Company name, e.g. 'Amazon'
   */
  public company: string;
  
  public categoryListUrl:string;

  public componentUrl:string; 
  
  public edgesUrl:string;

  /**
   * Image URL to a logo of the cloud provider
   */
  public image: string;
  /**
   * Array of all available regions for this cloud provider in this model
   */
  public regions: Region[];
  /**
   * Reference to the service catalog of the cloud provider
   */
  public catalog: Catalog;

  constructor() {
    this.regions = [];
    this.catalog = null;
  }

}


