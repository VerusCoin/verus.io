import ArweaveContent from './ArweaveContent'

const ArweaveReSource = (content: Record<string, any>) => {
  const contentKeys: string[] = []
  Object.keys(content).map((item) => {
    if (item.includes('name')) {
      if (item.includes('content')) {
        contentKeys.push(item)
      }
    }
  })
  //now we have the keys, lets match the keys to content
  const newArweave: Record<string, any> = {}
  for (let i = 0; i < contentKeys.length; i++) {
    let type = content[contentKeys[i]].split('.')
    type = type[type.length - 1]
    newArweave[i] = {
      txid: content.content[i],
      type: type,
    }
  }
  return newArweave
}

const ProfileArweave = ({
  arweaveContent,
}: {
  arweaveContent: Record<string, any>
}) => {
  const ArweaveSources = ArweaveReSource(arweaveContent)

  return (
    <>
      {Object.keys(ArweaveSources).map((item, index) => (
        <ArweaveContent
          content={ArweaveSources[item]}
          key={`${index}_${item}`}
        />
      ))}
      {/* <pre>{JSON.stringify(ArweaveSources, null, 2)}</pre> */}
    </>
  )
}

export default ProfileArweave
