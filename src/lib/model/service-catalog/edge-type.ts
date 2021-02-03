import AttributeList from './attribute-list';
import Attribute from './attribute';

export default  class EdgeType extends AttributeList{

  /**
   * An edge type that are linked with messages in SQDs
   * @param name Human-readable edge name
   */
  constructor(public name: string, attributes: Attribute[]) {
    super(attributes);
  }
  
}
