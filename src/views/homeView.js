import PortalManager from "../modules/portalManager";

let portalManager = null;  // Make portalManager accessible outside setupHomeView
/*
 * Handle Home View Animations
 */
export const setupHomeView = (data) => {
    let $portalsContainer = document.getElementById("portalsContainer");
    portalManager = new PortalManager($portalsContainer);
};

export const cleanupHomeView = () => {
    if (portalManager) {
        portalManager.portalScrollTrigger.kill();  // Kill the ScrollTrigger instance
        portalManager = null;  // Dereference to avoid memory leaks
    }
};