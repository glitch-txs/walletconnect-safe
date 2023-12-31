import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { store } from '@/walletconnect/store'
import { useSyncExternalStore } from 'react'


export default function Home() {

  const provider = useSyncExternalStore(store.subscribe, store.getProvider, ()=>null)

  async function handleConnect(){
    if(!provider) return
    
    await provider.connect().catch(console.warn)
    console.log(provider)
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={handleConnect} >Conenct</button>
      </main>
    </>
  )
}
