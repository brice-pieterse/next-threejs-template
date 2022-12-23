import React from 'react'
import * as THREE from 'three'

// experiments
import ParticleSystem from './ParticleSystem';

export default function ThreeComponent(){
    const canvasRef = React.useRef();
    const [camera, setCamera] = React.useState()
    const [renderer, setRenderer] = React.useState()
    const [scene, setScene] = React.useState()
    const frame = React.useRef()


    // init
    React.useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, width: innerWidth, height: innerHeight, alpha: true })
        console.log(innerWidth, innerHeight)
        renderer.setSize(innerWidth, innerHeight)
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
        renderer.setClearColor(0x000000)
        const camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 0.1, 500)
        const scene = new THREE.Scene()
        setScene(scene)
        setRenderer(renderer)
        setCamera(camera)
        
    }, [])

    // draw
    React.useEffect(() => {
        if(camera && renderer && scene){

            const draw = () => {
                renderer.render(scene, camera)
                window.dispatchEvent(new CustomEvent("sceneUpdate"))
                frame.current = requestAnimationFrame(draw)
            }

            draw()

            return () => cancelAnimationFrame(frame.current)

        }
    }, [camera, renderer, scene])


    return (
        <>
            {scene && <ParticleSystem scene={scene}/> }
            <canvas ref={canvasRef}></canvas>
        </>
    )
}