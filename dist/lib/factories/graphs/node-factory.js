"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceFactory = exports.TemplateFactory = exports.StateFactory = exports.DotFactory = void 0;
const dot_1 = require("../../model/graphs/user-profile/dot");
const state_1 = require("../../model/graphs/user-profile/state");
const template_1 = require("../../model/graphs/sequence-diagram/template");
const instance_1 = require("../../model/graphs/sequence-diagram/instance");
const geometry_factory_1 = require("./geometry-factory");
const graph_1 = require("../../model/graphs/graph");
const user_profile_1 = require("../../model/graphs/user-profile/user-profile");
class NodeFactory {
    static fromJSON(jsonNode) {
        if (jsonNode.type === "Dot") {
            return DotFactory.fromJSON.call(this, jsonNode);
        }
        else if (jsonNode.type === "State") {
            return StateFactory.fromJSON.call(this, jsonNode);
        }
        else if (jsonNode.type === "Template") {
            return TemplateFactory.fromJSON.call(this, jsonNode);
        }
        else if (jsonNode.type === "Instance") {
            return InstanceFactory.fromJSON.call(this, jsonNode);
        }
        return null;
    }
    static toJSON(node) {
        if (node instanceof dot_1.default) {
            return DotFactory.toJSON(node);
        }
        else if (node instanceof state_1.default) {
            return StateFactory.toJSON(node);
        }
        else if (node instanceof template_1.default) {
            return TemplateFactory.toJSON(node);
        }
        else if (node instanceof instance_1.default) {
            return InstanceFactory.toJSON(node);
        }
        return null;
    }
}
exports.default = NodeFactory;
class DotFactory {
    static fromJSON(jsonNode) {
        const dot = new dot_1.default(null);
        dot.id = jsonNode.id;
        if (this instanceof user_profile_1.default) {
            dot.graph = this;
        }
        dot.geometry = geometry_factory_1.default.fromJSON(jsonNode.geometry);
        return dot;
    }
    static toJSON(dot) {
        return {
            type: dot.getType(),
            id: dot.id,
            geometry: geometry_factory_1.default.toJSON(dot.geometry),
        };
    }
}
exports.DotFactory = DotFactory;
class StateFactory {
    static fromJSON(jsonState) {
        const state = new state_1.default(null, null);
        state.id = jsonState.id;
        if (this instanceof user_profile_1.default) {
            state.graph = this;
        }
        state.geometry = geometry_factory_1.default.fromJSON(jsonState.geometry);
        // sequenceDiagram is referenced later as we can't be sure its already loaded here
        return state;
    }
    static toJSON(state) {
        return {
            id: state.id,
            type: state.getType(),
            sequenceDiagramId: state.sequenceDiagram.id,
            geometry: geometry_factory_1.default.toJSON(state.geometry),
        };
    }
}
exports.StateFactory = StateFactory;
class TemplateFactory {
    static fromJSON(jsonInstance) {
        const template = new template_1.default(null, null);
        template.id = jsonInstance.id;
        template.geometry = geometry_factory_1.default.fromJSON(jsonInstance.geometry);
        if (this instanceof graph_1.default) {
            template.graph = this;
            const componentWrapper = this.model.components.find((c) => c.component.id === jsonInstance.component);
            template.componentWrapper = componentWrapper;
            template.nodes = jsonInstance.nodes.map((jsonNode) => NodeFactory.fromJSON.call(this, jsonNode));
            template.nodes.forEach((node) => (node.parent = template));
        }
        return template;
    }
    static toJSON(template) {
        return {
            type: template.getType(),
            id: template.id,
            geometry: geometry_factory_1.default.toJSON(template.geometry),
            component: template.component.id,
            nodes: template.nodes.map((node) => NodeFactory.toJSON(node)),
        };
    }
}
exports.TemplateFactory = TemplateFactory;
class InstanceFactory {
    static fromJSON(jsonInstance) {
        const instance = new instance_1.default(null, null);
        instance.id = jsonInstance.id;
        instance.geometry = geometry_factory_1.default.fromJSON(jsonInstance.geometry);
        if (this instanceof graph_1.default) {
            instance.graph = this;
            const name = jsonInstance.component;
            const componentWrapper = this.model.components.find((c) => c.component.getAttribute("name").value === name);
            instance.componentWrapper = componentWrapper;
            componentWrapper.instances.push(instance);
        }
        return instance;
    }
    static toJSON(instance) {
        return {
            type: instance.getType(),
            id: instance.id,
            geometry: geometry_factory_1.default.toJSON(instance.geometry),
            component: instance.component.getAttribute("name").value,
        };
    }
}
exports.InstanceFactory = InstanceFactory;
//# sourceMappingURL=node-factory.js.map