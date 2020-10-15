"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("../graph");
class UserProfile extends graph_1.default {
    /**
     * Assign a unique id to an state.
     * @param prefix A prefix to make the id more informative
     */
    getNewId(prefix = 'State_') {
        return super.getNewId(prefix);
    }
    /**
     * Return the type of the graph.
     */
    getType() {
        return 'UserProfile';
    }
}
exports.default = UserProfile;
//# sourceMappingURL=user-profile.js.map