import { gsap } from "gsap";

export const leaveOdysseyTransition = (data) => {
    return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.6,
    });
};

export const enterOdysseyTransition = (data) => {
    window.scrollTo(0, 0);
    gsap.set(data.next.container, {
        position: "absolute",
        top: "0px",
        width: "100%",
    });
    return gsap.from(data.next.container, {
        yPercent: 10,
        opacity: 0,
        duration: 3,
        ease: "power4.out",
        onComplete: () => {
            gsap.set(data.next.container, {
                clearProps: "all",
            });
        },
    });
};
