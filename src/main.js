import "./styles/style.css";
import LenisManager from "./modules/lenisManager";
import BarbaManager from "./modules/barbaManager";
import TypeShuffleManager from "./modules/typeShuffleManager";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { TypeShuffle } from "./effects/typeShuffleEffect";
import Portal from "./effects/portalEffect";
import barba from "@barba/core";
import { Application } from "@splinetool/runtime";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {

    // Init Lenis smooth scrolling
    // new LenisManager();

    // Init Custom Type Shuffle Effect
    new TypeShuffleManager();

    // Init Barba Page Transitions
    let barbaManager = null;
    if (document.body.getAttribute("data-barba") === "wrapper") {
        barbaManager = new BarbaManager();
    } else {
        console.log("barba html structure is not set");
    }
});

// // Register GSAP plugins
// gsap.registerPlugin(
//     ScrollTrigger,
//     Draggable,
//     InertiaPlugin,
//     Flip,
//     ScrollToPlugin
// );

// // Trigger effect on button click
// document.addEventListener("DOMContentLoaded", function () {
//     // Init Barba
//     const body = document.querySelector("body");
//     if (body.getAttribute("data-barba") === "wrapper") {
//         initBarba();
//     }
// });

// function initBarba() {
//     console.log("init barba");

//     barba.init({
//         transitions: [
//             {
//                 name: "leave-home",
//                 from: {
//                     namespace: ["home"],
//                 },
//                 to: {
//                     namespace: ["odyssey"],
//                 },
//                 leave(data) {
//                     console.log("leave home");
//                     return gsap.to(data.current.container, {
//                         duration: 2.5,
//                         onComplete: () => {
//                             data.current.container.style = "display: none";
//                             console.log("leave home complete");
//                         },
//                     });
//                 },
//                 enter(data) {
//                     window.scrollTo(0, 0);
//                     gsap.set(data.next.container, {
//                         position: "absolute",
//                         top: "0px",
//                         width: "100%",
//                     });
//                     return gsap.from(data.next.container, {
//                         yPercent: 10,
//                         opacity: 0,
//                         duration: 3,
//                         ease: "power4.out",
//                         onComplete: () => {
//                             gsap.set(data.next.container, {
//                                 clearProps: "all",
//                             });
//                         },
//                     });
//                 },
//             },
//             {
//                 name: "enter-home",
//                 from: {
//                     namespace: ["odyssey"],
//                 },
//                 to: {
//                     namespace: ["home"],
//                 },
//                 leave(data) {
//                     console.log("leave odyssey");
//                     return gsap.to(data.current.container, {
//                         opacity: 0,
//                         duration: 0.6,
//                     });
//                 },
//                 enter(data) {
//                     window.scrollTo(0, 0);
//                     gsap.set(data.next.container, {
//                         position: "absolute",
//                         top: "0px",
//                         width: "100%",
//                     });
//                     return gsap.from(data.next.container, {
//                         zPercent: 0,
//                         duration: 0.6,
//                         ease: "power4.out",
//                         onComplete: () => {
//                             gsap.set(data.next.container, {
//                                 clearProps: "all",
//                             });
//                         },
//                     });
//                 },
//             },
//         ],
//         views: [
//             {
//                 namespace: "home",
//                 beforeEnter(data) {
//                     // Init Videos
//                     initHomePortalVideo();

//                     // Init Portals
//                     const $portalsContainer =
//                         document.getElementById("portalsContainer");
//                     if ($portalsContainer) initPortals($portalsContainer);
//                 },
//             },
//             {
//                 namespace: "odyssey",
//                 beforeEnter(data) {
//                     // Init Odyssey Intro Spline
//                     // initOdysseyIntroSpline(); // TODO: UNCOMMENT THIS LINE

//                     // Init Odyssey Story Scrolling
//                     initOdysseyStoryScrolling();

//                     // init Odyssey gallery
//                     initOdysseyGallery();
//                 },
//                 // ... any other hooks
//             },
//             // ... other namespaces if necessary
//         ],
//     });
// }

// // Initialize the odyssey gallery
// function initOdysseyGallery() {
//     // Make the gallery draggable
//     console.log("init odyssey gallery drag");
//     const $container = document.getElementById("odysseyGalleryContainer");
//     const $galleryItems = $container.querySelectorAll(
//         ".odyssey-gallery__item:not(.odyssey-gallery__item--title)"
//     );
//     initOdysseyGallerySpline();

//     Draggable.create($container, {
//         type: "x,y",
//         bounds: window,
//         inertia: true,
//         onDragStart: () => {
//             gsap.to($galleryItems, {
//                 scale: 0.95,
//                 duration: 0.4,
//                 ease: "power4.out",
//             });
//         },
//         onDragEnd: () => {
//             gsap.to($galleryItems, {
//                 scale: 1,
//                 duration: 0.8,
//                 ease: "power4.out",
//             });
//         },
//     });

//     // Make the images clickable
//     console.log("init odyssey gallery click");
//     let isActive = false;
//     let $sourceContainer = null;
//     const $target = document.querySelector(
//         ".odyssey-gallery__destination-target"
//     );
//     const $targetContainer = document.querySelector(
//         ".odyssey-gallery__destination"
//     );

//     $galleryItems.forEach((item) => {
//         item.addEventListener("click", (e) => {
//             if (isActive) return;
//             $sourceContainer = item;
//             swapImage(item, $target, true);
//         });
//     });

//     $targetContainer.addEventListener("click", (e) => {
//         if (isActive) {
//             swapImage($target, $sourceContainer, false);
//         }
//     });

