import "./styles/style.css";
import { gsap } from "gsap";
import { TypeShuffle } from "./modules/typeShuffle";
import Portal from "./modules/portalEffect";
import barba from "@barba/core";
import { Application } from "@splinetool/runtime";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {
    // Init the portals
    // const $portalsContainer = document.getElementById("portalsContainer");
    // if ($portalsContainer) initPortals($portalsContainer);

    // Init Barba
    const body = document.querySelector("body");
    if (body.getAttribute("data-barba") === "wrapper") {
        initBarba();
    }
});

function initBarba() {
    console.log("init barba");

    barba.init({
        transitions: [
            {
                name: "leave-home",
                from: {
                    namespace: ["home"],
                },
                to: {
                    namespace: ["odyssey"],
                },
                leave(data) {
                    console.log("leave home");
                    return gsap.to(data.current.container, {
                        duration: 2.5,
                        onComplete: () => {
                            data.current.container.style="display: none";
                            console.log("leave home complete");
                        }
                    });
                },
                enter(data) {
                    window.scrollTo(0, 0);
                    gsap.set(data.next.container, {
                        position: "absolute",
                        top: "0px",
                        width: "100%",
                    });
                    return gsap.from(data.next.container, {
                        yPercent: 10,
                        opacity: 0,
                        duration: 3,
                        ease: "power4.out",
                        onComplete: () => {
                            gsap.set(data.next.container, {
                                clearProps: "all",
                            });
                        },
                    });
                },
            },
            {
                name: "enter-home",
                from: {
                    namespace: ["odyssey"],
                },
                to: {
                    namespace: ["home"],
                },
                leave(data) {
                    console.log("leave odyssey");
                    return gsap.to(data.current.container, {
                        opacity: 0,
                        duration: 0.6,
                    });
                },
                enter(data) {
                    window.scrollTo(0, 0);
                    gsap.set(data.next.container, {
                        position: "absolute",
                        top: "0px",
                        width: "100%",
                    });
                    return gsap.from(data.next.container, {
                        zPercent: 0,
                        duration: 0.6,
                        ease: "power4.out",
                        onComplete: () => {
                            gsap.set(data.next.container, {
                                clearProps: "all",
                            });
                        },
                    });
                },
            },
        ],
        views: [
            {
                namespace: "home",
                beforeEnter(data) {
                    // Init Videos
                    const videoElements = document.querySelectorAll(".portal__video");
                    videoElements.forEach((videoElement) => {
                        const mp4Src = videoElement.getAttribute("data-mp4");
                        const webmSrc = videoElement.getAttribute("data-webm");
                        const video = document.createElement("video");
                        video.style.width = "100%";
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
                        videoElement.appendChild(video);
                    });

                    // Init Portals
                    const $portalsContainer =
                        document.getElementById("portalsContainer");
                    if ($portalsContainer) initPortals($portalsContainer);
                },
            },
            {
                namespace: "odyssey",
                beforeEnter(data) {
                    console.log("init odyssey intro spline");
                    // Init Spline stuff
                    const $splineContainer =
                        document.getElementById("splineContainer");
                    const splineCanvas = document.createElement("canvas");
                    splineCanvas.id = "splineCanvas";
                    $splineContainer.appendChild(splineCanvas);
                    const splineURL =
                        $splineContainer.getAttribute("data-spline");
                    if (!splineURL) return;
                    const app = new Application(splineCanvas);
                    // app.load(splineURL);
                },
                // ... any other hooks
            },
            // ... other namespaces if necessary
        ],
    });
}

// Function to apply the effect to a specific element by ID
window.applyTextShuffle = function (elementId) {
    const textElement = document.getElementById(elementId);
    if (textElement) {
        const ts = new TypeShuffle(textElement);
        ts.trigger();
    } else {
        console.warn('Element with ID "' + elementId + '" was not found.');
    }
};

