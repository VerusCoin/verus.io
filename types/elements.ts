export interface IButton {
  children: React.ReactNode
  primary?: boolean
  transparent?: boolean
  href?: string
  as?: 'button' | 'a' | 'span'
  wide?: boolean
  svg?: {
    type: 'arrow' | 'tab'
    rotate?: boolean
  }
}

export interface IDefaultHeader {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'center' | 'left'
  customColor?: 'white' | ''
}

export interface IDefaultLink {
  children: React.ReactNode
  href: string
  customColor?: 'grey'
}

export interface IDefaultText {
  children: React.ReactNode
  customColor?: string
}

export interface INetTag {
  net: string
  children?: React.ReactNode
}

export interface ITypedJS {
  strings: string[]
}
