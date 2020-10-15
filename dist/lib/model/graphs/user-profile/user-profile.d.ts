import Graph from '../graph';
export default class UserProfile extends Graph {
    /**
     * Assign a unique id to an state.
     * @param prefix A prefix to make the id more informative
     */
    getNewId(prefix?: string): string;
    /**
     * Return the type of the graph.
     */
    getType(): string;
}
