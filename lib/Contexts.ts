import { createContext, useContext } from 'react'

export const VerusIDContext = createContext<any>('empty')

type INotify = {
  notify: boolean
  setNotify: (c: boolean) => void
}

export const NotifyContext = createContext<INotify>({
  notify: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNotify: () => {},
})

export const useNotifyContext = () => useContext(NotifyContext)
