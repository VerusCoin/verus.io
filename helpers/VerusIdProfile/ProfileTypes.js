import cache from 'memory-cache'
import FetchVdxfId from './FetchVdxfId'
// const Min15 = 900000 //15 minutes
const Hour12 = 43200000 //12 Hours
// const Hour24 = 86400000 //24 hours
export const cacheProfiles = '@Profiles'

export const ProfileLib = {
  profilesFrom: {
    arweave: 'vrsc::system.collections.arweave',
    web: 'vrsc::system.collections.web',
    content: 'vrsc::system.collections.content',
  },
  arweaveContent: {
    reference: 'vrsc::system.collections.content.reference.arweave',
    post: 'vrsc::system.collections.content.arweave.post',
  },
  webContent: {
    reference: 'vrsc::system.collections.content.reference.web',
    post: 'vrsc::system.collections.content.web.post',
    image: 'vrsc::system.collections.content.web.image',
    text: 'vrsc::system.collections.content.web.text',
    pre: 'vrsc::system.collections.content.web.pre',
    url: 'vrsc::system.collections.content.web.url',
    rss: 'vrsc::system.collections.content.web.rss',
  },
  profile: {
    public: 'vrsc::system.identity.profile.public',
    settings: 'vrsc::system.identity.profile.settings',
    about: 'vrsc::system.identity.profile.about',
    avatar: 'vrsc::system.identity.profile.avatar',
    background: 'vrsc::system.identity.profile.background',
    header: 'vrsc::system.identity.profile.header',
    image: 'vrsc::system.identity.profile.image',
  },
  controller: 'vrsc::system.proofs.controller',
}
// interface inputProps {
//   [key: string]: string | number | inputProps | []
// }
// TODO: need to see if can be converted to Typescript
export const BuildVdxfidCache = async () => {
  // NOTE: Comment below for master branch.
  // cache.del(cacheProfiles)
  if (!cache.get(cacheProfiles)) {
    const input = {}
    for (const [key, value] of Object.entries(ProfileLib)) {
      if (Object.prototype.toString.call(value) === '[object Object]') {
        const input1 = {}
        for (const [key1, value1] of Object.entries(value)) {
          const data = await FetchVdxfId(value1)
          input1[key1] = {
            vdxfid: data.vdxfid,
            hash160result: data.hash160result,
          }
        }

        input[key] = input1
      } else {
        input[key] = value
      }
    }
    cache.put(cacheProfiles, input, Hour12)
    return input
  } else {
    return cache.get(cacheProfiles)
  }
}

export default BuildVdxfidCache
