import { createContext, useContext } from 'react'

export const VerusIDContext = createContext<any>('empty')

// export const useVerusIDContext = () => useContext(VerusIDContext)

type INotify = {
  notify: boolean
  setNotify: (c: boolean) => void
  blockCount?: number
  blockString?: string
}

export const NotifyContext = createContext<INotify>({
  notify: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNotify: () => {},
  blockCount: 0,
  blockString: '0',
})

export const useNotifyContext = () => useContext(NotifyContext)

// export const BannerContext = createContext({
//   blockCount: 0,
//   blockString: '0'
// })

// export const useBannerContext = useContext(BannerContext)
