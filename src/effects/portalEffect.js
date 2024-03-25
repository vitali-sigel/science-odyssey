import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { gsap } from "gsap";

export default class Portal {
    constructor(container) {
        // Canvas container
        this.container = container;

        // For media queries (responsive design)
        this.mm = gsap.matchMedia();

        // Animation settings
        this.numberOfLayers = 50;
        this.layerDelay = 40;
        this.layerSpacing = 3;

        // Scene
        this.scene = null;

        // Renderer
        this.renderer = null;

        // Animation ID to cancel and reset the animation
        this.animationRequestID = null;

        // Scene and related objects
        this.camera = null;
        this.cameraInitialZ = -60;
        this.cameraOffsetZ = -20;
        this.cameraEndZ = this.numberOfLayers * this.layerSpacing; // Where the camera should stop
        this.cameraZoomDelay = 2.3; // Delay for the camera to move after the portal building starts

        // Portals
        this.portalSquare = new THREE.Group();
        this.portalHexagon = new THREE.Group();
        this.portalCircle = new THREE.Group();
        this.portalActive = this.portalHexagon;
        this.portalOffsetZ = 0;
        this.portalOffsetZActive = -14.5;
        this.portalOffsetX = 12;

        this.mm.add("(max-width: 991px)", () => {
            this.portalOffsetX = 8; // For mobile
        });

        this.mm.add("(min-width: 992px) and (max-width: 1919px)", () => {
            this.portalOffsetX = 10; // For desktop
        });

        this.mm.add("(min-width: 1920px)", () => {
            this.portalOffsetX = 12; // For large screens
        });
        this.portalOffsetXSquarePortal = this.portalOffsetX;
        this.portalOffsetXSHexagonPortal = 0;
        this.portalOffsetXCirclePortal = -this.portalOffsetX;

        // Style parameters
        this.params = {
            strength: 0.8,
            radius: 0.95,
            threshold: 0,
        };

        // Initialize
        this.init(container);
    }

