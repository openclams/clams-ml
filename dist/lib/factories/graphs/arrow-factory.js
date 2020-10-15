"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrow_1 = require("../../model/graphs/user-profile/arrow");
const user_profile_1 = require("../../model/graphs/user-profile/user-profile");
const state_1 = require("../../model/graphs/user-profile/state");
class ArrowFactory {
    static fromJSON(jsonEdge) {
        const arrow = new arrow_1.default(null, null);
        arrow.probability = jsonEdge.p;
        arrow.shape = jsonEdge.shape.corners;
        if (this instanceof user_profile_1.default) {
            arrow.from = this.nodes.find(node => node.id === jsonEdge.from);
            arrow.to = this.nodes.find(node => node.id === jsonEdge.to);
            if (arrow.from instanceof state_1.default) {
                arrow.from.edgesOut.push(arrow);
            }
            if (arrow.to instanceof state_1.default) {
                arrow.to.edgesIn.push(arrow);
            }
        }
        return arrow;
    }
    static toJSON(arrow) {
        const jsonEdge = {
            type: arrow.getType(),
            from: arrow.from.id,
            to: arrow.to.id,
            p: arrow.probability,
            shape: { corners: arrow.shape }
        };
        return jsonEdge;
    }
}
exports.default = ArrowFactory;
//# sourceMappingURL=arrow-factory.js.map