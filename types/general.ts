export interface IMenuItem {
  category: string
  href?: string
  button?: boolean
  submenu?: IMenuSubItem[]
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
  description?: string
  href: string
  external?: boolean
}

export interface IFooterItem {
  name: string
  href: string
}
