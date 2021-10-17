import styled from 'styled-components'
import { PublicProfileLib } from '@/helpers/VerusIdProfile/ProfileTypes'

// const StyledText = styled.div`
//   padding: 8px;
// `

const StyledImages = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 8px;
`

const WebContent = ({ content }: { content: PublicProfileLib }) => {
  switch (content.type) {
    case 'text':
      //need to add sanitizer
      // const htmlElement = { __html: content.text.toString() }
      return (
        <div dangerouslySetInnerHTML={{ __html: content.text.toString() }} />
      )
    case 'pre':
      //need to add sanitizer
      // const preElement = {  content.text.toString() }
      return (
        <pre dangerouslySetInnerHTML={{ __html: content.text.toString() }} />
      )
    case 'image':
      return (
        <StyledImages>
          <img
            src={content.url.toString()}
            alt={content.alt.toString() || content.url.toString()}
          />
        </StyledImages>
      )
    default:
      return (
        <>
          <div>Sorry, unable to process content to display</div>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </>
      )
  }
}

export default WebContent
