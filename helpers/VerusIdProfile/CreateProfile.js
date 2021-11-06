// import FetchVdxfId from './FetchVdxfId'
//TODO: need to reverse vdxfid value instead of storing them all.

// const ObjectFinder = (
//   key: string,
//   obj: ProfileProps | Record<string, any>
// ): any => obj[key]

const assign = (obj, keyPath, value) => {
  let lastKeyIndex = keyPath.length - 1
  for (var i = 0; i < lastKeyIndex; ++i) {
    let key = keyPath[i]
    if (!(key in obj)) {
      obj[key] = {}
    }
    obj = obj[key]
  }
  obj[keyPath[lastKeyIndex]] = value
}

const CreateProfile = (profileJSON, vdxfidList) => {
  // console.log(profileJSON)
  let profile = {}

  for (const [key, value] of Object.entries(vdxfidList)) {
    if (profileJSON[value.vdxfid]) {
      // this is only assuming there would only be one iteration.

      if (key === 'content' || key === 'arweave' || key === 'web') {
        if (profile.collections) {
          profile.collections[key] = profileJSON[value.vdxfid]
        } else {
          profile['collections'] = {}
          profile.collections[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      } else {
        if (profile.public) {
          profile.public[key] = profileJSON[value.vdxfid]
        } else {
          profile.public = {}
          profile.public[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      }
    }
  }

  Object.keys(profileJSON).forEach((key) => {
    if (profileJSON[key].qualifiedname) {
      let qualifiedName = profileJSON[key].qualifiedname.split('.')
      qualifiedName.shift()
      // console.log(qualifiedName)
      assign(profile, qualifiedName, profileJSON[key])
      delete profileJSON[key]
    }
  })

  profileJSON = { ...profile }

  return profileJSON
}

export default CreateProfile
