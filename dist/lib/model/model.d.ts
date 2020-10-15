import Graph from './graphs/graph';
import ComponentWrapper from './service-catalog/component-wrapper';
import CloudProvider from './service-catalog/cloud-provider';
import Catalog from './service-catalog/catalog';
/**
 * The model class bundels all necessary information about
 * all grpahs and common structures. The model is a single unit of deployment.
 */
export default class Model {
    /**
     * An array of graphs, which can contain sequence
     * or user profile diagrams.
     */
    graphs: Graph[];
    /**
     * An array of all components that are present in the
     * sequence diagrams in [[model.graph]].
     */
    components: ComponentWrapper[];
    /**
     * An array of cloud providers.
     */
    cloudProviders: CloudProvider[];
    /**
     * Last id assignde to a an graph.
     * Everytime when we add a new graph, we
     * need to assign an unique id to the graph.
     * This counter stores the latest assigned id.
     */
    lastId: number;
    /**
     * On init, all fields are set to empty values.
     */
    constructor();
    /**
     * Generate a unqique id when creating a new graph
     * in this model.
     * @param prefix The id can have a prefix to make it
     * more informative when transforming to JSON.
     */
    getNewId(prefix?: string): string;
    /**
     * Bind the service catalog to this model.
     * Key idea. When a model gets serlialized the catalog is
     * ignored, because it is to large. In order to compute parent
     * and child nodes for the components in the sequence diagrams,
     * we need to load the service catalog and attach it to the model.
     */
    bindTo(catalog: Catalog): void;
}
