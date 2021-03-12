import Component from './component';
import Attribute from './attribute';
import CloudProvider from './cloud-provider';
import Region from './region';
import Cost from './cost';
export default class Service extends Component {
    id: string;
    name: string;
    img: string;
    attributes: Attribute[];
    cloudProvider: CloudProvider;
    /**
     * A list of all regions, where this
     * service is available.
     */
    regions: Region[];
    costs: Cost[];
    /**
     * Patterns are components, they do not define a particular service but
     * rather group service togther to an tree structure.
     * Pattern are the inner nodes of the tree
     * @param id A unique ID
     * @param name The human-readable name
     * @param img  The service's icon
     * @param attributes A map of attributes
     */
    constructor(id: string, name: string, img: string, attributes: Attribute[], cloudProvider: CloudProvider);
    getType(): string;
    bindTo(component: Component): void;
}
