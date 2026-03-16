import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const PixelCube = () => {
    const groupRef = useRef();
    const pointsRef = useRef();
    const count = 10500;
    const limit = 0.9; // Mitad del tamaño (1.8 / 2)

    // Usamos useMemo para generar posiciones y velocidades iniciales
    const particles = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Posición inicial
            pos[i * 3] = (Math.random() - 0.5) * 1.8;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 1.8;
            // Velocidad aleatoria pequeña
            vel[i * 3] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
        }
        return { pos, vel };
    }, [count]);

    useGSAP(() => {
        gsap.to(groupRef.current.rotation, {
            y: Math.PI * 2, duration: 10, repeat: -1, ease: "none"
        })
    }, []);

    useFrame(() => {
        const pos = pointsRef.current.geometry.attributes.position.array;
        
        for (let i = 0; i < count; i++) {
            // 1. Actualizar posición con velocidad
            pos[i * 3] += particles.vel[i * 3];
            pos[i * 3 + 1] += particles.vel[i * 3 + 1];
            pos[i * 3 + 2] += particles.vel[i * 3 + 2];

            // 2. Lógica de rebote
            for (let j = 0; j < 3; j++) {
                if (pos[i * 3 + j] > limit || pos[i * 3 + j] < -limit) {
                    particles.vel[i * 3 + j] *= -1; // Invertir dirección
                }
            }
        }
        // 3. Avisar a Three.js que los datos cambiaron
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group ref={groupRef}>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial color="#ffaa00" wireframe={true} transparent={true} opacity={0.3} />
            </mesh>

            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={particles.pos}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.02} color="#ffffff" transparent={true} opacity={0.6} />
            </points>
        </group>
    );
};

export default PixelCube;