//     // Timeline for zoom image
//     const $backdrop = $targetContainer.querySelector(
//         ".odyssey-gallery__destination-backdrop"
//     );
//     const zoomImageTL = gsap.timeline({ paused: true });

//     // Define the zoom image timeline
//     zoomImageTL
//         .from(
//             $backdrop,
//             { duration: 0.8, opacity: 0, ease: "power4.inOut" },
//             "start"
//         )
//         .to(
//             $container,
//             { duration: 0.8, filter: "blur(6px)", ease: "power4.inOut" },
//             "start"
//         );

//     function swapImage(originalContainer, newContainer, setActive) {
//         const $image = originalContainer.querySelector("img");
//         const state = Flip.getState($image);

//         // Move the image to the new container
//         ($image.parentNode === originalContainer
//             ? newContainer
//             : originalContainer
//         ).appendChild($image);

//         // Animate the new container
//         if (setActive) {
//             $targetContainer.classList.add(
//                 "odyssey-gallery__destination--active"
//             );
//             zoomImageTL.play();
//         }
//         // Reverse the animation
//         else {
//             zoomImageTL.reverse();
//             $targetContainer.classList.remove(
//                 "odyssey-gallery__destination--active"
//             );
//         }

//         $image.parentNode.style.zIndex = 3000;
//         Flip.from(state, {
//             duration: 0.8,
//             ease: "power4.inOut",
//             absolute: true,
//             delay: 0.1,
//             onComplete: () => {
//                 $image.parentNode.style.zIndex = "";
//             },
//         });

//         isActive = setActive;
//     }

//     // Activate Spline for gallery
//     function initOdysseyGallerySpline() {
//         console.log("init odyssey gallery spline");
//         // Init Spline stuff
//         const $splineContainer = document.querySelector(
//             ".odyssey-gallery__spline-container"
//         );
//         const splineCanvas = document.createElement("canvas");
//         splineCanvas.id = "gallerySplineCanvas";
//         $splineContainer.appendChild(splineCanvas);
//         const splineURL = $splineContainer.getAttribute("data-spline");
//         if (!splineURL) return;
//         const app = new Application(splineCanvas);
//         app.load(splineURL);
//         const $canvas = document.getElementById("gallerySplineCanvas");
//         setTimeout(() => {
//             $canvas.style.width = "100%";
//             $canvas.style.height = "auto";
//         }, 500);
//     }
// }

// // Initialize the odyssey story scrolling
// function initOdysseyStoryScrolling() {
//     const $scenes = document.querySelectorAll(".odyssey-story__scene");
//     $scenes.forEach((scene) => {
//         createScrollScene(scene);
//     });

//     function createScrollScene(scene) {
//         const $trigger = scene.querySelector(".scene-trigger"),
//             $track = scene.querySelector(".scene-track"),
//             $lead = scene.querySelector(".odyssey-story__lead-wrapper"),
//             $pin = scene.querySelector(".scene-pin"),
//             $image = scene.querySelector(".odyssey-story__image-wrapper");

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: scene,
//                 start: "top top",
//                 end: "bottom bottom",
//                 scrub: true,
//                 // markers: true,
//                 pin: $lead,
//             },
//         });

//         tl.from($lead, { opacity: 0 }, "a");
//         tl.from($lead, { opacity: 1 }, "b");
//     }
// }

// // Initialize the home portal video
// function initHomePortalVideo() {
//     const videoElements = document.querySelectorAll(".portal__video");
//     videoElements.forEach((videoElement) => {
//         const mp4Src = videoElement.getAttribute("data-mp4");
//         const webmSrc = videoElement.getAttribute("data-webm");
//         const video = document.createElement("video");
//         video.style.width = "100%";
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
//         videoElement.appendChild(video);
//     });
// }

// // Initialize the intro spline of the odyssey sup page
// function initOdysseyIntroSpline() {
//     console.log("init odyssey intro spline");
//     // Init Spline stuff
//     const $splineContainer = document.getElementById("splineContainer");
//     const splineCanvas = document.createElement("canvas");
//     splineCanvas.id = "splineCanvas";
//     $splineContainer.appendChild(splineCanvas);
//     const splineURL = $splineContainer.getAttribute("data-spline");
//     if (!splineURL) return;
//     const app = new Application(splineCanvas);
//     app.load(splineURL);
// }

// // Function to apply the effect to a specific element by ID
// window.applyTextShuffle = function (elementId) {
//     const textElement = document.getElementById(elementId);
//     if (textElement) {
//         const ts = new TypeShuffle(textElement);
//         ts.trigger();
//     } else {
//         console.warn('Element with ID "' + elementId + '" was not found.');
//     }
// };

// function initPortals($container) {
//     console.log("initPortals");

//     // Create the portals
//     const portals = new Portal($container);

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

//     let hasTriggered = false;

//     // Trigger the portal when the section is entered
//     let observer = new IntersectionObserver(
//         function (entries) {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting && !hasTriggered) {
//                     console.log(entry.target.id + " is in view");
//                     const $activePortal =
//                         document.querySelector(".portal--active");
//                     gsap.from($activePortal.querySelectorAll("*"), {
//                         duration: 0.6,
//                         opacity: 0,
//                         scale: 0.9,
//                         stagger: 0.05,
//                         ease: "power4.out",
//                     });
//                     const activePortalID = $activePortal.id;
//                     applyTextShuffle(activePortalID);
//                     portals.introduceAnimation();
//                     hasTriggered = true; // Set the flag to true
//                 }
//             });
//         },
//         { threshold: 0.5 }
//     ); // Adjust threshold as needed

//     // Target elements to observe
//     document.querySelectorAll("#portalsSection").forEach((section) => {
//         observer.observe(section);
//     });
// }
