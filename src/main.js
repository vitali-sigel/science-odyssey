import "./styles/style.css";
import { gsap } from "gsap";
import { TypeShuffle } from "./modules/typeShuffle";
import Portal from "./modules/portalEffect";
import barba from "@barba/core";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {
    // Init the portals
    const $portalsContainer = document.getElementById("portalsContainer");
    if ($portalsContainer) initPortals($portalsContainer);

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
                name: "barba",
                leave(data) {
                    return gsap.to(data.current.container, {
                        xPercent: 100,
                        duration: 0.4,
                        ease: "power4.in",
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
                        xPercent: -100,
                        duration: 0.8,
                        ease: "power4.out",
                        onComplete: () => {
                            gsap.set(data.next.container, {
                                clearProps: "all",
                            });
                        }
                    });
                },
            },
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
    console.log("initPortals Test");

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
