import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

export default class Portal {
    constructor(container, shape, color = 0x00ff00) {
        // Passed in parameters
        this.container = container;
        this.shape = shape;
        this.color = color;
        this.size = 1.5;

        console.log("Portal constructor called with:", container, shape, color);

        // Animation settings
        this.numberOfLayers = 5;
        this.layerDelay = 10;
        this.layerSpacing = 1;

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
        this.stats = null;
        this.controls = null;
        this.clock = null;

        // Layers
        this.layers = [];

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
        this.camera.position.set(0, 0, -10);
        this.scene.add(this.camera);

        // Set the background to a solid color, e.g., light grey
        // this.scene.background = new THREE.Color(0x090a1b);

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

    /**
     * Initializes the scene by setting up the initial state and starting the animation.
     */
    initialState() {
        const segment = this.createSegment();
        this.scene.add(segment);
        // this.animate();
    }

    /**
     * Creates a segment based on the specified shape.
     * @returns {THREE.Line} The created segment.
     */
    createSegment() {
        const geometry = this.createGeometry(this.shape);
        const material = new THREE.LineBasicMaterial({ color: this.color });
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
        const segments = 32; // Define the number of segments for the circle
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

    /**
     * Easing function for smooth deceleration.
     * @param {number} x - The input value.
     * @returns {number} The eased output value.
     */
    ease(x, functionName) {
        switch (functionName) {
            case "easeInCubic":
                return x * x * x;
            case "easeOutCubic":
                return 1 - Math.pow(1 - x, 3);
            case "easeInOutQuint":
                return x < 0.5
                    ? 16 * x * x * x * x * x
                    : 1 - Math.pow(-2 * x + 2, 5) / 2;
            case "easeInQuint":
                return x * x * x * x * x;
            case "easeOutQuint":
                return 1 - Math.pow(1 - x, 5);
            case "easeInCirc":
                return 1 - Math.sqrt(1 - Math.pow(x, 2));
            default:
                throw new Error(`Unknown easing function: ${functionName}`);
        }
    }

    animate() {
        if (this.cameraAnimating) {
            const elapsedTime =
                this.clock.getElapsedTime() - this.cameraAnimationStartTime;
            const t = Math.min(elapsedTime / this.cameraAnimationDuration, 1); // Normalize time to [0,1]

            const easing = this.ease(t, "easeInCubic");

            // Assuming you want to move from -10 to 0 on the z-axis:
            this.camera.position.z = THREE.MathUtils.lerp(
                this.cameraStartZ,
                this.cameraEndZ,
                easing
            );

            if (t >= 1) {
                this.cameraAnimating = false;
            }
        }

        // If composer exits, otherwise use renderer.render(scene, camera)
        if (this.composer) {
            this.composer.render(); // Render the scene with post-processing
        } else {
            this.renderer.render(this.scene, this.camera);
        }

        requestAnimationFrame(this.animate.bind(this)); // Ensure proper 'this' context
    }

    /**
     * Builds the portal by adding multiple segments over time, creating an animated effect.
     */
    buildPortal() {
        console.log("...building the portal...");
        for (let i = 0; i < this.numberOfLayers; i++) {
            setTimeout(() => {
                // createSegment already creates the geometry and applies the material
                const segment = this.createSegment();

                // Apply any transformations or additional properties to the segment here
                segment.position.z = i * this.layerSpacing;

                this.scene.add(segment);
                this.layers.push(segment); // Assuming this.layers is an array to keep track of segments
            }, i * this.layerDelay);
        }
    }

    startCameraAnimation() {
        console.log("... starting camera animation...");
        this.cameraAnimating = true;
        this.cameraAnimationStartTime = this.clock.getElapsedTime(); // This should capture the current elapsed time
    }

    start() {
        this.buildPortal();
        // Start the camera animation after the last layer has been created
        setTimeout(() => {
            this.startCameraAnimation();
        }, this.numberOfLayers * this.layerDelay);
    }

    onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.composer.setSize(width, height);
    }
    
    adjustPortalSize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.composer.setSize(width, height);
    }
}
