import React, { useMemo } from 'react'
import * as THREE from 'three'

const BackgroundGrid = () => {
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

export default BackgroundGrid