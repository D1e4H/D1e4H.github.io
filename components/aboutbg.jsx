import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const ProjectBg = () => {
    return (

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            {/* Un plano gigante */}
            <planeGeometry args={[100, 100, 50, 50]} />
            <meshBasicMaterial
                color="#7f00aa"
                wireframe={true}
                transparent={true}
                opacity={0.2}
            />
        </mesh>

    )
}

export default ProjectBg