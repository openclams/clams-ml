/**
 * Attribute class for components, edges, and templates.
 */
export default class Attribute {
    /**
     * id of the attribute
     */
    id: string;
    /**
     * Title name
     */
    name: string;
    /**
     * URL to attribute icon
     */
    img: string;
    /**
     * Tooltip about the attribute
     */
    description: string;
    /**
     * Attribute Types are:
     *  string
     *  number
     *  boolean
     *  enum
     *  cost
     */
    type: string;
    /**
     * On enum: Record<string,string>
     * On cost: Cost class
     */
    value: any;
    /**
     * If true, then the value cannot be changed.
     * If false, the user can change the value.
     */
    readable: boolean;
    constructor(id: string);
}
