export interface VDXFID {
  vdxfid: string
  hash160result: string
  qualifiedname: {
    namespace: string
    name: string
  }
}

export interface ProfileProps {
  arweave: VDXFID | string
  web: VDXFID | string
  content: VDXFID | string
  controller: VDXFID | string
  profileAvatar: VDXFID | string
  profileBackground: VDXFID | string
  profileHeader: VDXFID | string
  profileImage: VDXFID | string
  profilePublic: VDXFID | string
  profileAbout: VDXFID | string
  profileSettings: VDXFID | string
}

export const ProfileLib: ProfileProps = {
  arweave: 'vrsc::system.collections.arweave',
  web: 'vrsc::system.collections.web',
  content: 'vrsc::system.collections.content',
  controller: 'vrsc::system.proofs.controller',
  profileAvatar: 'vrsc::system.identity.profile.avatar',
  profileBackground: 'vrsc::system.identity.profile.background',
  profileHeader: 'vrsc::system.identity.profile.header',
  profileImage: 'vrsc::system.identity.profile.image',
  profilePublic: 'vrsc::system.identity.profile.public',
  profileAbout: 'vrsc::system.identity.profile.about',
  profileSettings: 'vrsc::system.identity.profile.settings',
}

export interface PublicProfileLib {
  qualifiedname: string
  [key: string]: string | string[]
}

export interface PublicProfileProps {
  [key: string]: PublicProfileLib | Partial<Accounts> | string
}

export interface AccountObjects {
  [key: string]: PublicProfileLib | AccountObjects
}

export interface Accounts {
  [key: string]: AccountObjects | ProfileProps
}

export interface VerusResult {
  result: Record<string, any> | null
  error: Record<string, any> | null
  profileJSON?: PublicProfileProps
  id?: string
}
