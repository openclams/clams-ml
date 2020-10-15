import Component from './component';
import Attribute from './attribute';
import CloudProvider from './cloud-provider';
export default class Template extends Component {
    id: string;
    name: string;
    img: string;
    attributes: Attribute[];
    cloudProvider: CloudProvider;
    components: Component[];
    /**
     * Patterns are components, they do not define a particular service but
     * rather group service togther to an tree structure.
     * Pattern are the inner nodes of the tree
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The template's icon
     * @param attributes An array of attributes
     */
    constructor(id: string, name: string, img: string, attributes: Attribute[], cloudProvider: CloudProvider);
    getType(): string;
    bindTo(component: Template): void;
}
