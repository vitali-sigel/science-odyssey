// import { Application } from "@splinetool/runtime";

export default class OdysseyIntroSplineManager {
    constructor() {
        this.splineContainer = document.getElementById("introSpline");
        console.log(this.splineContainer);
        this.app = null;
        this.initSpline();
    }

    initSpline() {
        console.log("init odyssey intro spline");
        if (!this.splineContainer) {
            console.error(
                `Spline container with id "${this.splineContainer}" not found.`
            );
            return;
        }

        const splineCanvas = document.createElement("canvas");
        splineCanvas.id = "splineCanvas";
        this.splineContainer.appendChild(splineCanvas);

        const splineURL = this.splineContainer.getAttribute("data-spline");
        if (!splineURL) {
            console.error("Spline URL not found.");
            return;
        }

        // Assuming `Application` is imported or globally available
        this.app = new Application(splineCanvas);
        this.app
            .load(splineURL)
            .then(() => {
                console.log("Spline loaded successfully.");
                // Perform additional actions after loading if necessary
            })
            .catch((error) => {
                console.error("Error loading spline:", error);
            });
    }

    // Optionally, if there's any cleanup needed
    dispose() {
        if (this.app) {
            // Perform cleanup for Spline app
            // There might not be a direct method for this, it depends on the Spline library
            console.log("Disposing Spline app.");
            // Example: this.app.dispose(); if such a method exists
        }
        // Remove canvas from DOM if necessary
        const splineCanvas = document.getElementById("splineCanvas");
        if (splineCanvas) {
            splineCanvas.parentNode.removeChild(splineCanvas);
        }
    }
}