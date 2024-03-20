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
    constructor() {
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
                    leave: leaveHomeTransition,
                    afterLeave: cleanupHomeView,
                    enter: enterOdysseyTransition,
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
                    beforeEnter: setupHomeView,
                },
                {
                    namespace: "odyssey",
                    beforeEnter: setupOdysseyView,
                },
            ],
        });
    }
}
