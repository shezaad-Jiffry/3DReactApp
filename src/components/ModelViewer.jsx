import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Seamstress } from './Seamstress'
import { Mari} from './Mari'
import { Environment } from '@react-three/drei'
import {Gui} from './GUI'

//function passed into main thats exported
function Model(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            
            <Mari />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const ModelViewer = () => {
    return (
        <div>
            <Gui />
            <Canvas>
                <ambientLight intensity={0.6} />

                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default ModelViewer
