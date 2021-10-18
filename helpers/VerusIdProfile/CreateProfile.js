// import FetchVdxfId from './FetchVdxfId'
//TODO: need to reverse vdxfid value instead of storing them all.

// const ObjectFinder = (
//   key: string,
//   obj: ProfileProps | Record<string, any>
// ): any => obj[key]

const CreateProfile = (profileJSON, vdxfidList) => {
  //get known objects
  for (const [key, value] of Object.entries(vdxfidList)) {
    if (profileJSON[value.vdxfid]) {
      profileJSON[key] = profileJSON[value.vdxfid]
      delete profileJSON[value.vdxfid]
    }
  }

  const accounts = {
    online: {},
    crypto: { addresses: {}, identities: {} },
  }

  Object.keys(profileJSON).forEach((key) => {
    if (profileJSON[key].qualifiedname) {
      const str = profileJSON[key].qualifiedname
      if (str.includes('accounts')) {
        const account = profileJSON[key]?.qualifiedname.split('.')[3]
        accounts.online[account] = profileJSON[key]
        delete profileJSON[key]
      }
      if (str.includes('keys')) {
        const newKey = profileJSON[key]?.qualifiedname.split('.')[2]

        if (str.includes('address')) {
          accounts.crypto.addresses[newKey] = profileJSON[key]
        } else {
          accounts.crypto.identities[newKey] = profileJSON[key]
        }
        delete profileJSON[key]
      }
    }
  })

  profileJSON = { ...profileJSON, accounts: accounts }

  return profileJSON
}

export default CreateProfile
