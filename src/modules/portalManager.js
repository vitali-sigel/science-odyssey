import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Portal from "../effects/portalEffect";

export default class PortalManager {
    constructor(container) {
        this.$container = container;

        if (!this.$container) {
            console.warn("No portal container found");
            return;
        }

        console.log("init portal manager");

        this.portals = new Portal(this.$container);
        this.portalTriggers = {};
        this.portalScrollTrigger = null;
        this.initVisibility();
        this.initTriggers();
        this.initVideos();
        this.snapInView();
    }

    snapInView() {
        this.portalScrollTrigger = ScrollTrigger.create({
            markers: true,
            trigger: "#homePortals",
            once: true,
            start: "top 20%",
            onEnter: () => {
                // Animate portal effect
                this.portals.bringForwardAnimation();

                // Toggle the initial portal
                const $initialTrigger = document.getElementById(
                    "portalTriggerHexagon"
                );
                this.togglePortal($initialTrigger, true);
            },
        });
    }

    initVisibility() {
        const $activePortal = document.querySelector(
            ".portal:not(.w-condition-invisible)"
        );
        gsap.set($activePortal, { autoAlpha: 0 });
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

        console.log("Toggle Portal: " + shape, contentId, initially);

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
        this.portals.focus(shape);

        const $oldVideo = document.querySelector(
            ".portal--active .portal__video"
        );

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
                    scale: 0.97,
                    duration: 0.9,
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

        // Apply Text shuffle effect
        applyTextShuffle(contentId);

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
            }
        }, 150);
    }

    animatePortalContent(content) {
        gsap.to(content, {
            duration: 0.6,
            opacity: 0,
            scale: 0.9,
            ease: "power4.out",
        });
    }

    initTriggers() {
        // Initialize triggers for Square, Hexagon, and Circle portals
        this.portalTriggers.square = this.setupTrigger("portalTriggerSquare");
        this.portalTriggers.hexagon = this.setupTrigger("portalTriggerHexagon");
        this.portalTriggers.circle = this.setupTrigger("portalTriggerCircle");
    }

    setupTrigger(triggerId) {
        const trigger = document.getElementById(triggerId);
        if (!trigger) {
            console.warn("No portal trigger found with ID: " + triggerId);
            return;
        }

        trigger.addEventListener("click", (e) => this.togglePortal(e.target));

        const contentId = trigger.getAttribute("data-content");
        const content = document.getElementById(contentId);
        const cta = content?.querySelector(".btn");

        cta?.addEventListener("click", () => {
            this.animatePortalContent(content);
            this.portals.start();
        });

        // Adjust the display of triggers based on initial setup
        trigger.style.display =
            triggerId === "portalTriggerHexagon" ? "none" : "block";

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
