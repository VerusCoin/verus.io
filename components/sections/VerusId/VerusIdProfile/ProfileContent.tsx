import styled from 'styled-components'
// import { Button, Img } from '@/components/elements'
// import { media } from 'styled-bootstrap-grid'
// import { fontFam, fontSize } from '@/styles/helpers'
import { PublicProfileLib } from '@/lib/VerusIdProfile/ProfileTypes'
import WebContent from './WebContent'
import ArweaveContent from './ArweaveContent'
import GroupContent from '@/lib/VerusIdProfile/GroupContent'

const StyledContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
`

const ProfileContent = ({
  profileContent,
}: {
  profileContent: Record<string, PublicProfileLib[]>
}) => {
  //bringing in content array

  if (profileContent.content) {
    const { arweave, web, unknown } = GroupContent(profileContent.content)
    return (
      <StyledContainer>
        {arweave.length > 0 &&
          arweave.map((element, index) => {
            return <ArweaveContent content={element} key={index} />
          })}

        {web.length > 0 &&
          web.map((element, index) => {
            return <WebContent content={element} key={index} />
          })}
        {unknown.length > 0 && (
          <div>Sorry, unable to process content to display</div>
        )}
      </StyledContainer>
    )
  } else {
    return null
  }
}

export default ProfileContent
