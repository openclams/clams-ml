import JsonAttribute from '../../schema/service-catalog/json-attribute';
import Attribute from '../../model/service-catalog/attribute';
export default class AttributeFactory {
    static fromJSON(jsonAttribute: JsonAttribute): Attribute;
    static toJSON(attribute: Attribute): JsonAttribute;
}
