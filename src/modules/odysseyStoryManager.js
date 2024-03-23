import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class OdysseyStoryManager {
    constructor() {
        this.initOdysseyStoryScrolling();
    }

    initOdysseyStoryScrolling() {
        const $scenes = document.querySelectorAll(".odyssey-story__scene");
        $scenes.forEach((scene) => {
            this.createScrollScene(scene);
        });
    }

    createScrollScene(scene) {
        const $lead = scene.querySelector(".odyssey-story__lead-wrapper"),
            $pin = scene.querySelector(".scene-pin"),
            $image = scene.querySelector(".odyssey-story__image-wrapper");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scene,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: $lead,
            },
        });

        tl.fromTo($lead, { opacity: 0 }, { opacity: 1, duration: 1 }, "a");
    }
}
