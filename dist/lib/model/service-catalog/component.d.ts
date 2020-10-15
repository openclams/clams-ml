import Attribute from './attribute';
import CloudProvider from './cloud-provider';
import Category from './category';
/**
 * Gerenic component to represent,
 *  services
 *  patterns
 *  templates
 *
 * Components form a refinement tree.
 */
export default abstract class Component {
    id: string;
    name: string;
    img: string;
    attributes: Attribute[];
    cloudProvider: CloudProvider;
    category: Category;
    children: Component[];
    parent: Component;
    /**
     * A component in the service catalog
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The component's icon
     * @param attributes A map of attributes
     */
    constructor(id: string, name: string, img: string, attributes: Attribute[], cloudProvider: CloudProvider);
    /**
     * Returns the attribute if id exists, and undefined otherwise.
     */
    getAttribute(id: string): Attribute;
    /**
     * Attach or repliace an attribute
     */
    setAttribute(attribute: Attribute): void;
    /**
     * Is a root component in the refinement tree.
     */
    isRoot(): boolean;
    bindTo(component: Component): void;
    /**
     * Return the type of the component
     */
    abstract getType(): string;
}
