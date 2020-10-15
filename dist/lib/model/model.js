"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The model class bundels all necessary information about
 * all grpahs and common structures. The model is a single unit of deployment.
 */
class Model {
    /**
     * On init, all fields are set to empty values.
     */
    constructor() {
        this.graphs = [];
        this.components = [];
        this.cloudProviders = [];
        this.lastId = 0;
    }
    /**
     * Generate a unqique id when creating a new graph
     * in this model.
     * @param prefix The id can have a prefix to make it
     * more informative when transforming to JSON.
     */
    getNewId(prefix = 'Graph_') {
        return prefix + (this.lastId++);
    }
    /**
     * Bind the service catalog to this model.
     * Key idea. When a model gets serlialized the catalog is
     * ignored, because it is to large. In order to compute parent
     * and child nodes for the components in the sequence diagrams,
     * we need to load the service catalog and attach it to the model.
     */
    bindTo(catalog) {
        // replace the cloud provider object
        const idx = this.cloudProviders.findIndex(provider => provider.target === catalog.cloudProvider.target);
        if (idx > -1) {
            this.cloudProviders[idx] = catalog.cloudProvider;
        }
        else {
            this.cloudProviders.push(catalog.cloudProvider);
        }
        this.components.forEach(componentWrapper => {
            const id = componentWrapper.component.id;
            const catalogComponent = catalog.getComponentById(id);
            if (catalogComponent) {
                componentWrapper.component.bindTo(catalogComponent);
            }
        });
    }
}
exports.default = Model;
//# sourceMappingURL=model.js.map