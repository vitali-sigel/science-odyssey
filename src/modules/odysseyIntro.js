import gsap from "gsap";

export default class OdysseyIntroSplineManager {
    constructor() {
        this.$splineContainer = document.getElementById("introSpline");
        this.splineIframe = this.initSpline();
    }

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
        gsap.set(iframe, { opacity: 0, y: 10});

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
