import cache from 'memory-cache'
import FetchVdxfId from './FetchVdxfId'
import { Hour12 } from '../clocks'
import { ProfileLib } from './ProfileTypes'

export const cacheProfiles = '@profiles'
let init = 1
const BuildVdxfid = async () => {
  // NOTE: Comment below for master branch.
  // cache.clear()
  if (init === 1) {
    cache.del(cacheProfiles)
    init = 0
  }
  // cache.del(cacheProfiles)
  if (!cache.get(cacheProfiles)) {
    const input: Record<string, any> = {}
    for (const [key, value] of Object.entries(ProfileLib)) {
      const data = await FetchVdxfId(value)
      input[key] = { ...data }
    }
    cache.put(cacheProfiles, input, Hour12)
    return input
  } else {
    return cache.get(cacheProfiles)
  }
}

export default BuildVdxfid
