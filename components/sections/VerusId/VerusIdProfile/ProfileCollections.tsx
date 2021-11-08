import { useContext } from 'react'
import { DefaultHeader } from '@/components/elements'
import { VerusIDContext } from '@/lib/Contexts'
import { StyledContainer, StyledLabel } from './ProfileStyles'
import ProfileContent from './ProfileContent'
// import ProfileArweave from './ProfileArweave'

const ProfileCollections = () => {
  const context = useContext(VerusIDContext)
  const collectionsContent = context.profileJSON.collections?.content
  // const collectionsArweave = context.profileJSON.collections?.arweave
  // const collectionWeb = context.profileJSON.collections?.web
  //Arweave content is stored in content then content[]
  //need to filter the two

  return (
    <StyledContainer>
      <StyledLabel>
        <DefaultHeader as="h5" align="left">
          Collections
        </DefaultHeader>
      </StyledLabel>
      {collectionsContent && (
        <ProfileContent profileContent={collectionsContent} />
      )}
      {/* {collectionsArweave && (
        <ProfileArweave arweaveContent={collectionsArweave} />
      )}
      <pre>{JSON.stringify(collectionsContent, null, 2)}</pre> */}
    </StyledContainer>
  )
}

export default ProfileCollections

{
  /* <ProfileContent profileContent={profileJSON.collections.content} /> */
}
