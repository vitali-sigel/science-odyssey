import { TypeShuffle } from "../effects/typeShuffleEffect";
import { gsap } from "gsap";

export default class TypeShuffleManager {
    constructor() {
        this.init();
    }

    init() {
        // Function to apply the effect to a specific element by ID
        window.applyTextShuffle = function (elementId) {
            const textElement = document.getElementById(elementId);
            if (textElement) {
                const ts = new TypeShuffle(textElement);
                ts.trigger();
            } else {
                console.warn(
                    'Element with ID "' + elementId + '" was not found.'
                );
            }
        };

        // Function to apply the effect to a specific element by ID
        window.applyExactTextShuffle = function ($el, direction = "swap") {
            const ts = new TypeShuffle($el);

            // switch (direction) {
            //     case "in":
            //         console.log("in");
            //         gsap.set($el, { autoAlpha: 0 });
            //         gsap.to($el, {
            //             // autoAlpha: 0,
            //             duration: 1,
            //             onStart: () => {
            //                 ts.trigger();
            //             },
            //             onComplete: () => {
            //                 console.log("trigger");
            //                 gsap.to($el, { autoAlpha: 1, duration: 0.1 })
            //             },
            //         });
            //         break;
            //     case "out":
            //         console.log("out");
            //         break;
            //     case "swap":
            //         console.log("swap");
            //         break;
            //     default:
            //         console.warn(
            //             'Invalid direction: "' +
            //                 direction +
            //                 '". Should be: "in", "out" or "swap".'
            //         );
            // }

            if ($el) {
                // const ts = new TypeShuffle($el);
                ts.trigger();
            } else {
                console.warn('Element with ID "' + $el + '" was not found.');
            }
        };
    }
}
