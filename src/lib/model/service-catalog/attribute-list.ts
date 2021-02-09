import Attribute from './attribute';

export default abstract class AttributeList {

    public attributes: Attribute[] = [];

    constructor(attributes: Attribute[]) {
        this.attributes = attributes;
    }

    /**
     * Returns the attribute if id exists, and undefined otherwise.
     * @param id Attribute id
     */
    public getAttribute(id: string): Attribute {
        return this.attributes.find(attribute => attribute.id === id);
    }

    /**
     * Attach or repliace an attribute
     */
    public setAttribute(attribute: Attribute) {
        const id = this.attributes.findIndex(a => a.id === attribute.id);
        if (id < 0) {
        this.attributes.push(attribute);
        } else {
        this.attributes[id] = attribute;
        }
    }

    public getMetaList() {
        return this.attributes.filter(a => a.id === '_meta_');
    }

    public addMeta(key: string, value: string): Attribute {
        const attr = new Attribute('_meta_');
        attr.id = '_meta_';
        attr.img = null;
        attr.name = key;
        attr.type = 'string';
        attr.value = value;
        attr.readable = false;
        attr.description = '';
        this.attributes.push(attr);
        return attr;
    }

    public removeMeta(meta: Attribute) {
        const index = this.attributes.indexOf(meta, 0);
        if (index > -1) {
            this.attributes.splice(index, 1);
        }
    }
}
