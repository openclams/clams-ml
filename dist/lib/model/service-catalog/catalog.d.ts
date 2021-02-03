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
    edges: EdgeType[];
    components: Component[];
    cloudProvider: CloudProvider;
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
    constructor(edges: EdgeType[], components: Component[], cloudProvider: CloudProvider);
    getComponentById(id: string): Component;
    getComponentByName(name: string): Component;
    getEdgeByName(name: string): EdgeType;
    getComponentsByCategoryName(name: string): Component[];
}
