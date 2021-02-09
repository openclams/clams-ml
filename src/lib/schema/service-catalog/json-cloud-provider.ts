import JsonRegion from './json-region';

/**
 * This interface defines the shape of a cloud provider when serialized to JSON.
 */
export default interface JsonCloudProvider {
  /**
   * short name, e.g. 'aws'.
   * this target name is like the id
   * when components reference the cloud provider
   */
  target: string;

  /**
   * Full name of the cloud platform
   */
  title: string;

  /**
   * Company name
   */
  company: string;

  categoryListUrl: string;

  componentUrl: string;

  edgesUrl: string;

  /**
   * relative image/logo of the cloud provider
   */
  image: string;

  /**
   * The available cloud regions
   */
  regions: JsonRegion[];
}
