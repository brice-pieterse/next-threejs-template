## Setup

Template nextjs project that I use for prototyping and testing small threejs experiments.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project uses a basic setup where components/ThreeComponent.js acts as the orchestrator and root of a threejs scene. It passes the Threejs scene to various child components (see Samples below), which manage their own state and make updates in a draw function that's called on sceneUpdate (custom event emitted by ThreeComponent's render loop).

## Samples

The following can be mounted in ThreeComponent. Make sure to pass scene (THREE.Scene) as a prop.

- components/ParticleSystem.js - sample particle system component.