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
            $imageWrapper = scene.querySelector(
                ".odyssey-story__image-wrapper"
            ),
            $image = $imageWrapper.querySelector("img"),
            tl = gsap.timeline();

        // tl.from($image, {
        //     // opacity: 0,
        //     // duration: 1,
        //     scrollTrigger: {
        //         markers: true,
        //         trigger: scene,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: true,
        //         pin: $imageWrapper,
        //     },
        // });

        // ScrollTrigger.create({
        //     markers: true,
        //     trigger: scene,
        //     start: "top center",
        //     end: "bottom bottom",
        //     scrub: true,
        //     pin: $image,
        // });

        // tl.fromTo($lead, { opacity: 0 }, { opacity: 1, duration: 1 }, "a");
    }
}
