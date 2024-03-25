import { gsap } from "gsap";

export const leaveOdysseyTransition = (data) => {
    return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.6,
    });
};

export const enterOdysseyTransition = (data, state) => {
    // Enter the content with absolute position
    gsap.set(data.next.container, {
        position: "absolute",
        top: "0px",
        width: "100%",
    });
    // Hide the footer
    gsap.set(".footer", { autoAlpha: 0 });
    // Add text-shuffle effect on h1 tag

    return gsap.from(data.next.container, {
        yPercent: 3,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        onComplete: () => {
            gsap.set(data.next.container, {
                clearProps: "all",
            });
            // Show footer
            gsap.set(".footer", { autoAlpha: 1 });
            // Unblock scrolling
            document.body.style.overflow = "unset";
            // Resume Lenis smooth scrolling
            state.lenisManager.lenis.start();

            // Scroll to top
            // state.lenisManager.lenis.scrollTo(0);
        },
    });
};
