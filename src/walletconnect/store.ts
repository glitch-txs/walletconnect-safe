import { EthereumProvider } from '@walletconnect/ethereum-provider'

type Callback = ()=>void

let provider: InstanceType<typeof EthereumProvider>;
let callback: Callback;
let getCallback = ()=>callback;

async function InitProvider(){
  if(typeof window === 'undefined') return

  provider = await EthereumProvider.init({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    optionalChains:[1, 5, 56, 42161],
    showQrModal: true
  })

  //useSyncExternalStore callback
  getCallback()()
}

InitProvider()

export const store = {
  getProvider: ()=>provider,
  subscribe: (cb: Callback)=>callback = cb  
}



