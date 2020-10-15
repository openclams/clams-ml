"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const cloud_provider_factory_1 = require("./service-catalogs/cloud-provider-factory");
const component_factory_1 = require("./service-catalogs/component-factory");
const component_wrapper_1 = require("../model/service-catalog/component-wrapper");
const graph_factory_1 = require("./graphs/graph-factory");
class ModelFactory {
    static fromJSON(jsonModel) {
        const model = new model_1.default();
        model.lastId = jsonModel.lastId;
        // Add cloud providers
        model.cloudProviders = jsonModel.cloudProviders.map(jsonProvider => cloud_provider_factory_1.default.fromJSON(jsonProvider));
        // Add components
        // Note: ComponentWrapper.instances are updated while loading the graphs
        model.components = jsonModel.components.map(jsonComponent => new component_wrapper_1.default(component_factory_1.default.fromJSON.call(model, jsonComponent)));
        // Add graphs
        model.graphs = jsonModel.graphs.map(jsonGraph => graph_factory_1.default.fromJSON.call(model, jsonGraph));
        // Bind all states from user profiles to their sequence diagram.
        jsonModel.graphs.forEach(jsonGraph => graph_factory_1.default.connectStates.call(model, jsonGraph));
        return model;
    }
    static toJSON(model) {
        const jsonModel = {
            graphs: model.graphs.map(graph => graph_factory_1.default.toJSON(graph)),
            cloudProviders: model.cloudProviders.map(provider => cloud_provider_factory_1.default.toJSON(provider)),
            components: model.components.map(cw => component_factory_1.default.toJSON(cw.component)),
            lastId: model.lastId,
        };
        return jsonModel;
    }
    static copy(model) {
        const jsonModel = ModelFactory.toJSON(model);
        return ModelFactory.fromJSON(jsonModel);
    }
}
exports.default = ModelFactory;
//# sourceMappingURL=model-factory.js.map