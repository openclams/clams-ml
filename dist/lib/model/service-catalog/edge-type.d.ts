import AttributeList from './attribute-list';
import Attribute from './attribute';
export default class EdgeType extends AttributeList {
    name: string;
    /**
     * An edge type that are linked with messages in SQDs
     * @param name Human-readable edge name
     */
    constructor(name: string, attributes: Attribute[]);
}
