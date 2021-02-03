import Attribute from './attribute';
import CloudProvider from './cloud-provider';
import Category from './category';
import AttributeList from './attribute-list';
/**
 * Gerenic component to represent,
 *  services
 *  patterns
 *  templates
 *
 * Components form a refinement tree.
 */
export default abstract class Component extends AttributeList {
    id: string;
    name: string;
    img: string;
    cloudProvider: CloudProvider;
    category: Category;
    children: Component[];
    parent: Component;
    /**
     * A component in the service catalog
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The component's icon
     */
    constructor(id: string, name: string, img: string, attributes: Attribute[], cloudProvider: CloudProvider);
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