    /*
     * Setup the scene and start the animation.
     */
    init($container) {
        // Create the scene
        this.scene = new THREE.Scene();

        // Create the renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize($container.clientWidth, $container.clientHeight);

        // Choose the desired tone mapping option
        const toneMappingOptions = {
            ACESFilmic: THREE.ACESFilmicToneMapping,
            Cineon: THREE.CineonToneMapping,
            Linear: THREE.LinearToneMapping,
            None: THREE.NoToneMapping,
            Reinhard: THREE.ReinhardToneMapping,
        };
        this.renderer.toneMapping = toneMappingOptions["Cineon"];

        // Add the renderer canvas to the container
        const canvas = this.renderer.domElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "absolute";
        $container.appendChild(canvas);

        // Create the camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            $container.clientWidth / $container.clientHeight,
            1,
            300
        );
        this.camera.position.set(0, 0, this.cameraInitialZ);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.camera);

        // Create the render pass
        const renderScene = new RenderPass(this.scene, this.camera);

        // Create an unreal bloom pass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2($container.clientWidth, $container.clientHeight),
            this.params.strength, // Strength
            this.params.radius, // Radius
            this.params.threshold // Threshold
        );

        // Create an effect composer
        const composer = new EffectComposer(this.renderer);
        const outputPass = new OutputPass();
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        composer.addPass(outputPass);

        // Set initial portals
        this.initialState(this.scene);

        // Bind window resize event
        window.addEventListener(
            "resize",
            () => this.onWindowResize(this.renderer, composer),
            false
        );

        // Set the size initialy
        this.onWindowResize(this.renderer, composer);

        // Start animation loop
        this.animate(composer);
    }

    animate(composer) {
        this.animationRequestID = requestAnimationFrame(() =>
            this.animate(composer)
        );
        composer.render(); // Render the scene with post-processing
    }

    /**
     * Initializes the scene by setting up the initial state and starting the animation.
     */
    initialState(scene) {
        // Create the initial Square portal segment
        const squareSegment = this.createSegment("square", "#54EAAB");
        squareSegment.position.x = this.portalOffsetX;
        squareSegment.position.z = this.portalOffsetZ;
        this.portalSquare.add(squareSegment);
        scene.add(this.portalSquare);

        // Create the initial Hexagon portal segment
        const hexagonSegment = this.createSegment("hexagon", "#5FB2FF");
        hexagonSegment.position.z = this.portalOffsetZ;
        this.portalHexagon.add(hexagonSegment);
        scene.add(this.portalHexagon);

        // Create the initial Circle portal segment
        const circleSegment = this.createSegment("circle", "#CBA1FE");
        circleSegment.position.x = -this.portalOffsetX;
        circleSegment.position.z = this.portalOffsetZ;
        this.portalCircle.add(circleSegment);
        scene.add(this.portalCircle);
    }

    /**
     * Introduces the scene on section enter
     */
    bringForwardAnimation() {
        const introTL = gsap.timeline();

        introTL
            .to(
                this.camera.position,
                {
                    z: this.cameraOffsetZ,
                    duration: 0.6,
                    ease: "power4.out",
                },
                "a"
            )
            .to(
                this.portalActive.position,
                {
                    duration: 0.6,
                    ease: "power4.out",
                    z: this.portalOffsetZActive,
                },
                "a"
            );
    }

    /**
     * Focuses on the specified shape.
     */
    focus(shape) {
        // console.log(`...focusing on ${shape}...`);
        const targetX = {
            square: this.portalOffsetXSquarePortal,
            hexagon: this.portalOffsetXSHexagonPortal,
            circle: this.portalOffsetXCirclePortal,
        }[shape];
        const previousPortal = this.portalActive;

        switch (shape) {
            case "square":
                this.portalActive = this.portalSquare;
                break;
            case "hexagon":
                this.portalActive = this.portalHexagon;
                break;
            case "circle":
                this.portalActive = this.portalCircle;
                break;
            default:
                console.log(`Unknown shape: ${shape}`);
                return;
        }

        // GSAP animation for camera and portals
        gsap.defaults({ duration: 0.9, ease: "power4.inOut" });
        const timeline = gsap.timeline();
        timeline
            .to(
                this.camera.position,
                {
                    x: targetX,
                },
                "a"
            )
            .to(
                previousPortal.position,
                {
                    z: 0,
                },
                "a"
            )
            .to(
                this.portalActive.position,
                {
                    z: this.portalOffsetZActive,
                },
                "a"
            );
    }

    /*
     * Starts the portal animation.
     */
    start() {
        // Create a new GSAP timeline
        const masterTimeline = gsap.timeline();

        // Add portal building to the master timeline
        for (let i = 1; i < this.numberOfLayers; i++) {
            // start from 1 because 0 is the original segment
            masterTimeline.to(
                {},
                {
                    duration: this.layerDelay / 1000, // delays are in seconds
                    ease: "power4.out",
                    onStart: () => {
                        // Clone the original segment which is at index 0
                        const originalSegment = this.portalActive.children[0];
                        const segment = originalSegment.clone();

                        // Position it at the correct depth
                        segment.position.z =
                            originalSegment.position.z + i * this.layerSpacing; // position clones with an offset on the z-axis

                        // Add the new segment to the scene and the active portal array
                        this.portalActive.add(segment);
                    },
                }
            );
        }

        // Add camera animation to the master timeline, set to start after the portal building completes
        masterTimeline.to(
            this.camera.position,
            {
                z: this.cameraEndZ,
                duration: 3,
                ease: "power4.in",
                onComplete: () => {
                    this.dispose();
                },
            },
            `-=${this.cameraZoomDelay}` // start the camera animation before the portal building completes
        );

        return masterTimeline;
    }

    /**
     * Creates a segment based on the specified shape.
     */
    createSegment(shape = this.shape, color = this.color) {
        const geometry = this.createGeometry(shape);
        const material = new THREE.LineBasicMaterial({
            color: color,
        });
        const segment = new THREE.Line(geometry, material);
        return segment;
    }

    /**
     * Creates a geometry based on the specified shape.
     */
    createGeometry(shape) {
        switch (shape) {
            case "square":
                return this.createSquareGeometry();
            case "circle":
                return this.createCircleGeometry();
            case "hexagon":
                return this.createHexagonGeometry();
            default:
                throw new Error(`Unknown shape: ${shape}`);
        }
    }

    /**
     * Creates a square geometry.
     */
    createSquareGeometry() {
        // const size = this.size; // Define the size of the square
        const size = 2.4; // Define the size of the square
        const shape = new THREE.Shape();
        shape.moveTo(-size / 2, -size / 2);
        shape.lineTo(size / 2, -size / 2);
        shape.lineTo(size / 2, size / 2);
        shape.lineTo(-size / 2, size / 2);
        shape.lineTo(-size / 2, -size / 2);
        return new THREE.ShapeGeometry(shape);
    }

    /**
     * Creates a circle geometry.
     */
    createCircleGeometry() {
        // const radius = this.size; // Define the radius of the circle
        const radius = 1.4; // Define the radius of the circle
        const segments = 96; // Define the number of segments for the circle
        const circleGeometry = new THREE.CircleGeometry(radius, segments);
        return new THREE.EdgesGeometry(circleGeometry); // Create an EdgesGeometry from your CircleGeometry
    }

    /**
     * Creates a hexagon geometry.
     */
    createHexagonGeometry() {
        const size = 1.5; // Define the size (radius) of the hexagon
        const numberOfSides = 6; // The hexagon has six sides
        const shape = new THREE.Shape();
        const x = 0; // Center x position
        const y = 0; // Center y position

        shape.moveTo(x + size * Math.cos(0), y + size * Math.sin(0)); // Starting point

        for (let i = 1; i <= numberOfSides; i += 1) {
            const angle = (i * 2 * Math.PI) / numberOfSides;
            shape.lineTo(
                x + size * Math.cos(angle),
                y + size * Math.sin(angle)
            );
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(
            shape.getPoints()
        );
        return geometry;
    }

    onWindowResize(renderer, composer) {
        // Ensure the renderer fills the whole viewport
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        renderer.setSize(newWidth, newHeight);

        // Calculate the new aspect ratio of the window
        let newAspectRatio = newWidth / newHeight;

        // Adjust the camera's FOV based on the new aspect ratio
        this.camera.fov = this.adjustFOV(newAspectRatio);
        this.camera.aspect = newAspectRatio;
        this.camera.updateProjectionMatrix();

        // Adjust the composer's size
        composer.setSize(newWidth, newHeight);
    }

    adjustFOV(newAspectRatio) {
        // Define the base FOV that you want to maintain vertically
        let baseVerticalFOV = 15; // This is an arbitrary value; adjust it based on your scene

        this.mm.add("(max-width: 991px)", () => {
            baseVerticalFOV = 45; // For mobile
        });

        this.mm.add("(min-width: 992px) and (max-width: 1919px)", () => {
            baseVerticalFOV = 55; // For desktop
        });

        this.mm.add("(min-width: 1920px)", () => {
            baseVerticalFOV = 66; // For large screens
        });

        // Calculate the new FOV
        // This FOV calculation maintains the same vertical size regardless of width changes
        const newFOV =
            2 *
            Math.atan(
                Math.tan((baseVerticalFOV * Math.PI) / 180 / 2) / newAspectRatio
            ) *
            (180 / Math.PI);

        return newFOV;
    }

    /*
     * Dispose the webgl animation
     */

    dispose() {
        // console.log("dispose portal effect", this.scene);

        // Cancel the animation
        cancelAnimationFrame(this.animationRequestID);

        // Dispose scene
        this.disposeScene(this.scene);

        // Dispose renderer
        this.renderer.dispose();

        // Remove the canvas from the container
        this.renderer.domElement.remove();
    }

    /*
     * Cascade to dispose all objects in the scene
     */

    disposeScene(obj) {
        if (obj.children.length > 0) {
            for (let i = obj.children.length - 1; i >= 0; i--) {
                this.disposeScene(obj.children[i]);
            }
        }

        if (obj.geometry) {
            obj.geometry.dispose();
        }

        if (obj.material) {
            if (obj.material.length) {
                for (let i = 0; i < obj.material.length; ++i) {
                    obj.material[i].dispose();
                }
            } else {
                obj.material.dispose();
            }
        }

        obj.removeFromParent();
        obj = null;
    }
}
