export interface IMenuItem {
  category: string
  href?: string
  button?: boolean
  submenu?: IMenuSubItem[]
  external?: boolean
}

export interface IMenuSubItem {
  svg?:
    | 'build'
    | 'bridge'
    | 'coin'
    | 'contribute'
    | 'explorer'
    | 'foundations'
    | 'verusIdLookup'
    | 'verusSignatures'
    | 'papers'
    | 'people'
    | 'exchanges'
    | 'documentation'
    | 'supportWiki'
    | 'faq'
    | ''
  link: string
  description?: boolean
  href: string
  external?: boolean
}

export interface IFooterItem {
  name: string
  href: string
  external?: boolean
}
