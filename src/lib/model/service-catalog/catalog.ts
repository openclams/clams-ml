import EdgeType from './edge-type';
import Component from './component';
import Category from './category';
import CloudProvider from './cloud-provider';

/**
 * The service catalog, which contains
 * all ocmponents and edges types for the use
 * in sequence diagrams.
 */
export default class Catalog {


  /**
   * Components are sorted according to categories.
   * Componentes store their category as a reserved
   * attribute with the id 'category'.
   */
  readonly categories: Category[];

  /**
   * Create a new service catalog
   * @param edges All  edgetypes for this component selection.
   * @param components All its components
   */
  constructor(public edges: EdgeType[] = [],
              public components: Component[] = [], public cloudProvider: CloudProvider) {
      this.categories = [];
  }

  public getComponentById(id: string): Component {
    return this.components.find(node => node.id === id);
  }

  public getComponentByName(name: string): Component {
    return this.components.find(eachNode => eachNode.name === name);
  }

  public getEdgeByName(name: string): EdgeType {
    return this.edges.find(eachEdge => eachEdge.name === name);
  }

  public getComponentsByCategoryName(name: string): Component[] {
    return this.categories.find(category => category.name === name).components;
  }
}
