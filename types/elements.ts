export interface IButton {
  children: React.ReactNode
  fontSize?: string
  primary?: boolean
  transparent?: boolean
  href?: string
  as?: 'button' | 'a' | 'span'
  wide?: boolean
  svg?: {
    type: 'arrow' | 'tab'
    rotate?: boolean
  }
  onClick?: () => void
  small?: boolean
  color?: string
  fontRegular?: boolean
  white?: boolean
  margin?: string
}

export interface IDefaultHeader {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'center' | 'left'
  color?: string
  fS?: 'xxl' | 'xl' | 'lg' | 'md2' | 'md' | 'sm' | 'xs'
  fontNormal?: boolean
  customColor?: string
  headerStyle?: string
}

export interface IDefaultLink {
  children: React.ReactNode
  href: string
  customColor?: string
}

export interface IDefaultText {
  children: React.ReactNode
  customColor?: string
  width?: number
  align?: string
  fam?: string
  gR?: boolean
  fontSz?: string
}

export interface ITypedJS {
  strings: string[]
}
