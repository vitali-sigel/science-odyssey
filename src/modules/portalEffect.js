import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { gsap } from "gsap";

export default class Portal {
    constructor(container) {
        // Passed in parameters
        this.container = container;

        // Segment settings
        this.size = 1.5;
        this.positionZ = 12;

        // Animation settings
        this.numberOfLayers = 120;
        this.layerDelay = 12;
        this.layerSpacing = 2;

        // Camera animation properties
        this.cameraStartZ = -10; // Assuming this is where your camera starts
        this.cameraEndZ = this.numberOfLayers * this.layerSpacing; // Where the camera should stop
        this.cameraAnimating = false; // Flag to track if camera is currently animating
        this.cameraAnimationStartTime = 0; // When the camera animation starts
        this.cameraAnimationDuration = 2; // Duration of the animation in seconds

        // Scene and related objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        // this.stats = null;
        this.controls = null;
        // this.clock = null;

        // Layers
        this.layers = [];

        // Portals
        this.squarePortal = [];
        this.hexagonPortal = [];
        this.circlePortal = [];
        this.hexagonDashedLines = null;
        this.activePortal = this.hexagonPortal;
        this.offsetX = 8;
        this.offsetZ = 20;
        this.offsetXSquarePortal = this.offsetX;
        this.offsetXSHexagonPortal = 0;
        this.offsetXCirclePortal = -this.offsetX;

        // Parallax effect
        this.targetCameraPosition = new THREE.Vector3();
        this.mouse = new THREE.Vector2();

        // Style parameters
        this.params = {
            threshold: 0,
            strength: 0.66,
            radius: 0.35,
            exposure: 1,
        };

        // Initialize
        this.initScene();
    }

    /**
     * Initializes the scene by setting up the initial state and starting the animation.
     */
    initScene() {
        // Time
        this.clock = new THREE.Clock();

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(
            this.container.clientWidth,
            this.container.clientHeight
        );
        this.renderer.toneMapping = THREE.ReinhardToneMapping;

        // Add the canvas into the container
        const canvas = this.renderer.domElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        this.container.appendChild(canvas);

        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            30,
            this.container.clientWidth / this.container.clientHeight,
            1,
            300
        );
        this.camera.position.set(0, 0, -50);
        this.scene.add(this.camera);

