import styled from 'styled-components'
// import { Button, Img } from '@/components/elements'
// import { media } from 'styled-bootstrap-grid'
// import { fontFam, fontSize } from '@/styles/helpers'
import { PublicProfileLib } from '@/helpers/VerusIdProfile/ProfileTypes'
import WebContent from './WebContent'
import ArweaveContent from './ArweaveContent'
import GroupContent from '@/helpers/VerusIdProfile/GroupContent'

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 12px 10px;
  padding: 8px 32px;

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
  //need to filter each one but group those that are arweave and those that are web

  //one content at a time, so filter out requirments and then fetch them. with the appropriate return
  //first location of content
  // let str: string | string[] = profileContent.qualifiedname
  //   .toString()
  //   .split('.')
  // const strLength = str.length
  //ether getting arweave or post for now
  //second if arweave else web
  // if (str[strLength - 2] === 'arweave') {

  // } else {
  //   return <WebContent content={profileContent} />
  // }
}

export default ProfileContent
