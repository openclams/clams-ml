import JsonComponent from '../../schema/graphs/json-component';
import Component from '../../model/service-catalog/component';
import Model from '../../model/model';
export default class ComponentFactory {
    static fromJSON(jsonComponent: JsonComponent): Component;
    static toJSON(component: Component): JsonComponent;
    static copy(component: Component, model?: Model): Component;
}
