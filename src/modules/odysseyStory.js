import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class OdysseyStoryManager {
    constructor() {
        this.$container = document.querySelector(".odyssey-story");

        if (!this.$container) {
            console.warn("No odyssey story container found (.odyssey-story)");
            return;
        }

        this.init();
    }

    init() {
        const $scale = this.$container.querySelector(
            ".odyssey-story__scale-container"
        );
        const $scaleIndicator =
            this.$container.querySelector(".scale-indicator");
        const $scaleItems = $scale.querySelectorAll(".scale-item");
        const scaleAnimation = gsap.timeline({ paused: true });
        const $scenes = this.$container.querySelectorAll(".odyssey-story__scene");

        // Animate the scale
        scaleAnimation.from(
            $scaleItems,
            {
                x: "-=8",
                scaleX: 0,
                opacity: 0,
                duration: 0.1,
                stagger: 0.01,
                ease: "power4.out",
            },
            "a"
        );
        scaleAnimation.from(
            $scaleIndicator,
            {
                x: "+=8",
                opacity: 0,
                duration: 0.2,
                ease: "power4.out",
            },
            "a"
        );

        // Control the scrolltrigger
        ScrollTrigger.create({
            // markers: true,
            trigger: this.$container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: $scale,
            onUpdate: (self) => {
                gsap.set($scaleIndicator, { top: `${self.progress * 100}%` });
            },
            onEnter: () => {
                scaleAnimation.play();
            },
            onLeaveBack: () => {
                scaleAnimation.reverse();
            }
        });

        $scenes.forEach(($scene) => {
            const $textContainer = $scene.querySelector(".odyssey-story__lead-container");
            const $text = $textContainer.querySelector(".odyssey-story__lead");
            ScrollTrigger.create({
                trigger: $scene,
                start: "top top",
                end: "bottom bottom",
                pin: $textContainer,
                toggleActions: "play none none none",
                onEnter: () => {
                    if($text.classList.contains('done')) return;
                    applyExactTextShuffle($text, "in");
                    setTimeout(() => {
                        $text.style.opacity = 1;
                        $text.classList.add('done');
                    }, 400);
                }
            });
        });
    }
}
