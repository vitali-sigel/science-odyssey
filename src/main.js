import "./styles/style.css";
import LenisManager from "./modules/lenisManager";
import BarbaManager from "./modules/barbaManager";
import TypeShuffleManager from "./modules/typeShuffleManager";
import gsap from "gsap";
import {
    ScrollTrigger,
    Draggable,
    InertiaPlugin,
    Flip,
    ScrollToPlugin,
} from "gsap/all";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {

    // Init GSAP
    gsap.registerPlugin(
        ScrollTrigger,
        Draggable,
        InertiaPlugin,
        Flip,
        ScrollToPlugin
    );

    // Init Lenis smooth scrolling
    const lenisManager = new LenisManager();

    // Init Custom Type Shuffle Effect
    new TypeShuffleManager();

    // Init Barba Page Transitions
    let barbaManager = null;
    if (document.body.getAttribute("data-barba") === "wrapper") {
        barbaManager = new BarbaManager(lenisManager);
    } else {
        console.log("barba html structure is not set");
    }
});
