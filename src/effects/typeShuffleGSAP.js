import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the GSAP SplitText plugin
gsap.registerPlugin(SplitText);

export default class TypeShuffle {
    constructor({ elementLeave, elementEnter, animationType = "in" }) {
        // Elements
        this.elementLeave = elementLeave;
        this.elementEnter = elementEnter;
        this.animationType = animationType;

        // Initialize SplitText for the elements if they exist
        this.splitTextLeave = elementLeave
            ? new SplitText(elementLeave, { type: "chars, lines" })
            : null;
        this.splitTextEnter = elementEnter
            ? new SplitText(elementEnter, { type: "chars, lines" })
            : null;

        // Set splitText and chars based on the provided elements and the animation type
        switch (this.animationType) {
            case "in":
                if (this.splitTextEnter) {
                    this.splitText = this.splitTextEnter;
                    this.chars = this.splitText.chars; // Array of all characters for the entering element
                } else {
                    console.error("No enter element to animate.");
                    this.splitText = null;
                    this.chars = [];
                }
                break;
            case "out":
                if (this.splitTextLeave) {
                    this.splitText = this.splitTextLeave;
                    this.chars = this.splitText.chars; // Array of all characters for the leaving element
                } else {
                    console.error("No leave element to animate.");
                    this.splitText = null;
                    this.chars = [];
                }
                break;
            case "swap":
                if (this.splitTextEnter && this.splitTextLeave) {
                    this.splitText = this.splitTextLeave;
                    this.chars = this.splitText.chars; // Array of all characters for the leaving element
                } else {
                    console.error(
                        "Both elementLeave and elementEnter are required for swap animation."
                    );
                    this.splitText = null;
                    this.chars = [];
                }
                break;
            default:
                console.warn("Unknown animation type");
                this.splitText = null;
                this.chars = [];
        }

        // Store the initial color from the provided elements, with a fallback if neither is available
        this.originalColor = elementEnter
            ? elementEnter.style.color
            : elementLeave
            ? elementLeave.style.color
            : "#000"; // Default to black if no element color is found

        // Global animation settings
        this.duration = 0.08; // Duration of each character animation
        this.stagger = 0.01; // Stagger time between each character animation
        this.colors = ["#17222E", "#1B2B3B", "#253F58"]; // Array of colors for animation
    }

    // Get a random character from the specified set
    getRandomChar() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    shuffleTextEnter() {
        // Ensure the splitTextEnter instance exists before proceeding
        if (!this.splitTextEnter) {
            console.error("No enter element to animate.");
            return;
        }
        let that = this; // Store the reference to the current context
        // Store original characters in an array
        let originals = this.chars.map((char) => char.textContent);

        this.elementEnter.style.opacity = "1"; // Make the text element visible
        gsap.fromTo(
            this.chars,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: this.duration,
                stagger: {
                    each: this.stagger,
                    from: "random",
                    repeat: 6,
                    onRepeat: function () {
                        const char = this.targets()[0]; // Get the current target element
                        char.textContent = that.getRandomChar(); // Shuffle effect
                        char.style.color =
                            that.colors[
                                Math.floor(Math.random() * that.colors.length)
                            ]; // Random color from global array
                    },
                    onComplete: function () {
                        const char = this.targets()[0]; // Get the current target element
                        // Reset to original character and color once all animations complete
                        let i = that.chars.indexOf(char); // Find the index of the character
                        // Reset to original character and color
                        char.textContent = originals[i];
                        char.style.color = that.originalColor;
                    },
                },
                onComplete: () => {
                    this.isAnimating = false;
                    that.splitText.revert();
                    this.elementEnter.style.opacity = "1"; // Make sure the text stays visible
                },
            }
        );
    }

    shuffleTextLeave() {
        // Ensure the splitTextLeave instance exists before proceeding
        if (!this.splitTextLeave) {
            console.error("No leave element to animate.");
            return;
        }
        let that = this; // Store the reference to the current context
        // Store original characters in an array
        let originals = this.chars.map((char) => char.textContent);

        gsap.to(this.chars, {
            opacity: 0,
            duration: this.duration,
            stagger: {
                each: this.stagger,
                from: "random",
                repeat: 3,
                onRepeat: function () {
                    const char = this.targets()[0]; // Get the current target element
                    char.textContent = that.getRandomChar(); // Apply shuffle effect
                    char.style.color =
                        that.colors[
                            Math.floor(Math.random() * that.colors.length)
                        ]; // Apply random color
                },
                onComplete: function () {
                    const char = this.targets()[0]; // Get the current target element
                    let i = that.chars.indexOf(char); // Find the index of the character
                    char.textContent = originals[i]; // Reset to original character
                    char.style.color = that.originalColor; // Reset to original color
                    char.style.opacity = 0;
                },
            },
            onComplete: () => {
                this.isAnimating = false;
                // After all characters are invisible, revert the SplitText changes
                that.splitText.revert();
                this.elementLeave.style.opacity = "0"; // Make sure the text stays visible
                // Optionally, you might want to hide or remove the element or do additional cleanup here
            },
        });
    }

    shuffleTextSwap() {
        // Make sure both elements are provided for swap animation
        if (!this.elementLeave || !this.elementEnter) {
            console.error(
                "Both elementLeave and elementEnter are required for swap animation."
            );
            return;
        }

        // Perform leave animation
        this.shuffleTextLeave();

        // Insert the enter text into the leave text
        this.elementLeave.innerHTML = this.elementEnter.innerHTML;

        // Perform enter animation
        // this.shuffleTextEnter();

        // Calculate the total duration of the leave animation
        let leaveAnimationDuration =
            this.chars.length * this.stagger + this.duration;

        // Schedule the enter animation after the leave animation
        gsap.delayedCall(leaveAnimationDuration, () => {
            this.shuffleTextEnter();
        });
    }

    trigger() {
        switch (this.animationType) {
            case "in":
                this.shuffleTextEnter();
                break;
            case "out":
                this.shuffleTextLeave(); // You would define this
                break;
            case "swap":
                this.shuffleTextSwap(); // You would define this
                break;
            default:
                console.warn("Unknown animation type");
        }
    }
}
