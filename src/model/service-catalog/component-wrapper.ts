import Instance from '../graphs/sequence-diagram/instance';
import Component from './component';

/**
 * This is a helper class to ease the
 * search for all instances, that reference the same component
 * across all graphs efficently.
 */
export default  class ComponentWrapper {

  /**
   * Array of all instancs in this project that
   * reference this component.
   */
  public instances: Instance[];

  constructor(public component: Component) {
    this.instances = [];
  }

}
