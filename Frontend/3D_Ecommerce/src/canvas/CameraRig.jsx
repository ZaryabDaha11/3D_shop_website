import React, { useRef } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useFrame } from '@react-three/fiber'
import {easing} from 'maath'

const CameraRig = ({ children }) => {
    const groupRef = useRef()
    const snap = useSnapshot(state)

    //this hook alllows to execute code on every rendered frame
    useFrame((state, delta) => { 
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        //set the initial position of the model
        let targetPosition = [-0.4, 0, 2]
        if (snap.intro) {
            if (isBreakpoint) targetPosition = [0, 0, 2]
            if (isMobile) targetPosition = [0, 0.2, 2.5]
        }
        else {
            if (isBreakpoint) targetPosition = [0, 0, 2]
            if (isMobile) targetPosition = [0, 0, 2.5]
        }

        //setting model camera position
        easing.dampE(
            state.camera.position,
            targetPosition,
            0.25,
            delta
        )

        //setting the model roatation 
        easing.dampE(
            groupRef.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    })

  return (
      <group ref={groupRef}>
          {children}
    </group>
  )
}

export default CameraRig