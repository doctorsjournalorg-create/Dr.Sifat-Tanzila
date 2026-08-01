import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  scrollYProgress?: number;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ scrollYProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(scrollYProgress);

  useEffect(() => {
    scrollRef.current = scrollYProgress;
  }, [scrollYProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f3d6e, 0.0015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 1. Create floating medical particles
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const cyanColor = new THREE.Color(0x00a4c4);
    const blueColor = new THREE.Color(0x1e6091);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mixVal = Math.random();
      const col = mixVal < 0.5 ? cyanColor : mixVal < 0.85 ? blueColor : whiteColor;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      scales[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Create 3D Geometric Molecular/Medical Nodes (Icosahedron & Octahedron)
    const nodesGroup = new THREE.Group();
    const nodeGeometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1.0, 0),
      new THREE.TorusGeometry(1.5, 0.15, 8, 24)
    ];

    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x00a4c4, wireframe: true, transparent: true, opacity: 0.25 }),
      new THREE.MeshBasicMaterial({ color: 0x1e6091, wireframe: true, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.2 })
    ];

    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const geoIndex = i % nodeGeometries.length;
      const mesh = new THREE.Mesh(nodeGeometries[geoIndex], nodeMaterials[geoIndex]);
      
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30 - 10
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );

      nodesGroup.add(mesh);
      nodes.push(mesh);
    }
    scene.add(nodesGroup);

    // 3. Subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00a4c4, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Mouse interaction tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const scrollVal = scrollRef.current;

      // Rotate particles & group based on scroll and time
      particles.rotation.y += 0.001;
      particles.rotation.x = scrollVal * Math.PI * 0.5;

      nodesGroup.rotation.y += 0.002;
      nodesGroup.rotation.x += 0.001;
      nodesGroup.position.y = -scrollVal * 20;

      nodes.forEach((node, idx) => {
        node.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
        node.rotation.y += 0.005;
      });

      // Smooth camera motion following mouse & scroll
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 3 - scrollVal * 15 - camera.position.y) * 0.03;
      camera.lookAt(0, -scrollVal * 10, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      id="three-3d-bg-canvas"
    />
  );
};
