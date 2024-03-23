import PortalManager from "../modules/portalManager";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let portalManager = null; // Make portalManager accessible outside setupHomeView
/*
 * Handle Home View Animations
 */
export const setupHomeView = (data) => {

    // Init Portal Manager
    let $portalsContainer = document.getElementById("portalsContainer");
    portalManager = new PortalManager($portalsContainer);

    // Refresh ScrollTrigger
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 150);
};

export const cleanupHomeView = () => {
    if (portalManager) {
        portalManager.portalScrollTrigger.kill(); // Kill the ScrollTrigger instance
        portalManager = null; // Dereference to avoid memory leaks
    }
};
