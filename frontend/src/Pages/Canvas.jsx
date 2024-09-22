import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Import the GLB file directly (ensure the path is correct)
import model from '/home/vrushabh/Ayurflora/frontend/src/assets/alovera_plant_2004_to _render.glb'; // Update the path to your model

const Canvas3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // Set background color to white for better visibility

        const camera = new THREE.PerspectiveCamera(75, 600 / 600, 0.1, 1000);
        camera.position.set(0, 1, 3); // Adjust camera position to fit the GLB model in view

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(600, 600);
        mountRef.current.appendChild(renderer.domElement);

        // Load GLB Model
        const loader = new GLTFLoader();

        console.log('Loading GLB model from direct import:', model);

        loader.load(
            model,
            (gltf) => {
                const gltfScene = gltf.scene;
                gltfScene.position.set(1, 0, 0); // Adjust model position if needed
                scene.add(gltfScene);

                // Start animation loop once the model is loaded
                animate();
            },
            undefined, // onProgress (not used)
            (error) => console.error('Error loading GLB model:', error) // Error callback
        );

        // Orbit Controls for user interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth controls
        controls.dampingFactor = 0.25;
        controls.enableZoom = true; // Enable zooming
        controls.enableRotate = true; // Enable rotating
        controls.enablePan = true; // Enable panning

        // Add a light source to illuminate the model
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
        directionalLight.position.set(2, 2, 5).normalize();
        scene.add(directionalLight);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Required for damping
            renderer.render(scene, camera);
        };

        // Handle Resize
        const handleResize = () => {
            renderer.setSize(600, 600); // Set to fixed 600x600
            camera.aspect = 600 / 600;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Clean Up on Unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []); // Dependency array is empty since the model is loaded from a direct import

    return <div ref={mountRef} style={{ width: '600px', height: '600px' }} />;
};

export default Canvas3D;
