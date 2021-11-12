//Import known vdxfid JSONs for profile
//TODO: need a way to either reverse vdxfid or
// a vdxfid library needs to be created
import {
  CollectionsJSON,
  KeysJSON,
  IdentityJSON,
  ServicesJSON,
} from '@/data/vdxfid'
// import FetchVdxfId from './FetchVdxfId'
//TODO: need to reverse vdxfid value instead of storing them all.

// const ObjectFinder = (
//   key: string,
//   obj: ProfileProps | Record<string, any>
// ): any => obj[key]

// const assign = (obj, keyPath, value) => {
//   let lastKeyIndex = keyPath.length - 1
//   for (var i = 0; i < lastKeyIndex; ++i) {
//     let key = keyPath[i]
//     if (!(key in obj)) {
//       obj[key] = {}
//     }
//     obj = obj[key]
//   }
//   obj[keyPath[lastKeyIndex]] = value
// }

const CreateProfile = (profileJSON) => {
  // console.log(profileJSON)
  let profile = {}
  //First: Get identity information
  for (const [key, value] of Object.entries(IdentityJSON)) {
    // console.log(IdentityJSON[key])
    if (profileJSON[value.vdxfid]) {
      if (profile.public) {
        profile.public[key] = profileJSON[value.vdxfid]
      } else {
        profile.public = {}
        profile.public[key] = profileJSON[value.vdxfid]
      }
      delete profileJSON[value.vdxfid]
    }
  }
  //Second: Get services
  for (const [key, value] of Object.entries(ServicesJSON)) {
    // console.log(IdentityJSON[key])
    if (profileJSON[value.vdxfid]) {
      if (profile.services) {
        profile.services[key] = profileJSON[value.vdxfid]
      } else {
        profile.services = {}
        profile.services[key] = profileJSON[value.vdxfid]
      }
      delete profileJSON[value.vdxfid]
    }
  }
  //Third: Get blockchain addresses
  for (const [key, value] of Object.entries(KeysJSON)) {
    // console.log(IdentityJSON[key])
    if (profileJSON[value.vdxfid]) {
      if (profile.keys) {
        profile.keys[key] = profileJSON[value.vdxfid]
      } else {
        profile.keys = {}
        profile.keys[key] = profileJSON[value.vdxfid]
      }
      delete profileJSON[value.vdxfid]
    }
  }
  //Lastly: Get collections to display
  for (const [key, value] of Object.entries(CollectionsJSON)) {
    // console.log(IdentityJSON[key])
    if (profileJSON[value.vdxfid]) {
      if (profile.collections) {
        profile.collections[key] = profileJSON[value.vdxfid]
      } else {
        profile.collections = {}
        profile.collections[key] = profileJSON[value.vdxfid]
      }
      delete profileJSON[value.vdxfid]
    }
  }
  // for (const [key, value] of Object.entries(vdxfidList)) {
  //   if (profileJSON[value.vdxfid]) {
  //     // this is only assuming there would only be one iteration.

  //     if (key === 'content' || key === 'arweave' || key === 'web') {
  //       if (profile.collections) {
  //         profile.collections[key] = profileJSON[value.vdxfid]
  //       } else {
  //         profile['collections'] = {}
  //         profile.collections[key] = profileJSON[value.vdxfid]
  //       }
  //       delete profileJSON[value.vdxfid]
  //     } else {
  //       if (profile.public) {
  //         profile.public[key] = profileJSON[value.vdxfid]
  //       } else {
  //         profile.public = {}
  //         profile.public[key] = profileJSON[value.vdxfid]
  //       }
  //       delete profileJSON[value.vdxfid]
  //     }
  //   }
  // }

  // Object.keys(profileJSON).forEach((key) => {
  //   if (profileJSON[key].qualifiedname) {
  //     let qualifiedName = profileJSON[key].qualifiedname.split('.')
  //     qualifiedName.shift()
  //     // console.log(qualifiedName)
  //     assign(profile, qualifiedName, profileJSON[key])
  //     delete profileJSON[key]
  //   }
  // })
  // console.log('public', profile)
  // console.log('remaining', profileJSON)
  profileJSON = { ...profile }

  return profileJSON
}

export default CreateProfile
