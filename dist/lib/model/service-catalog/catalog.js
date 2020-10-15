"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("./category");
/**
 * The service catalog, which contains
 * all ocmponents and edges types for the use
 * in sequence diagrams.
 */
class Catalog {
    /**
     * Create a new service catalog
     * @param edges All  edgetypes for this component selection.
     * @param components All its components
     */
    constructor(edges = [], components = [], cloudProvider) {
        this.edges = edges;
        this.components = components;
        this.cloudProvider = cloudProvider;
        this.categories = this.initCategories(components);
    }
    /**
     * Sort all components to categories. Categories are part of their
     * attributes. Default category is 'None'.
     * @param components Array of components
     */
    initCategories(components) {
        const categories = [];
        for (const component of components) {
            let categoryName = 'None';
            if (component.getAttribute('category')) {
                const attr = component.getAttribute('category');
                categoryName = attr.value;
            }
            let category = categories.find((cat) => cat.name === categoryName);
            if (!category) {
                category = new category_1.default(categoryName);
                categories.push(category);
            }
            category.components.push(component);
            component.category = category;
        }
        return categories;
    }
    getComponentById(id) {
        return this.components.find(node => node.id === id);
    }
    getComponentByName(name) {
        return this.components.find(eachNode => eachNode.name === name);
    }
    getEdgeById(id) {
        return this.edges.find(eachEdge => eachEdge.id === id);
    }
    getEdgeByName(name) {
        return this.edges.find(eachEdge => eachEdge.name === name);
    }
    getComponentsByCategoryName(name) {
        return this.categories.find(category => category.name === name).components;
    }
}
exports.default = Catalog;
//# sourceMappingURL=catalog.js.map