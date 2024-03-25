import barba from "@barba/core";
import {
    leaveHomeTransition,
    enterHomeTransition,
} from "../transitions/homeTransition";
import {
    leaveOdysseyTransition,
    enterOdysseyTransition,
} from "../transitions/odysseyTransition";
import { setupHomeView, cleanupHomeView } from "../views/homeView";
import { setupOdysseyView } from "../views/odysseyView";

export default class BarbaManager {
    constructor(lenisManager) {
        this.globalState = {
            portalManager: null,
            lenisManager: lenisManager
        };
        this.barba = barba;
        this.init();
    }

    init() {
        this.barba.init({
            transitions: [
                {
                    name: "leave-home",
                    from: { namespace: ["home"] },
                    to: { namespace: ["odyssey"] },
                    leave: (data) => {
                        return leaveHomeTransition(data, this.globalState);
                    },
                    afterLeave: (data) => {
                        return cleanupHomeView(data, this.globalState);
                    },
                    enter: (data) => {
                        return enterOdysseyTransition(data, this.globalState);
                    },
                },
                {
                    name: "enter-home",
                    from: { namespace: ["odyssey"] },
                    to: { namespace: ["home"] },
                    leave: leaveOdysseyTransition,
                    enter: enterHomeTransition,
                },
            ],
            views: [
                {
                    namespace: "home",
                    beforeEnter: (data) => {
                        return setupHomeView(data, this.globalState);
                    },
                },
                {
                    namespace: "odyssey",
                    beforeEnter: setupOdysseyView,
                },
            ],
        });
    }
}
