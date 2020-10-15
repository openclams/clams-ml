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
    /**
     * Sort all components to categories. Categories are part of their
     * attributes. Default category is 'None'.
     * @param components Array of components
     */
    private initCategories;
    getComponentById(id: string): Component;
    getComponentByName(name: string): Component;
    getEdgeById(id: string): EdgeType;
    getEdgeByName(name: string): EdgeType;
    getComponentsByCategoryName(name: string): Component[];
}
