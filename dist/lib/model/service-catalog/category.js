"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    /**
     * We group components by category in the side bar
     * @param name Name of the category
     * @param components Array of componentes that belong to this category
     */
    constructor(name, components = []) {
        this.name = name;
        this.components = components;
    }
}
exports.default = Category;
//# sourceMappingURL=category.js.map