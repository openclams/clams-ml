import Component from './component';
import Attribute from './attribute';
import CloudProvider from './cloud-provider';
import Region from './region';
import Cost from './cost';

export default class Service extends Component {

  /**
   * A list of all regions, where this
   * service is available.
   */
  public regions:  Region[];

  public costs: Cost[];


  /**
   * Patterns are components, they do not define a particular service but
   * rather group service togther to an tree structure.
   * Pattern are the inner nodes of the tree
   * @param id A unique ID
   * @param name The human-readable name
   * @param img  The service's icon
   * @param attributes A map of attributes
   */
  constructor(public id: string,
              public name: string,
              public img: string,
              public attributes: Attribute[],
              public cloudProvider: CloudProvider
  ) {
    super(id, name, img, attributes, cloudProvider);
    this.regions = [];
    this.costs = [];
  }

  public getType(): string {
    return 'Service';
  }

  public bindTo(component: Component) {
    super.bindTo(component);
    if (component instanceof Service) {
      this.regions  = component.regions;
    }
  }
}
