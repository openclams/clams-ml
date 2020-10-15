import JsonModel from '../schema/json-model';
import Model from '../model/model';
export default class ModelFactory {
    static fromJSON(jsonModel: JsonModel): Model;
    static toJSON(model: Model): JsonModel;
    static copy(model: Model): Model;
}