        // Controls
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );
        this.controls.enabled = false;

        // Lighting
        const pointLight = new THREE.PointLight(this.color, 100);
        this.camera.add(pointLight);

        // Post-processing
        const renderScene = new RenderPass(this.scene, this.camera);
        this.initPostProcessing(renderScene);

        // Bind window resize event
        window.addEventListener("resize", () => this.onWindowResize(), false);

        // Geometry
        this.initialState();

        // Start the animation
        this.animate();
    }

    /**
     * Initializes the scene by setting up the initial state and starting the animation.
     */
    initialState() {
        // Create the initial Square portal segment
        const squareSegment = this.createSegment("square", "#54EAAB");
        squareSegment.position.x = this.offsetXSquarePortal;
        squareSegment.position.z = this.offsetZ;
        this.squarePortal.push(squareSegment);
        this.scene.add(squareSegment);

        // Create the initial Hexagon portal segment
        const hexagonSegment = this.createSegment("hexagon", "#5FB2FF");
        hexagonSegment.position.z = this.offsetZ;
        this.hexagonPortal.push(hexagonSegment);
        this.scene.add(hexagonSegment);

        // Create the initial Circle portal segment
        const circleSegment = this.createSegment("circle", "#CBA1FE");
        circleSegment.position.x = this.offsetXCirclePortal;
        circleSegment.position.z = this.offsetZ;
        this.circlePortal.push(circleSegment);
        this.scene.add(circleSegment);

        // Set the active portal based on some condition or default to hexagon
        this.activePortal = this.hexagonPortal; // Assuming hexagon is the default active portal

        // Dashed lines for the hexagon
        // Assuming you have a size defined for your hexagon
        // this.hexagonDashedLines = this.createHexagonDashedLines(
        //     this.size,
        //     "#5FB2FF",
        //     -5,
        //     240
        // );
        // this.scene.add(this.hexagonDashedLines);
        // this.hexagonDashedLines.visible = false;

        // Parallax effect based on cursor position
        // this.parallaxEffect();
    }

    /**
     * Introduces the scene on section enter
     */
    introduceAnimation() {
        const introTL = gsap.timeline();

        introTL

            .to(
                this.camera.position,
                {
                    z: -10,
                    duration: 0.6,
                    ease: "power4.out",
                },
                "a"
            )

            // Animate hexagonSegment to z = 0
            .to(
                this.hexagonPortal[0].position,
                {
                    z: 0,
                    duration: 0.6,
                    ease: "power4.out",
                },
                "a"
            );
    }

    // TODO: Disturbes other camera animations
    parallaxEffect() {
        document.addEventListener("mousemove", (event) => {
            // Convert mouse position to normalized device coordinates (-1 to +1)
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Calculate target camera position based on mouse position
            // Adjust the multiplier for subtler effect
            this.targetCameraPosition.x = this.mouse.x * 0.1;
            this.targetCameraPosition.y = this.mouse.y * 0.1;

            // Keep the camera's z-position constant to prevent moving past elements
            this.targetCameraPosition.z = this.camera.position.z;

            // Use GSAP to smoothly move the camera towards the target position
            gsap.to(this.camera.position, {
                x: this.targetCameraPosition.x,
                y: this.targetCameraPosition.y,
                duration: 0.5, // Adjust duration for desired speed
                ease: "power2.out", // Choose easing function as needed
            });
        });
    }

    /**
     * Focuses on the specified shape.
     * @param {string} shape - The shape to focus on.
     * @throws {Error} If the shape is unknown.
     * @returns {void}
     */
    focus(shape) {
        console.log(`...focusing on ${shape}...`);
        const targetX = {
            square: this.offsetXSquarePortal,
            hexagon: this.offsetXSHexagonPortal,
            circle: this.offsetXCirclePortal,
        }[shape];
        const previousPortal = this.activePortal;

        switch (shape) {
            case "square":
                this.activePortal = this.squarePortal;
                break;
            case "hexagon":
                this.activePortal = this.hexagonPortal;
                break;
            case "circle":
                this.activePortal = this.circlePortal;
                break;
            default:
                console.log(`Unknown shape: ${shape}`);
                return;
        }

        // GSAP defaults
        gsap.defaults({ duration: 0.8, ease: "power4.out" });

        // GSAP animation for camera and portals
        gsap.to(this.camera.position, {
            x: targetX,
        });

        // Move the current active portal to the front
        gsap.to(this.activePortal[0].position, {
            z: 0,
        });

        // Move the previous portal back
        previousPortal.forEach((segment) => {
            gsap.to(segment.position, {
                z: this.offsetZ,
            });
        });
    }

    /**
     * The main animation loop.
     */
    animate() {
        // If composer exits, otherwise use renderer.render(scene, camera)
        if (this.composer) {
            this.composer.render(); // Render the scene with post-processing
        } else {
            this.renderer.render(this.scene, this.camera);
        }

        requestAnimationFrame(this.animate.bind(this)); // Ensure proper 'this' context
    }

    /*
     * Starts the portal animation.
     */
    start() {
        // Create a new GSAP timeline
        const masterTimeline = gsap.timeline();

        console.log("...starting portal animation...");

        // Clear the active portal array except for the first element (the original segment)
        while (this.activePortal.length > 1) {
            const segment = this.activePortal.pop();
            this.scene.remove(segment); // Remove segment from scene if needed
        }

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
                        const originalSegment = this.activePortal[0];
                        const segment = originalSegment.clone();

                        // Position it at the correct depth
                        segment.position.z =
                            originalSegment.position.z + i * this.layerSpacing; // position clones with an offset on the z-axis

                        // Add the new segment to the scene and the active portal array
                        this.scene.add(segment);
                        this.activePortal.push(segment);
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
                    // Additional callbacks or actions after camera animation can be placed here
                },
                // }, `+=${(this.numberOfLayers - 1) * this.layerDelay / 1000}`); // start after all segments have been added
            },
            "-=1.6"
        ); // start after all segments have been added
    }

    /**
     * Creates a segment based on the specified shape.
     * @returns {THREE.Line} The created segment.
     */
    createSegment(shape = this.shape, color = this.color) {
        const geometry = this.createGeometry(shape);
        const material = new THREE.LineBasicMaterial({ color: color });
        const segment = new THREE.Line(geometry, material);
        return segment;
    }

    /**
     * Creates a geometry based on the specified shape.
     * @param {string} shape - The shape of the geometry.
     * @returns {THREE.Geometry} The created geometry.
     * @throws {Error} If the shape is unknown.
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
     * @returns {THREE.ShapeGeometry} The created square geometry.
     */
    createSquareGeometry() {
        // const size = this.size; // Define the size of the square
        const size = 2.25; // Define the size of the square
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
     * @returns {THREE.EdgesGeometry} The created circle geometry.
     */
    createCircleGeometry() {
        const radius = this.size; // Define the radius of the circle
        const segments = 96; // Define the number of segments for the circle
        const circleGeometry = new THREE.CircleGeometry(radius, segments);
        return new THREE.EdgesGeometry(circleGeometry); // Create an EdgesGeometry from your CircleGeometry
    }

    /**
     * Creates a hexagon geometry.
     * @returns {THREE.BufferGeometry} The created hexagon geometry.
     */
    createHexagonGeometry() {
        const size = this.size; // Define the size (radius) of the hexagon
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

    /**
     * Initializes the post-processing effects.
     */
    initPostProcessing(renderScene) {
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(
                this.container.clientWidth,
                this.container.clientHeight
            ),
            1.5,
            0.4,
            0.85
        );
        bloomPass.threshold = this.params.threshold;
        bloomPass.strength = this.params.strength;
        bloomPass.radius = this.params.radius;

        const outputPass = new OutputPass();

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);
        this.composer.addPass(bloomPass);
        this.composer.addPass(outputPass);
    }

    onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.composer.setSize(width, height);
    }
}
