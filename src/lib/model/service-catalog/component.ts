import Attribute from './attribute';
import CloudProvider from './cloud-provider';
import Category from './category';
import AttributeList from './attribute-list';

/**
 * Gerenic component to represent,
 *  services
 *  patterns
 *  templates
 *
 * Components form a refinement tree.
 */
export default  abstract class Component extends AttributeList {

  public category: Category;
  public children: Component[];
  public parent: Component;

  /**
   * A component in the service catalog
   * @param id A unique ID
   * @param name The human-readable name
   * @param img  The component's icon
   */
  constructor(public id: string,
              public name: string,
              public img: string,
              attributes: Attribute[],
              public cloudProvider: CloudProvider,

  ) {
    super(attributes);
    this.children = [];
    this.parent = null;
  }

  /**
   * Is a root component in the refinement tree.
   */
  public isRoot(): boolean {
    return this.parent == null;
  }

  public bindTo(component: Component) {
    this.category = component.category;
    this.cloudProvider = component.cloudProvider;
  }

  /**
   * Return the type of the component
   */
  public abstract getType(): string;

}
