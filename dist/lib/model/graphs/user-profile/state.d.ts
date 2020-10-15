import Node from '../node';
import SequenceDiagram from '../sequence-diagram/sequence-diagram';
import Arrow from './arrow';
import UserProfile from './user-profile';
/**
 * States are nodes in the user profiles.
 * Each states as a reference to an existing
 * sequence diagramm.
 *
 * Note: If the sequence diagram
 * gets removed, that this state should also be removed
 * from the user profile.
 */
export default class State extends Node {
    sequenceDiagram: SequenceDiagram;
    edgesIn: Arrow[];
    edgesOut: Arrow[];
    /**
     * Create a new state
     * @param graph User profile of the state
     * @param sequenceDiagram Reference to the state's sequence diagram
     */
    constructor(graph: UserProfile, sequenceDiagram: SequenceDiagram);
    getType(): string;
}
