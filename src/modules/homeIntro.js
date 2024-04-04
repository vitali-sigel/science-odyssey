import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TypeShuffle from "../effects/typeShuffleGSAP";
import TitleShuffleEffect from "../effects/titleShuffleEffect";

export default class HomeIntro {
    constructor() {
        this.$container = document.getElementById("homeIntro");
        if (!this.$container) {
            console.error("Home intro container not found.");
            return;
        }

        // Get the enter timeline
        this.enterTL = this.initEnterTL();

        // Trigger the enter timeline when the preloader is complete and the element is in view
        document.addEventListener("preloaderComplete", () => {
            const isInView = () => {
                const rect = this.$container.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                        (window.innerHeight ||
                            document.documentElement.clientHeight) &&
                    rect.right <=
                        (window.innerWidth ||
                            document.documentElement.clientWidth)
                );
            };

            if (isInView()) {
                // Element is in view
                console.log("Element is in view");
                this.init();
            } else {
                // Element is not in view
                console.log("Element is not in view");
            }
        });
    }

    init() {
        console.log("homeIntro init()");
        this.enterTL.play();
    }

    initEnterTL() {
        const $planet = this.$container.querySelector(".planet");
        const $moon = this.$container.querySelector(".moon");
        const $lead = this.$container.querySelector(".home-intro__lead");
        const $title = this.$container.querySelector(".home-intro__title");
        let tl = gsap.timeline({
            paused: true,
        });

        gsap.defaults({
            duration: 3,
            ease: "quint.out",
        });

        tl.from(
            $planet,
            {
                yPercent: -20,
            },
            "a"
        )
            .from(
                $moon,
                {
                    yPercent: -60,
                },
                "a"
            )
            .add(() => {
                let titleShuffle = new TitleShuffleEffect($title);
                titleShuffle.play();
            }, "a")
            .add(() => {
                new TypeShuffle({
                    elementEnter: $lead,
                    animationType: "in",
                }).trigger();
            }, "b-=1.6");

        return tl;
    }

    // initScrollTrigger() {
    //     console.log("init scrolltrigger", this.$container);

    //     let scrollTrigger = ScrollTrigger.create({
    //         markers: true,
    //         trigger: this.$container,
    //         start: "top top",
    //         end: "bottom center",
    //         toggleClass: "is-active",
    //         onEnter: () => {
    //             console.log("Home Intro Scroll Trigger Enter");
    //             // this.enterTL.play();
    //         },
    //         onLeaveBack: () => {
    //             console.log("Home Intro Scroll Trigger Leave");
    //         },
    //     });

    //     return scrollTrigger;
    // }

    dispose() {
        console.log("dispose home intro tuff");
    }
}
