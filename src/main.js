// import "./styles/style.css";
import LenisManager from "./modules/lenisManager";
import BarbaManager from "./modules/barbaManager";
import TypeShuffleManager from "./modules/typeShuffleManager";

// Trigger effect on button click
document.addEventListener("DOMContentLoaded", function () {

    console.log("tester");

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
