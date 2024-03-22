import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { gsap } from "gsap";

export default class Portal {
    constructor(container) {
        // Passed in parameters
        this.container = container;

        // Animation settings
        this.numberOfLayers = 60;
        this.layerDelay = 40;
        this.layerSpacing = 3;

        // Camera animation properties

        // Scene and related objects
        this.camera = null;
        this.cameraInitialZ = -60;
        this.cameraOffsetZ = -20;
        this.cameraEndZ = this.numberOfLayers * this.layerSpacing; // Where the camera should stop
        this.cameraZoomDelay = 1.8; // Delay for the camera to move after the portal building starts

        // Portals
        this.portalSquare = new THREE.Group();
        this.portalHexagon = new THREE.Group();
        this.portalCircle = new THREE.Group();
        this.portalActive = this.portalHexagon;
        this.portalOffsetX = 12;
        this.portalOffsetZ = 0;
        this.portalOffsetZActive = -14.5;
        this.portalOffsetXSquarePortal = this.portalOffsetX;
        this.portalOffsetXSHexagonPortal = 0;
        this.portalOffsetXCirclePortal = -this.portalOffsetX;
        // this.hexagonDashedLines = null;

        // Style parameters
        this.params = {
            strength: 0.8,
            radius: 0.95,
            threshold: 0,
        };

        // Initialize
        this.init(container);
    }

    init($container) {
        // Create the scene
        const scene = new THREE.Scene();

        // Create the renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize($container.clientWidth, $container.clientHeight);

        // Choose the desired tone mapping option
        const toneMappingOptions = {
            ACESFilmic: THREE.ACESFilmicToneMapping,
            Cineon: THREE.CineonToneMapping,
            Linear: THREE.LinearToneMapping,
            None: THREE.NoToneMapping,
            Reinhard: THREE.ReinhardToneMapping,
        };
        renderer.toneMapping = toneMappingOptions["Cineon"];

        // Add the renderer canvas to the container
        const canvas = renderer.domElement;
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
        scene.add(this.camera);

        // Create the render pass
        const renderScene = new RenderPass(scene, this.camera);

        // Create an unreal bloom pass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2($container.clientWidth, $container.clientHeight),
            this.params.strength, // Strength
            this.params.radius, // Radius
            this.params.threshold // Threshold
        );

        // Create an effect composer
        const composer = new EffectComposer(renderer);
        const outputPass = new OutputPass();
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        composer.addPass(outputPass);

        // Add a point light to the scene
        // const pointLight = new THREE.PointLight(0xffffff, 1);
        // scene.add(pointLight);

        this.initialState(scene);

        this.animate(composer);

        setTimeout(() => {
            this.bringForwardAnimation();
        }, 1000);

        // setTimeout(() => {
        //     this.focus("square");
        // }, 2000);

        // setTimeout(() => {
        //     this.start();
        // }, 3000);
    }

    animate(composer) {
        requestAnimationFrame(() => this.animate(composer));
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

        console.log("bring forward");

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

        console.log("...starting portal animation...");

        // Clear the active portal array except for the first element (the original segment)
        // while (this.portalActive.children.length > 1) {
        //     const segment = this.portalActive.children.pop();
        //     // this.scene.remove(segment); // Remove segment from scene if needed
        // }

        // TODO: Add and animate dashed lines
        // this.hexagonDashedLines.visible = true; // Make the lines visible
        // this.hexagonDashedLines.children.forEach((line) => {
        //     // Assuming the material supports opacity; otherwise, use a custom shader
        //     line.material.transparent = true;
        //     line.material.opacity = 0;
        //     gsap.to(line.material, {
        //         opacity: 1,
        //         duration: 1,
        //         stagger: 0.5,
        //     });
        // });

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
                    console.log("Camera animation complete.");
                },
            },
            `-=${this.cameraZoomDelay}` // start the camera animation before the portal building completes
        ); 
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

    // createHexagonDashedLines(size, color, zStart, zEnd) {
    //     const numberOfSides = 6;
    //     const dashedLines = new THREE.Group(); // Create a group to hold all the lines

    //     for (let i = 0; i < numberOfSides; i++) {
    //         const angle = (i * 2 * Math.PI) / numberOfSides;

    //         // Calculate the x and y coordinates for the corner of the hexagon
    //         const x = size * Math.cos(angle);
    //         const y = size * Math.sin(angle);

    //         // Define the start and end points of the line along the z-axis
    //         const start = new THREE.Vector3(x, y, zStart);
    //         const end = new THREE.Vector3(x, y, zEnd);

    //         // Create geometry and define positions
    //         const geometry = new THREE.BufferGeometry().setFromPoints([
    //             start,
    //             end,
    //         ]);

    //         // Create dashed material
    //         const material = new THREE.LineDashedMaterial({
    //             color: color, // The color passed to the function
    //             dashSize: 3, // Length of the dashes
    //             gapSize: 1, // Length of the gaps
    //             scale: 1, // The scale of the dashed lines
    //         });

    //         // Create the line
    //         const line = new THREE.Line(geometry, material);

    //         // Compute the line distances to get the dashed effect
    //         line.computeLineDistances();

    //         // Add the line to the group
    //         dashedLines.add(line);
    //     }

    //     return dashedLines; // Return the group containing all the dashed lines
    // }



    onWindowResize() {
        // Ensure the renderer fills the whole viewport
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        this.renderer.setSize(newWidth, newHeight);

        // Calculate the new aspect ratio of the window
        const newAspectRatio = newWidth / newHeight;

        // Adjust the camera's FOV based on the new aspect ratio
        this.camera.fov = this.adjustFOV(newAspectRatio);

        // TODO: Add breakpoint for mobile
        // Log the new aspect ratio and FOV to the console for debugging
        // console.log("aspect ratio: ", newAspectRatio);
        // console.log("fov: ", this.camera.fov);

        // Update the camera's projection matrix
        this.camera.updateProjectionMatrix();

        // If using post-processing via EffectComposer, update its size as well
        if (this.composer) {
            this.composer.setSize(newWidth, newHeight);
        }
    }

    adjustFOV(newAspectRatio) {
        // Define the base FOV that you want to maintain vertically
        const baseVerticalFOV = 30; // This is an arbitrary value; adjust it based on your scene

        // Calculate the new FOV
        // This FOV calculation maintains the same vertical size regardless of width changes
        const newFOV =
            2 *
            Math.atan(
                Math.tan((baseVerticalFOV * Math.PI) / 180 / 2) / newAspectRatio
            ) *
            (180 / Math.PI);

        return newFOV * 1.7;
    }
}
