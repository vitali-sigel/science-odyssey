import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const leaveHomeTransition = (data) => {
    console.log("leave home");

    return gsap.to(data.current.container, {
        duration: 4,
        onComplete: () => {
            data.current.container.style = "display: none";
            console.log("leave home complete");
        },
    });
};

export const enterHomeTransition = (data) => {};
