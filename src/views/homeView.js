import PortalManager from "../modules/portalManager";
import HomeIntro from "../modules/homeIntro";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let portalManager = null; // Make portalManager accessible outside setupHomeView // TODO Do i need this?
// let homeIntro = null;
/*
 * Handle Home View Animations
 */
export const setupHomeView = (data, state) => {
    // Init Portal Manager
    state.portalManager = new PortalManager();

    new HomeIntro();

    // TODO: Workaround - Refresh ScrollTrigger
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 150);
};

export const getPortalManager = () => {
    return portalManager;
};

export const cleanupHomeView = (data, state) => {
    state.portalManager.portalScrollTrigger.kill(); // Kill the ScrollTrigger instance
};
