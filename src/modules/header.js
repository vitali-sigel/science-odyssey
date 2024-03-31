import { gsap } from "gsap";

export default class Header {
    constructor() {
        this.$container = document.getElementById("header");
        if (!this.$container) {
            console.warn("No header container found (#header)");
            return;
        }

        this.tl = this.createTimeline();
    }

    animateIn() {
        this.tl.play();
    }

    createTimeline() {
        const $eyebrows = this.$container.querySelectorAll(".h4, .eyebrow");
        const tl = gsap.timeline({ paused: true });

        tl.to(this.$container, { opacity: 1, duration: 0.01 }, "a");
        tl.to($eyebrows, { autoAlpha: 0, duration: 0.01 }, "a");
        tl.from(
            $eyebrows,
            {
                duration: 0.1,
                stagger: {
                    each: 0.1,
                    onStart: function () {
                        applyExactTextShuffle(this.targets()[0], "in");
                    },
                    onComplete: function () {
                        gsap.set(this.targets()[0], { autoAlpha: 1 });
                    },
                },
            },
            "a"
        );

        return tl;
    }
}
