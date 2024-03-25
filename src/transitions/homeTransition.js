import { gsap } from "gsap";

export const leaveHomeTransition = (data, state) => {
    // Pause Lenis smooth scrolling
    state.lenisManager.lenis.stop();

    // Get portal timeline
    const tl = state.portalManager.getPortalTL();
    const tlDuration = tl.duration();

    // Add onComplete callback to the timeline
    tl.add(() => {
        data.current.container.style = "display: none";
        console.log("leave home complete");
    }, tlDuration);
    return tl.play();
};

export const enterHomeTransition = (data) => {};
