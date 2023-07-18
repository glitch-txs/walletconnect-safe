import { useSyncExternalStore } from 'react'
import { store } from './store'

export const useProvider = () =>useSyncExternalStore(store.subscribe, store.getProvider, ()=>null)