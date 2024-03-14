//Import known vdxfid JSONs for profile
//TODO: need a way to either reverse vdxfid or
// a vdxfid library needs to be created
import {
  CollectionsJSON,
  KeysJSON,
  IdentityJSON,
  ServicesJSON,
} from '@/data/vdxfid'
//TODO: need to reverse vdxfid value instead of storing them all.

const CreateProfile = (profileJSON) => {
  let profile = {}
  //First: Get identity information
  try {
    for (const [key, value] of Object.entries(IdentityJSON)) {
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

    profileJSON = { ...profile }

    return profileJSON
  } catch (error) {
    console.error(error)
    return profile
  }
}

export default CreateProfile
