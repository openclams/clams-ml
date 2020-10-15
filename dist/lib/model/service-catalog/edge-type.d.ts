import Attribute from './attribute';
import Component from './component';
export default class EdgeType {
    id: string;
    name: string;
    allowed: {
        from: Component;
        to: Component;
    }[];
    exclude: {
        from: Component;
        to: Component;
    }[];
    attributes: Attribute[];
    /**
     * An edge type that are linked with messages in SQDs
     * @param id Unique Edge Id
     * @param name Human-readable edge name
     * @param allowed white list of allowed connections
     * @param exclude black list of disallowed connections
     * @param attributes Array of attributes
     */
    constructor(id: string, name: string, allowed: {
        from: Component;
        to: Component;
    }[], exclude: {
        from: Component;
        to: Component;
    }[], attributes: Attribute[]);
    /**
     * Returns the attribute if id exists, and undefined otherwise.
     * @param id Attribute id
     */
    getAttribute(id: string): Attribute;
    /**
     * Attach or repliace an attribute
     */
    setAttribute(attribute: Attribute): void;
}
