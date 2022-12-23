import Head from 'next/head'
import ThreeComponent from '../components/ThreeComponent'


export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Head>
        <title>Nextjs Threejs Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThreeComponent/>
    </div>
  )
}
