import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortalManager from "../modules/portalManager";

/*
 * Initialize the shaped portal videos
 */
// export const initHomePortalVideo = () => {
//     const $videoContainers = document.querySelectorAll(".portal__video");

//     if (!$videoContainers.length) {
//         console.warn("No video containers found");
//         return;
//     }

//     $videoContainers.forEach((videoContainer) => {
//         const mp4Src = videoContainer.getAttribute("data-mp4");
//         const webmSrc = videoContainer.getAttribute("data-webm");

//         if (!mp4Src || !webmSrc) {
//             console.error("Video source attributes missing", videoContainer);
//             return;
//         }

//         const video = document.createElement("video");
//         video.style.width = "100%";
//         video.style.height = "100%";
//         video.autoplay = true;
//         video.loop = true;
//         video.playsinline = true;
//         video.muted = true;

//         const sourceMp4 = document.createElement("source");
//         sourceMp4.src = mp4Src;
//         sourceMp4.type = "video/mp4";
//         const sourceWebm = document.createElement("source");
//         sourceWebm.src = webmSrc;
//         sourceWebm.type = "video/webm";

//         video.appendChild(sourceMp4);
//         video.appendChild(sourceWebm);
//         videoContainer.appendChild(video);

//         // Additional checks
//         video.addEventListener("error", (e) => {
//             console.error("Error loading video:", e);
//         });

//         video.addEventListener("loadeddata", () => {
//             console.log("Video loaded successfully:", video.currentSrc);
//         });
//     });
// };

// /*
//  * Initialize the three.js portal effects
//  */
// export const initHomePortals = () => {
//     const $portalsContainer = document.getElementById("portalsContainer");
//     if (!$portalsContainer) {
//         console.warn("No portal container found");
//         return;
//     }

//     console.log("initPortals", $portalsContainer);

//     // Create the portals
//     const portals = new Portal($portalsContainer);

//     // Button to focus on Square Portals
//     const $portalTriggerSquare = document.getElementById("portalTriggerSquare");
//     $portalTriggerSquare.addEventListener("click", (e) =>
//         togglePortal(e.target)
//     );
//     const $portalContentSquare = document.getElementById(
//         $portalTriggerSquare.getAttribute("data-content")
//     );
//     const $portalContentSquareCTA = $portalContentSquare.querySelector(".btn");
//     $portalContentSquareCTA.addEventListener("click", (e) => {
//         gsap.to($portalContentSquare, {
//             duration: 0.6,
//             opacity: 0,
//             scale: 0.9,
//             ease: "power4.out",
//         });
//         portals.start();
//     });

//     // Button to focus on Hexagon Portals
//     const $portalTriggerHexagon = document.getElementById(
//         "portalTriggerHexagon"
//     );
//     $portalTriggerHexagon.style.display = "none";
//     $portalTriggerHexagon.addEventListener("click", (e) =>
//         togglePortal(e.target)
//     );
//     const $portalContentHexagon = document.getElementById(
//         $portalTriggerHexagon.getAttribute("data-content")
//     );
//     const $portalContentHexagonCTA =
//         $portalContentHexagon.querySelector(".btn");
//     $portalContentHexagonCTA.addEventListener("click", (e) => {
//         gsap.to($portalContentHexagon, {
//             duration: 0.6,
//             opacity: 0,
//             scale: 0.9,
//             ease: "power4.out",
//         });
//         portals.start();
//     });

//     // Button to focus on Circle Portals
//     const $portalTriggerCircle = document.getElementById("portalTriggerCircle");
//     $portalTriggerCircle.addEventListener("click", (e) =>
//         togglePortal(e.target)
//     );
//     const $portalContentCircle = document.getElementById(
//         $portalTriggerCircle.getAttribute("data-content")
//     );
//     const $portalContentCircleCTA = $portalContentCircle.querySelector(".btn");
//     $portalContentCircleCTA.addEventListener("click", (e) => {
//         gsap.to($portalContentCircle, {
//             duration: 0.6,
//             opacity: 0,
//             scale: 0.9,
//             ease: "power4.out",
//         });
//         portals.start();
//     });

//     function togglePortal(trigger) {
//         const shape = trigger.getAttribute("data-shape");
//         const contentID = trigger.getAttribute("data-content");
//         console.log("Toggle Portal: " + shape, contentID);

//         // Set the trigger fields
//         switch (shape) {
//             case "square":
//                 $portalTriggerSquare.style.display = "none";
//                 $portalTriggerCircle.style.display = "none";
//                 $portalTriggerHexagon.style.display = "block";
//                 $portalTriggerHexagon.style.left = "auto";
//                 $portalTriggerHexagon.style.right = "0";
//                 break;
//             case "hexagon":
//                 console.log("hexagon");
//                 $portalTriggerSquare.style.display = "block";
//                 $portalTriggerHexagon.style.display = "none";
//                 $portalTriggerCircle.style.display = "block";
//                 break;
//             case "circle":
//                 $portalTriggerSquare.style.display = "none";
//                 $portalTriggerCircle.style.display = "none";
//                 $portalTriggerHexagon.style.display = "block";
//                 $portalTriggerHexagon.style.left = "0%";
//                 break;
//             default:
//                 console.warn("Shape not found.");
//         }

//         // Start switch effect first
//         applyTextShuffle(contentID);

//         // Animate the rest
//         setTimeout(() => {
//             // Switch content
//             const $activePortal = document.querySelector(".portal--active");
//             $activePortal.classList.remove("portal--active");
//             const $newActivePortal = document.getElementById(contentID);
//             $newActivePortal.classList.add("portal--active");

//             // Focus on the selected shape
//             portals.focus(shape);

//             // Animate Video
//             const $video = $newActivePortal.querySelector(".portal__video");
//             gsap.from($video, {
//                 opacity: 0,
//                 scale: 1.05,
//                 delay: 0.5,
//                 duration: 0.6,
//                 ease: "power4.out",
//             });
//         }, 150);
//     }

//     return portals;
// };

/*
 * Activate the Portals when they come into view
 */
export const activateHomePortals = (portalManager) => {
    // Use ScrollTrigger to trigger the portal animation
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        markers: true,
        trigger: "#homePortals",
        once: true,
        start: "top 20%",
        onEnter: () => {
            portalManager.portals.bringForwardAnimation();
            const $initialTrigger = document.getElementById(
                "portalTriggerHexagon"
            );
            portalManager.togglePortal($initialTrigger, true);
        },
    });
};

/*
 * Handle Home View Animations
 */
export const setupHomeView = (data) => {
    const $portalsContainer = document.getElementById("portalsContainer");
    const portalManager = new PortalManager($portalsContainer);
    // activateHomePortals(portalManager);
};
