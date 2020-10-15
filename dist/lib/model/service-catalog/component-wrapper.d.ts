import Component from './component';
import Element from '../graphs/sequence-diagram/element';
/**
 * This is a helper class to ease the
 * search for all instances, that reference the same component
 * across all graphs efficently.
 */
export default class ComponentWrapper {
    component: Component;
    /**
     * Array of all instancs in this model that
     * reference this component.
     */
    instances: Element[];
    constructor(component: Component);
}
