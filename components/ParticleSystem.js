import React from "react";
import * as THREE from 'three'

export default function ParticleSystem({ scene }){

    // init
    React.useEffect(() => {

    }, [scene])

    // update
    React.useEffect(() => {

        const update = () => {

        }

        window.addEventListener("sceneUpdate", update)
        return window.removeEventListener("sceneUpdate", update)

    }, [scene])

    return null
}