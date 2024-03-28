import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";
// import { Application } from "@splinetool/runtime";

export default class OdysseyGalleryManager {
    constructor() {
        // Register GSAP plugins
        this.$gallery = document.getElementById("odysseyGallery");
        if (!this.$gallery) {
            console.warn(
                "Could not create Odyssey Gallery - container not found."
            );
            return;
        }
        this.isActive = false;
        this.$sourceContainer = null;
        this.zoomImageTL = null;
        this.$splineContainer = document.querySelector(
            ".odyssey-gallery__spline-container"
        );
        this.splineIframe = this.initSpline();
        this.initOdysseyGallery();
        // this.initOdysseyGallerySpline();
    }

    initOdysseyGallery() {
        console.log("init odyssey gallery drag");
        this.$container = document.getElementById("odysseyGalleryContainer");
        this.$galleryItems = this.$container.querySelectorAll(
            ".odyssey-gallery__item:not(.odyssey-gallery__item--title)"
        );

        Draggable.create(this.$container, {
            type: "x,y",
            bounds: this.$gallery,
            inertia: true,
            onDragStart: () => {
                gsap.to(this.$galleryItems, {
                    scale: 0.95,
                    duration: 0.4,
                    ease: "power4.out",
                });
            },
            onDragEnd: () => {
                gsap.to(this.$galleryItems, {
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out",
                });
            },
        });

        console.log("init odyssey gallery click");
        this.$target = document.querySelector(
            ".odyssey-gallery__destination-target"
        );
        this.$targetContainer = document.querySelector(
            ".odyssey-gallery__destination"
        );

        this.$galleryItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                if (this.isActive) return;
                this.$sourceContainer = item;
                this.swapImage(item, this.$target, true);
            });
        });

        this.$targetContainer.addEventListener("click", (e) => {
            if (this.isActive) {
                this.swapImage(this.$target, this.$sourceContainer, false);
            }
        });

        this.initZoomImageTimeline();
    }

    initZoomImageTimeline() {
        const $backdrop = this.$targetContainer.querySelector(
            ".odyssey-gallery__destination-backdrop"
        );
        this.zoomImageTL = gsap.timeline({ paused: true });

        this.zoomImageTL
            .from(
                $backdrop,
                { duration: 0.8, opacity: 0, ease: "power4.inOut" },
                "start"
            )
            .to(
                this.$container,
                { duration: 0.8, filter: "blur(6px)", ease: "power4.inOut" },
                "start"
            );
    }

    swapImage(originalContainer, newContainer, setActive) {
        const $image = originalContainer.querySelector("img");
        const state = Flip.getState($image);

        ($image.parentNode === originalContainer
            ? newContainer
            : originalContainer
        ).appendChild($image);

        if (setActive) {
            this.$targetContainer.classList.add(
                "odyssey-gallery__destination--active"
            );
            this.zoomImageTL.play();
        } else {
            this.zoomImageTL.reverse();
            this.$targetContainer.classList.remove(
                "odyssey-gallery__destination--active"
            );
        }

        $image.parentNode.style.zIndex = 3000;
        Flip.from(state, {
            duration: 0.8,
            ease: "power4.inOut",
            absolute: true,
            delay: 0.1,
            onComplete: () => {
                $image.parentNode.style.zIndex = "";
            },
        });

        this.isActive = setActive;
    }

    // initOdysseyGallerySpline() {
    //     console.log("init odyssey gallery spline");
    //     const $splineContainer = document.querySelector(
    //         ".odyssey-gallery__spline-container"
    //     );
    //     const splineCanvas = document.createElement("canvas");
    //     splineCanvas.id = "gallerySplineCanvas";
    //     $splineContainer.appendChild(splineCanvas);
    //     const splineURL = $splineContainer.getAttribute("data-spline");
    //     if (!splineURL) return;
    //     const app = new Application(splineCanvas);
    //     app.load(splineURL);
    //     const $canvas = document.getElementById("gallerySplineCanvas");
    //     setTimeout(() => {
    //         $canvas.style.width = "100%";
    //         $canvas.style.height = "auto";
    //     }, 1000);
    // }

    initSpline() {
        if (!this.$splineContainer) {
            console.error(
                `Spline container with id "${this.$splineContainer}" not found.`
            );
            return;
        }

        console.log("init odyssey intro spline");
        const splineURL = this.$splineContainer.getAttribute("data-spline");
        if (!splineURL) {
            console.error("Spline URL not found.");
            return;
        }

        const iframe = document.createElement("iframe");
        iframe.src = splineURL;
        iframe.style.width = "100%";
        iframe.style.height = "100%";

        // Hide initially
        gsap.set(iframe, { opacity: 0, y: 10 });

        // Add an event listener for the 'load' event
        iframe.addEventListener("load", () => {
            console.log("Spline iframe has loaded.");
            // Fade in the iframe using GSAP
            gsap.to(iframe, {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: "power4.out",
            });
        });

        // Append the iframe to the container
        this.$splineContainer.appendChild(iframe);

        return iframe;
    }

    dispose() {
        console.log("dispose odyssey intro spline");
        this.splineIframe.remove();
        console.log(this.splineIframe);
    }
}
