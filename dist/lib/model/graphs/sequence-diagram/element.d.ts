import Node from '../node';
import ComponentWrapper from '../../service-catalog/component-wrapper';
import Component from '../../service-catalog/component';
import SequenceDiagram from './sequence-diagram';
/**
 * In context of sequence diagrams,
 * an element is a node that represents a component
 * from the service catalog.
 */
export default abstract class Element extends Node {
    graph: SequenceDiagram;
    componentWrapper: ComponentWrapper;
    /**
     * An element might be embeded into an other element, i.e., a template.
     * If null, then this element is at the root.
     */
    parent: Element;
    /**
     * Creating a new element in an sequence diagramm.
     * @param componentWrapper A reference to the direct component
     * item in the components array of model. This reference can
     * be used to traverse all graphs that contain an element that
     * references the same component.
     */
    constructor(graph: SequenceDiagram, componentWrapper: ComponentWrapper);
    /**
     * Return the the component of this element
     */
    get component(): Component;
}