function initPortals($container) {
    console.log("initPortals");

    // Create the portals
    const portals = new Portal($container);

    // Button to focus on Square Portals
    const $portalTriggerSquare = document.getElementById("portalTriggerSquare");
    $portalTriggerSquare.addEventListener("click", (e) =>
        togglePortal(e.target)
    );
    const $portalContentSquare = document.getElementById(
        $portalTriggerSquare.getAttribute("data-content")
    );
    const $portalContentSquareCTA = $portalContentSquare.querySelector(".btn");
    $portalContentSquareCTA.addEventListener("click", (e) => {
        gsap.to($portalContentSquare, {
            duration: 0.6,
            opacity: 0,
            scale: 0.9,
            ease: "power4.out",
        });
        portals.start();
    });

    // Button to focus on Hexagon Portals
    const $portalTriggerHexagon = document.getElementById(
        "portalTriggerHexagon"
    );
    $portalTriggerHexagon.addEventListener("click", (e) =>
        togglePortal(e.target)
    );
    const $portalContentHexagon = document.getElementById(
        $portalTriggerHexagon.getAttribute("data-content")
    );
    const $portalContentHexagonCTA =
        $portalContentHexagon.querySelector(".btn");
    $portalContentHexagonCTA.addEventListener("click", (e) => {
        gsap.to($portalContentHexagon, {
            duration: 0.6,
            opacity: 0,
            scale: 0.9,
            ease: "power4.out",
        });
        portals.start();
    });

    // Button to focus on Circle Portals
    const $portalTriggerCircle = document.getElementById("portalTriggerCircle");
    $portalTriggerCircle.addEventListener("click", (e) =>
        togglePortal(e.target)
    );
    const $portalContentCircle = document.getElementById(
        $portalTriggerCircle.getAttribute("data-content")
    );
    const $portalContentCircleCTA = $portalContentCircle.querySelector(".btn");
    $portalContentCircleCTA.addEventListener("click", (e) => {
        gsap.to($portalContentCircle, {
            duration: 0.6,
            opacity: 0,
            scale: 0.9,
            ease: "power4.out",
        });
        portals.start();
    });

    function togglePortal(trigger) {
        const shape = trigger.getAttribute("data-shape");
        const contentID = trigger.getAttribute("data-content");
        console.log("Toggle Portal: " + shape, contentID);

        // Set the trigger fields
        switch (shape) {
            case "square":
                $portalTriggerSquare.style.display = "none";
                $portalTriggerCircle.style.display = "none";
                $portalTriggerHexagon.style.display = "block";
                $portalTriggerHexagon.style.left = "90%";
                $portalTriggerHexagon.style.right = "0";
                break;
            case "hexagon":
                $portalTriggerSquare.style.display = "block";
                $portalTriggerHexagon.style.display = "none";
                $portalTriggerCircle.style.display = "block";
                break;
            case "circle":
                $portalTriggerSquare.style.display = "none";
                $portalTriggerCircle.style.display = "none";
                $portalTriggerHexagon.style.display = "block";
                $portalTriggerHexagon.style.left = "0%";
                break;
            default:
                console.warn("Shape not found.");
        }

        // Start switch effect first
        applyTextShuffle(contentID);

        // Animate the rest
        setTimeout(() => {
            // Switch content
            const $activePortal = document.querySelector(".portal--active");
            $activePortal.classList.remove("portal--active");
            const $newActivePortal = document.getElementById(contentID);
            $newActivePortal.classList.add("portal--active");

            // Focus on the selected shape
            portals.focus(shape);

            // Animate Video
            const $video = $newActivePortal.querySelector(".portal__video");
            gsap.from($video, {
                opacity: 0,
                scale: 1.05,
                delay: 0.5,
                duration: 0.6,
                ease: "power4.out",
            });
        }, 150);

        // Apply text shuffle effect
        // applyTextShuffle(contentID);
    }

    // Trigger the portal when the section is entered
    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id + " is in view");
                    const $activePortal =
                        document.querySelector(".portal--active");
                    gsap.from($activePortal.querySelectorAll("*"), {
                        duration: 0.6,
                        opacity: 0,
                        scale: 0.9,
                        stagger: 0.05,
                        ease: "power4.out",
                    });
                    const activePortalID = $activePortal.id;
                    applyTextShuffle(activePortalID);
                    portals.introduceAnimation();
                }
            });
        },
        { threshold: 0.5 }
    ); // Adjust threshold as needed

    // Target elements to observe
    document.querySelectorAll("#portalsSection").forEach((section) => {
        observer.observe(section);
    });
}
