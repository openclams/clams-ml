import Element from './element';
import SequenceDiagram from './sequence-diagram';
import ComponentWrapper from '../../service-catalog/component-wrapper';
/**
 * This is the class defintion of the template
 * element, which is an instance of the template
 * component in ther service catalog.
 */
export default class Template extends Element {
    /**
     * Elements of the template
     */
    nodes: Element[];
    constructor(graph: SequenceDiagram, componentWrapper: ComponentWrapper);
    getType(): string;
}
