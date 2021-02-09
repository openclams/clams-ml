import Attribute from './attribute';
export default abstract class AttributeList {
    attributes: Attribute[];
    constructor(attributes: Attribute[]);
    /**
     * Returns the attribute if id exists, and undefined otherwise.
     * @param id Attribute id
     */
    getAttribute(id: string): Attribute;
    /**
     * Attach or repliace an attribute
     */
    setAttribute(attribute: Attribute): void;
    getMetaList(): Attribute[];
    addMeta(key: string, value: string): Attribute;
    removeMeta(meta: Attribute): void;
}
