import { PublicProfileLib } from './ProfileTypes'

const GroupContent = (profileContent: PublicProfileLib[]) => {
  const arweave: PublicProfileLib[] = []
  const web: PublicProfileLib[] = []
  const unknown: PublicProfileLib[] = []
  profileContent.map((content) => {
    const str: string | string[] = content.qualifiedname.toString().split('.')

    if (str[str.length - 2] === 'arweave') {
      content.type = str[str.length - 1]
      arweave.push(content)
    } else if (str[str.length - 2] === 'web') {
      content.type = str[str.length - 1]
      web.push(content)
    } else {
      content.type = str[str.length - 1]
      unknown.push(content)
    }
  })

  return { arweave: arweave, web: web, unknown: unknown }
}

export default GroupContent
