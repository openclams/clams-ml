import JsonComponent from '../../json-model/graphs/json-component';
import Component from '../../model/service-catalog/component';
import Pattern from '../../model/service-catalog/pattern';
import Service from '../../model/service-catalog/service';
import TemplateType from '../../model/service-catalog/template';
import AttributeFactory from './attribute-factory';
import Project from '../../model/project';
import RegionFactory from './region-factory';


export default class ComponentFactory {
    public static fromJSON(jsonComponent: JsonComponent): Component {
        let component = null;
        if (jsonComponent.type === 'Pattern') {
            component = new Pattern(jsonComponent.id, jsonComponent.name,  jsonComponent.img, null, null);
        } else if (jsonComponent.type === 'Service') {
            component = new Service(jsonComponent.id, jsonComponent.name,  jsonComponent.img, null, null);
        } else {
            component = new TemplateType(jsonComponent.id, jsonComponent.name,  jsonComponent.img, null, null);
            component.components = jsonComponent.components.map(josnComponent => ComponentFactory.fromJSON.call(this, josnComponent));
        }

        component.attributes = jsonComponent.attributes.map(a => AttributeFactory.fromJSON(a));

        if (this instanceof Project) {
            component.cloudProvider = this.cloudProviders.find(p => p.target === jsonComponent.targetCloud);
            if ( component instanceof Service && jsonComponent.regions) {
              //  component.regions = jsonComponent.regions.map(r => RegionFactory.fromJSON.call(component.targetCloud,));
            }
        }
        return component;
    }
    public static toJSON(component: Component): JsonComponent {
        const jsonComponent = {
            'type': component.getType(),
            'id': component.id,
            'name': component.name,
            'img': component.img,
            'attributes': component.attributes.map(a => AttributeFactory.toJSON(a)),
            'targetCloud': component.cloudProvider.target
        };
        if (component instanceof TemplateType) {
            jsonComponent['components'] = component.components.map(c => ComponentFactory.toJSON(c));
        }
        //if (component instanceof Service) {
        //    jsonComponent['regions'] = component.regions.map(r => RegionFactory.toJSON(r));
        //}
        return jsonComponent;
    }

    public static copy(component: Component, project?: Project): Component {
        const jsonComponent = ComponentFactory.toJSON(component);
        return ComponentFactory.fromJSON.call(project, jsonComponent);
    }
}
