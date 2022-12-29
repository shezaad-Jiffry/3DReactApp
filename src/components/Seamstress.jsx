/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 Seamstress.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { sRGBEncoding } from 'three'
export function Seamstress(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(
        '/Seamstress-transformed.glb'
    )
    const { actions } = useAnimations(animations, group)
    const [clothingTexture, faceTexture, hairTexture] = useLoader(
        TextureLoader,
        [
            'textures/Seamstress-clothing.png',
            'textures/Seamstress-Face.png',
            'textures/Seamstress-Hair.png',
        ]
    )
    clothingTexture.flipY = false
    faceTexture.flipY = false
    hairTexture.flipY = false
    clothingTexture.encoding = sRGBEncoding
    faceTexture.encoding = sRGBEncoding
    hairTexture.encoding = sRGBEncoding

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="mari-rig">
                    <primitive object={nodes['DEF-spine']} />
                    <group name="mari">
                        <skinnedMesh
                            name="KaoruSakaki-Head012"
                            geometry={nodes['KaoruSakaki-Head012'].geometry}
                            skeleton={nodes['KaoruSakaki-Head012'].skeleton}
                        >
                            <meshToonMaterial map={clothingTexture} />
                        </skinnedMesh>
                        <skinnedMesh
                            name="KaoruSakaki-Head012_1"
                            geometry={nodes['KaoruSakaki-Head012_1'].geometry}
                            skeleton={nodes['KaoruSakaki-Head012_1'].skeleton}
                        >
                            <meshToonMaterial map={faceTexture} />
                        </skinnedMesh>
                        <skinnedMesh
                            name="KaoruSakaki-Head012_2"
                            geometry={nodes['KaoruSakaki-Head012_2'].geometry}
                            skeleton={nodes['KaoruSakaki-Head012_2'].skeleton}
                        >
                            <meshToonMaterial map={hairTexture} />
                        </skinnedMesh>
                    </group>
                    <skinnedMesh
                        name="needle"
                        geometry={nodes.needle.geometry}
                        material={materials.clothing}
                        skeleton={nodes.needle.skeleton}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Seamstress-transformed.glb')
