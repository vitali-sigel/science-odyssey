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
import { setupOdysseyView, cleanupOdysseyView } from "../views/odysseyView";

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
                        console.log("TRANS: leave home: Load spline already");
                        return leaveHomeTransition(data, this.globalState);
                    },
                    afterLeave: (data) => {
                        console.log("TRANS: clean up home");
                        return cleanupHomeView(data, this.globalState);
                    },
                    enter: (data) => {
                        console.log("TRANS: enter odyssey");
                        return enterOdysseyTransition(data, this.globalState);
                    },
                },
                {
                    name: "enter-home",
                    from: { namespace: ["odyssey"] },
                    to: { namespace: ["home"] },
                    leave: leaveOdysseyTransition,
                    afterLeave: (data) => {
                        console.log("TRANS: clean up odyssey");
                        return cleanupOdysseyView(data, this.globalState);
                    },
                    enter: enterHomeTransition,
                },
            ],
            views: [
                {
                    namespace: "home",
                    beforeEnter: (data) => {
                        console.log("VIEW: home");
                        return setupHomeView(data, this.globalState);
                    },
                },
                {
                    namespace: "odyssey",
                    beforeEnter: (data) => {
                        console.log("VIEW: odyssey");
                        return setupOdysseyView(data, this.globalState);
                    }
                },
            ],
        });
    }
}
