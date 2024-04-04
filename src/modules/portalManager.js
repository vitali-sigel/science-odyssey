import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Portal from "../effects/portalEffect";
import TypeShuffle from "../effects/typeShuffleGSAP";

export default class PortalManager {
    constructor() {
        this.$container = document.getElementById("portalsContainer");
        if (!this.$container) {
            console.warn("No portal container found (#portalsContainer)");
            return;
        }

        this.portalsWebGL = new Portal(this.$container);
        this.portalTriggers = {};
        this.portalScrollTrigger = null;
        this.activePortal = document.querySelector(
            ".portal:not(.w-condition-invisible)"
        );
        gsap.set(this.activePortal, { autoAlpha: 0 });
        this.initTriggers();
        this.initVideos();
        this.initWhenInView();
    }

    /*
     * Initialize the portal when in view
     */
    initWhenInView() {
        this.portalScrollTrigger = ScrollTrigger.create({
            // markers: true,
            trigger: this.$container,
            once: true,
            start: "top 20%",
            onEnter: () => {
                // Animate portal effect
                this.portalsWebGL.bringForwardAnimation();

                // Toggle the initial portal
                const $initialTrigger = document.getElementById(
                    "portalTriggerHexagon"
                );
                this.togglePortal($initialTrigger, true);
            },
        });
    }

    /*
     * Return the portal animation timeline
     */
    getPortalTL() {
        // Portal Content animation
        let portalTL = gsap.timeline({ paused: true });
        portalTL.to(
            this.activePortal,
            {
                duration: 0.9,
                opacity: 0,
                scale: 0.9,
                ease: "power4.out",
            },
            "a"
        );

        // Portal webgl animation
        portalTL.add(this.portalsWebGL.start(), "a");

        // Return masterTL
        return portalTL;
    }

    /*
     * Toggle the portal based on the trigger shape
     */
    togglePortal(trigger, initially = false) {
        const shape = trigger.getAttribute("data-shape");
        const contentId = trigger.getAttribute("data-content");
        const $container = document.getElementById(contentId);
        const $video = $container?.querySelector(".portal__video");

        if (!shape || !contentId) {
            console.warn("Shape or content ID missing", trigger);
            return;
        }

        // Set the trigger states
        switch (shape) {
            case "square":
                this.portalTriggers.square.style.display = "none";
                this.portalTriggers.circle.style.display = "none";
                this.portalTriggers.hexagon.style.display = "block";
                this.portalTriggers.hexagon.style.left = "auto";
                this.portalTriggers.hexagon.style.right = "0";
                break;
            case "hexagon":
                this.portalTriggers.square.style.display = "block";
                this.portalTriggers.hexagon.style.display = "none";
                this.portalTriggers.circle.style.display = "block";
                break;
            case "circle":
                this.portalTriggers.square.style.display = "none";
                this.portalTriggers.circle.style.display = "none";
                this.portalTriggers.hexagon.style.display = "block";
                this.portalTriggers.hexagon.style.left = "0%";
                break;
            default:
                console.warn("Shape not found.");
        }

        // Set the portal visibility
        if (initially) {
            gsap.set($container, { autoAlpha: 1 });
        }

        // Focus Animation on the selected portal shape
        this.portalsWebGL.focus(shape);

        const $oldVideo = this.activePortal.querySelector(".portal__video");

        // Hide old video
        if (!initially) {
            gsap.fromTo(
                $oldVideo,
                {
                    opacity: 1,
                    scale: 1,
                },
                {
                    opacity: 0,
                    scale: 0.98,
                    duration: 0.6,
                    ease: "power4.out",
                }
            );
        }

        // Show new video
        gsap.fromTo(
            $video,
            {
                opacity: 0,
                scale: 0.97,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                delay: 0.6,
                ease: "power4.out",
            }
        );

        // TODO: Apply Text shuffle effect in more automated way
        // Should have three options: in, out, and swap

        // Apply Text shuffle effect
        // applyTextShuffle(contentId);

        new TypeShuffle({
            elementEnter: $container.querySelector(".h2"),
            animationType: "in",
        }).trigger();

        new TypeShuffle({
            elementEnter: $container.querySelector(".lead"),
            animationType: "in",
        }).trigger();

        $container.querySelectorAll(".eyebrow").forEach((eb) => {
            new TypeShuffle({
                elementEnter: eb,
                animationType: "in",
            }).trigger();
        });

        // Delay the content switch to allow the text shuffle effect to start first
        setTimeout(() => {
            // Toggle classes if not the initial state
            if (!initially) {
                // Deactivate the currently active portal
                const $activePortal = document.querySelector(
                    ".portal:not(.w-condition-invisible)"
                );
                $activePortal?.classList.add("w-condition-invisible");

                // Activate the new portal
                const $newActivePortal = document.getElementById(contentId);
                $newActivePortal?.classList.remove("w-condition-invisible");
                this.activePortal = $newActivePortal;
            }
        }, 150);
    }

    initTriggers() {
        // Initialize triggers for Square, Hexagon, and Circle portals
        this.portalTriggers.square = this.setupTrigger("portalTriggerSquare");
        this.portalTriggers.hexagon = this.setupTrigger("portalTriggerHexagon");
        this.portalTriggers.circle = this.setupTrigger("portalTriggerCircle");
    }

    setupTrigger(triggerID) {
        const trigger = document.getElementById(triggerID);
        if (!trigger) {
            console.warn("No portal trigger found with ID: " + triggerID);
            return;
        }

        trigger.addEventListener("click", (e) => this.togglePortal(e.target));

        // Adjust the display of triggers based on initial setup
        trigger.style.display =
            triggerID === "portalTriggerHexagon" ? "none" : "block";

        return trigger;
    }

    initVideos = () => {
        const $videoContainers = document.querySelectorAll(".portal__video");

        if (!$videoContainers.length) {
            console.warn("No video containers found");
            return;
        }

        $videoContainers.forEach((videoContainer) => {
            const mp4Src = videoContainer.getAttribute("data-mp4");
            const webmSrc = videoContainer.getAttribute("data-webm");

            if (!mp4Src || !webmSrc) {
                console.error(
                    "Video source attributes missing",
                    videoContainer
                );
                return;
            }

            const video = document.createElement("video");
            video.style.width = "100%";
            video.style.height = "100%";
            video.autoplay = true;
            video.loop = true;
            video.playsinline = true;
            video.muted = true;

            const sourceMp4 = document.createElement("source");
            sourceMp4.src = mp4Src;
            sourceMp4.type = "video/mp4";
            const sourceWebm = document.createElement("source");
            sourceWebm.src = webmSrc;
            sourceWebm.type = "video/webm";

            video.appendChild(sourceMp4);
            video.appendChild(sourceWebm);
            videoContainer.appendChild(video);

            // Additional checks
            video.addEventListener("error", (e) => {
                console.error("Error loading video:", e);
            });
        });
    };
}
