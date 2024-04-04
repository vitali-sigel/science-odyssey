import { gsap } from "gsap";

export default class Preloader {
    constructor(lenisManager, header) {
        this.$container = document.getElementById("preloader");
        if (!this.$container) {
            console.warn("No preloader container found (#preloader)");
            return;
        }

        this.tl = this.createTimeline(lenisManager, header);
        this.animate();
    }

    animate() {
        this.tl.play();
    }

    createTimeline(lenisManager, header) {
        const $text = this.$container.querySelectorAll(".preloader__text");
        const $count = this.$container.querySelector(".preloader__count");
        let counter = { value: 0 };
        const tl = gsap.timeline({
            paused: true,
            onStart: () => {
                document.body.overflow = "hidden";
                lenisManager.lenis.stop();
                header.animateIn();
            },
            onComplete: () => {
                document.body.overflow = "auto";
                lenisManager.lenis.start();
            },
        });

        tl.from(
            [$text, $count],
            {
                duration: 0.5,
                stagger: {
                    each: 0.3,
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
        tl.to(
            counter,
            {
                value: 100,
                duration: 1,
                delay: 0.6,
                onUpdate: function () {
                    $count.textContent = Math.round(counter.value)
                        .toString()
                        .padStart(2, "0");
                },
                ease: "quad.out",
            },
            "b"
        );
        tl.from(
            [$count, $text],
            {
                onStart: function () {
                    this.targets().forEach((el) => {
                        console.log(el);
                        applyExactTextShuffle(el, "out");
                    });
                },
                duration: 0.5,
                onComplete: function () {
                    this.targets().forEach((el) => {
                        gsap.to(el, { autoAlpha: 0 });
                    });
                },
            },
            "c"
        );
        tl.to(this.$container, { autoAlpha: 0, duration: 1 }, "d");
        tl.add(() => {
            console.log("dispatch event: ");
            document.dispatchEvent(new CustomEvent('preloaderComplete'));
        }, "d-=0.5")

        return tl;
    }
}
