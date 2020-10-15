import JsonGraph from '../../schema/graphs/json-graph';
import Graph from '../../model/graphs/graph';
export default class GraphFactory {
    static fromJSON(jsonGraph: JsonGraph): Graph;
    /**
     * Call this method after all graphs are inilized.
     * We connect all states to their sequence diagrams.
     * ISSUE 9: This function is polynomial, and not efficient.
     *          We can introduce a cache (map) to gain speed up.
     */
    static connectStates(jsonGraph: JsonGraph): void;
    static toJSON(graph: Graph): JsonGraph;
}
