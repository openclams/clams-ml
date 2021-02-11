"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_profile_1 = require("../../model/graphs/user-profile/user-profile");
const sequence_diagram_1 = require("../../model/graphs/sequence-diagram/sequence-diagram");
const model_1 = require("../../model/model");
const node_factory_1 = require("./node-factory");
const edge_factory_1 = require("./edge-factory");
const state_1 = require("../../model/graphs/user-profile/state");
class GraphFactory {
    static fromJSON(jsonGraph) {
        let graph = null;
        if (jsonGraph.type === 'UserProfile') {
            graph = Object.assign(new user_profile_1.default(null), jsonGraph);
        }
        else {
            graph = Object.assign(new sequence_diagram_1.default(null), jsonGraph);
        }
        if (this instanceof model_1.default) {
            graph.model = this;
        }
        graph.nodes = jsonGraph.nodes.map(jsonNode => node_factory_1.default.fromJSON.call(graph, jsonNode));
        graph.edges = jsonGraph.edges.map(jsonEdge => edge_factory_1.default.fromJSON.call(graph, jsonEdge));
        return graph;
    }
    /**
     * Call this method after all graphs are inilized.
     * We connect all states to their sequence diagrams.
     * ISSUE 9: This function is polynomial, and not efficient.
     *          We can introduce a cache (map) to gain speed up.
     */
    static connectStates(jsonGraph) {
        if (jsonGraph.type === 'UserProfile') {
            if (this instanceof model_1.default) {
                const model = this;
                const graph = model.graphs.find(g => g.id === jsonGraph.id);
                graph.nodes.forEach(node => {
                    const jsonState = jsonGraph.nodes.find(n => n.id === node.id);
                    if (node instanceof state_1.default) {
                        node.sequenceDiagram = model.graphs.find(g => g.id === jsonState.sequenceDiagramId);
                    }
                });
            }
        }
    }
    static toJSON(graph) {
        return {
            id: graph.id,
            lastId: graph.lastId,
            name: graph.name,
            type: graph.getType(),
            nodes: graph.nodes.map(node => node_factory_1.default.toJSON(node)),
            edges: graph.edges.map(edge => edge_factory_1.default.toJSON(edge))
        };
    }
}
exports.default = GraphFactory;
//# sourceMappingURL=graph-factory.js.map