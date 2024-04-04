import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default class TitleShuffleEffect {
    constructor(title) {
        this.$title = title;

        this.splitText = new SplitText(this.$title, { type: "chars" });
        this.chars = this.splitText.chars;

        this.duration = 0.15; // Duration of each character animation
        this.stagger = 0.04; // Stagger time between each character animation

        this.tl = this.initTL();
    }

    initTL() {
        let tl = gsap.timeline({
            paused: true,
            onStart: () => {
                this.$title.style.opacity = 1;
            },
            onComplete: () => {
                this.splitText.revert();
                this.$title.style.opacity = 1;
            },
        });

        gsap.defaults({
            duration: 3,
            ease: "quint.out",
        });

        tl.from(this.chars, {
            duration: this.duration,
            opacity: 0,
            // position: "absolute",
            // reduceWhiteSpace: false,
            // webkitFilter:"blur(" + 5 + "px)",
            stagger: {
                each: this.stagger,
                from: "random",
            },
        });

        return tl;
    }

    play() {
        this.tl.play();
    }
}
