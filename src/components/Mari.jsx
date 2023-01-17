/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 mari.glb --transform
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Carousel } from 'bootstrap'
import utils from './utils'

export function Mari(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/mari-transformed.glb')

    const { actions,mixer} = useAnimations(animations, group)
    const clips = [actions.dashmari,actions.fallingmari,actions.idlemari,actions.runmari,actions.sprintmari,actions.stopmari,actions.tpose];
        
    utils(clips);

    
    
    return (
        
        <mesh onClick={(e) => clips[1].play()}>
            
            <group ref={group} {...props} dispose={null}>
                <group name="Scene">
                    <group name="mari_gamerig">
                        <primitive object={nodes['DEF-spine']} />

                        <skinnedMesh
                            name="Hood"
                            geometry={nodes.Hood.geometry}
                            material={materials.CAPE}
                            skeleton={nodes.Hood.skeleton}
                        />
                        <skinnedMesh
                            name="Main"
                            geometry={nodes.Main.geometry}
                            material={materials.MAIN}
                            skeleton={nodes.Main.skeleton}
                        />
                        <skinnedMesh
                            name="Eyes"
                            geometry={nodes.Eyes.geometry}
                            material={materials.EYES}
                            skeleton={nodes.Eyes.skeleton}
                            morphTargetDictionary={
                                nodes.Eyes.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Eyes.morphTargetInfluences
                            }
                        />
                        <skinnedMesh
                            name="Head"
                            geometry={nodes.Head.geometry}
                            material={materials.FACE}
                            skeleton={nodes.Head.skeleton}
                            morphTargetDictionary={
                                nodes.Head.morphTargetDictionary
                            }
                            morphTargetInfluences={
                                nodes.Head.morphTargetInfluences
                            }
                        />
                    </group>
                </group>
            </group>
            
        </mesh>
    )
}

useGLTF.preload('/mari-transformed.glb')
