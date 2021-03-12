"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("../../model/service-catalog/pattern");
const service_1 = require("../../model/service-catalog/service");
const template_1 = require("../../model/service-catalog/template");
const attribute_factory_1 = require("./attribute-factory");
const model_1 = require("../../model/model");
const region_factory_1 = require("./region-factory");
const cost_factory_1 = require("./cost-factory");
class ComponentFactory {
    static fromJSON(jsonComponent) {
        const attributes = jsonComponent.attributes.map(a => attribute_factory_1.default.fromJSON(a));
        let cloudProvider = null;
        if (this instanceof model_1.default) {
            cloudProvider = this.cloudProviders.find(p => p.target === jsonComponent.targetCloud);
        }
        let component = null;
        if (jsonComponent.type === 'Pattern') {
            component = new pattern_1.default(jsonComponent.id, jsonComponent.name, jsonComponent.img, attributes, cloudProvider);
        }
        else if (jsonComponent.type === 'Service') {
            component = new service_1.default(jsonComponent.id, jsonComponent.name, jsonComponent.img, attributes, cloudProvider);
            const service = component;
            if (jsonComponent.regions && cloudProvider) {
                service.regions = cloudProvider.regions.filter(r => jsonComponent.regions.find(rr => rr.id === r.id));
                service.regions.forEach(region => region.services.push(service));
            }
            else if (jsonComponent.regions) {
                service.regions = jsonComponent.regions.map(jsonRegions => region_factory_1.default.fromJSON(jsonRegions));
            }
            if ('costs' in jsonComponent) {
                service.costs = jsonComponent.costs.map(costRegion => {
                    if (service.cloudProvider && !service.cloudProvider.regions.some(r => r.id === costRegion.region.id)) {
                        return null;
                    }
                    const cost = cost_factory_1.default.fromJSON(costRegion);
                    // Since the units fields is not available for the cost objects int he lookup table,
                    // we simply add now the units with default 0.
                    if (costRegion.units) {
                        cost.units = costRegion.units;
                    }
                    else {
                        cost.units = 0;
                    }
                    return cost;
                }).filter(c => c);
            }
        }
        else {
            component = new template_1.default(jsonComponent.id, jsonComponent.name, jsonComponent.img, attributes, cloudProvider);
            component.components = jsonComponent.components.map(josnComponent => ComponentFactory.fromJSON.call(this, josnComponent));
        }
        return component;
    }
    static toJSON(component) {
        const jsonComponent = {
            type: component.getType(),
            id: component.id,
            name: component.name,
            img: component.img,
            attributes: component.attributes.map(a => attribute_factory_1.default.toJSON(a)),
            targetCloud: component.cloudProvider.target,
            components: null,
            regions: null,
            costs: []
        };
        if (component instanceof template_1.default) {
            jsonComponent.components = component.components.map(c => ComponentFactory.toJSON(c));
        }
        if (component instanceof service_1.default) {
            jsonComponent.regions = component.regions.map(r => region_factory_1.default.toJSON(r));
            jsonComponent.costs = component.costs.map(c => cost_factory_1.default.toJSON(c));
        }
        return jsonComponent;
    }
    static copy(component, model) {
        const jsonComponent = ComponentFactory.toJSON(component);
        const componentCopy = ComponentFactory.fromJSON.call(model, jsonComponent);
        componentCopy.bindTo(component);
        return componentCopy;
    }
}
exports.default = ComponentFactory;
//# sourceMappingURL=component-factory.js.map