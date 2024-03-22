import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default class ThreeTest {
    constructor() {
        this.$container = document.querySelector(".three-container");
        if (!this.$container) return;
        this.init(this.$container);
    }

    init($container) {

        // Create a cube geometry
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

        // Create a cube material
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            emissive: 0x00ff00, // Same as the material color for full emissiveness
        });

        // Create a cube mesh
        const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // Create the scene
        const scene = new THREE.Scene();

        // Add the cube to the scene
        scene.add(cubeMesh);

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
        camera.position.set(0, 0, 10);
        scene.add(camera);

        // Create the render pass
        const renderScene = new RenderPass(scene, camera);

        // Create an unreal bloom pass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2($container.clientWidth, $container.clientHeight),
            0.6,
            0.9,
            0.1
        );

        // Create an effect composer
        const composer = new EffectComposer(renderer);
        console.log(composer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Add a point light to the scene
        const pointLight = new THREE.PointLight(0xffffff, 1);
        scene.add(pointLight);

        this.animate(composer);
    }

    animate(composer) {
        requestAnimationFrame(() => this.animate(composer));
        composer.render(); // Render the scene with post-processing
    }
}
