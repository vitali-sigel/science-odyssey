import "./styles/style.css";
import Header from "./modules/header";
import Preloader from "./modules/preloader";
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
    SplitText,
} from "gsap/all";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {
    // Init GSAP
    gsap.registerPlugin(
        ScrollTrigger,
        Draggable,
        InertiaPlugin,
        Flip,
        ScrollToPlugin,
        SplitText
    );

    // Init Custom Type Shuffle Effect
    new TypeShuffleManager();

    // Init Lenis smooth scrolling
    const lenisManager = new LenisManager();

    // Init the header
    const header = new Header();

    // Init the preloader
    const preloader = new Preloader(lenisManager, header);

    // Init Barba Page Transitions
    let barbaManager = null;
    if (document.body.getAttribute("data-barba") === "wrapper") {
        barbaManager = new BarbaManager(lenisManager);
    } else {
        console.log("barba html structure is not set");
    }
});
