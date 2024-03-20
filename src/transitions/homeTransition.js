import { gsap } from "gsap";

export const leaveHomeTransition = (data) => {
    console.log("leave home");
    return gsap.to(data.current.container, {
        duration: 2.5,
        onComplete: () => {
            data.current.container.style = "display: none";
            console.log("leave home complete");
        },
    });
};

export const enterHomeTransition = (data) => {};
