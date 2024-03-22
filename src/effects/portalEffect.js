import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { gsap } from "gsap";

export default class Portal {
    constructor(container) {
        // Passed in parameters
        this.container = container;

        // Segment settings
        this.size = 1.5;

        // Animation settings
        this.numberOfLayers = 90;
        this.layerDelay = 12;
        this.layerSpacing = 2;

        // Camera animation properties
        this.cameraEndZ = this.numberOfLayers * this.layerSpacing; // Where the camera should stop

        // Scene and related objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        this.controls = null;

        // Layers
        this.layers = [];

        // Portals
        this.squarePortal = [];
        this.hexagonPortal = [];
        this.circlePortal = [];
        // this.hexagonDashedLines = null;
        this.activePortal = this.hexagonPortal;
        this.offsetX = 12.5;
        this.offsetZ = 10;
        this.cameraOffsetZ = -7;
        this.offsetXSquarePortal = this.offsetX;
        this.offsetXSHexagonPortal = 0;
        this.offsetXCirclePortal = -this.offsetX;

        // Style parameters
        this.params = {
            strength: 0.6,
            radius: 0.9,
            threshold: 0.1,
            exposure: 1,
        };

        // Initialize
        // this.initScene();

        this.init(container);
    }

    init($container) {
        // console.log("hello cube?");

        // // Create a cube geometry
        // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

        // // Create a cube material
        // const cubeMaterial = new THREE.MeshBasicMaterial({
        //     color: 0x00ff00,
        // });

        // // Create a cube mesh
        // const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // cubeMesh.position.set(0, 0, 10);

        // Create the scene
        const scene = new THREE.Scene();

        // Add the cube to the scene
        // scene.add(cubeMesh);

        // Create the renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize($container.clientWidth, $container.clientHeight);
        renderer.toneMapping = THREE.ReinhardToneMapping;

        // Add the renderer canvas to the container
        const canvas = renderer.domElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "absolute";
        $container.appendChild(canvas);

        // Create the camera
        const camera = new THREE.PerspectiveCamera(
            60,
            $container.clientWidth / $container.clientHeight,
            1,
            300
        );
        camera.position.set(0, 0, -10);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // Create the render pass
        const renderScene = new RenderPass(scene, camera);

        // Create an unreal bloom pass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2($container.clientWidth, $container.clientHeight),
            1,
            1,
            0
        );

        // Create an effect composer
        const composer = new EffectComposer(renderer);
        console.log(composer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Add a point light to the scene
        const pointLight = new THREE.PointLight(0xffffff, 1);
        scene.add(pointLight);

        this.initialState(scene);

        this.animate(composer);
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
        // squareSegment.position.x = this.offsetXSquarePortal;
        squareSegment.position.x = 0;
        squareSegment.position.z = this.offsetZ;
        this.squarePortal.push(squareSegment);
        scene.add(squareSegment);
        
        // Create the initial Hexagon portal segment
        const hexagonSegment = this.createSegment("hexagon", "#5FB2FF");
        hexagonSegment.position.z = this.offsetZ;
        this.hexagonPortal.push(hexagonSegment);
        scene.add(hexagonSegment);

        // Create the initial Circle portal segment
        const circleSegment = this.createSegment("circle", "#CBA1FE");
        // circleSegment.position.x = this.offsetXCirclePortal;
        circleSegment.position.x = 0;
        circleSegment.position.z = this.offsetZ;
        this.circlePortal.push(circleSegment);
        scene.add(circleSegment);

        // Create a sphere geometry
        const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        // Create a red material
        const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
        });
        // Create a sphere mesh
        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // Set the position of the sphere
        sphereMesh.position.set(3, 0, 10);
        // Add the sphere to the scene
        scene.add(sphereMesh);
    }

    /**
     * Introduces the scene on section enter
     */
    bringForwardAnimation() {
        const introTL = gsap.timeline();

        introTL.to(
            this.camera.position,
            {
                z: this.cameraOffsetZ,
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
        // console.log(`...focusing on ${shape}...`);
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
        gsap.defaults({ duration: 0.9, ease: "power4.inOut" });

        // GSAP animation for camera and portals
        gsap.to(this.camera.position, {
            x: targetX,
        });

        // Move the previous portal back
        previousPortal.forEach((segment) => {
            gsap.to(segment.position, {
                z: this.offsetZ,
            });
        });

        // Move the current active portal to the front
        gsap.to(this.activePortal[0].position, {
            z: 0,
        });
    }

    /**
     * The main animation loop.
     */
    // animate() {
    //     // If composer exits, otherwise use renderer.render(scene, camera)
    //     if (this.composer) {
    //         this.composer.render(); // Render the scene with post-processing
    //     } else {
    //         this.renderer.render(this.scene, this.camera);
    //     }

    //     requestAnimationFrame(this.animate.bind(this)); // Ensure proper 'this' context
    // }

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
        const material = new THREE.LineBasicMaterial({
            color: color,
            linewidth: 5,
        });
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
     * @returns {THREE.EdgesGeometry} The created circle geometry.
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
     * @returns {THREE.BufferGeometry} The created hexagon geometry.
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

    /**
     * Initializes the post-processing effects.
     */
    // initPostProcessing(renderScene) {
    //     const bloomPass = new UnrealBloomPass(
    //         new THREE.Vector2(
    //             this.container.clientWidth,
    //             this.container.clientHeight
    //         ),
    //         1.5,
    //         0.4,
    //         0.85
    //     );
    //     bloomPass.threshold = this.params.threshold;
    //     bloomPass.strength = this.params.strength;
    //     bloomPass.radius = this.params.radius;

    //     // const outputPass = new OutputPass();

    //     this.composer = new EffectComposer(this.renderer);
    //     this.composer.addPass(renderScene);
    //     this.composer.addPass(bloomPass);
    //     // this.composer.addPass(outputPass);
    // }

    // initPostProcessing(renderScene) {
    //     const bloomPass = new UnrealBloomPass(
    //         new THREE.Vector2(
    //             this.container.clientWidth,
    //             this.container.clientHeight
    //         ),
    //         1.5,
    //         0.4,
    //         0.85
    //     );
    //     bloomPass.threshold = this.params.threshold;
    //     bloomPass.strength = this.params.strength;
    //     bloomPass.radius = this.params.radius;

    //     this.composer = new EffectComposer(this.renderer);
    //     this.composer.addPass(renderScene);
    //     this.composer.addPass(bloomPass);
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
