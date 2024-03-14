import { useContext } from 'react'
import {
  ProfileServices,
  ProfileAccounts,
  ProfileCollections,
} from './VerusIdProfile'
import { VerusIDContext } from '@/lib/Contexts'

//things of knowing are located in the context
// 1) collections - this is from arwave, content, or from web
// 2) public - which is addressed by the header
// 3) keys - which are blockchain addresses
// 4) services - this can be accounts, websites, and more.
// the order of listing will be services, keys, and then collections as public is taken care of by the header of the profile.

const Profile = () => {
  const context = useContext(VerusIDContext)
  const profile = context?.profileJSON
  //TODO: remove profile from here and use the subComponents as the return of component or null
  if (profile) {
    return (
      <>
        {profile?.services && <ProfileServices />}
        {profile?.keys && <ProfileAccounts />}
        {profile?.collections && <ProfileCollections />}
      </>
    )
  } else {
    return null
  }
}

export default Profile
