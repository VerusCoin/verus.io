import styled from 'styled-components'
import { PublicProfileLib } from '@/lib/VerusIdProfile/ProfileTypes'
import { DefaultText, DefaultLink } from '@/components/elements'

// const StyledText = styled.div`
//   padding: 8px;
// `

const StyledImages = styled(DefaultText)`
  border: solid 1px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 8px;
  width: fit-content;
`

const StyledIframeContainer = styled.div`
  width: 100%;
`

const WebContent = ({ content }: { content: PublicProfileLib }) => {
  switch (content.type) {
    case 'text':
      //need to add sanitizer
      // const htmlElement = { __html: content.text.toString() }
      //need to check if has iframe or not. If not put content in DefaultText
      if (content.text.toString().includes('iframe')) {
        return (
          <StyledIframeContainer
            dangerouslySetInnerHTML={{ __html: content.text.toString() }}
          />
        )
      } else if (content.text.toString()[0] === '<') {
        //found html beginning tag, need to control ouput

        return (
          <StyledIframeContainer
            dangerouslySetInnerHTML={{ __html: content.text.toString() }}
          />
        )
      } else {
        return <DefaultText>{content.text.toString()}</DefaultText>
      }

    case 'pre':
      //need to add sanitizer
      return <DefaultText as="pre">{content.text.toString()}</DefaultText>
    case 'image':
      return (
        <StyledImages>
          <img
            src={content.url.toString()}
            alt={content.alt.toString() || content.url.toString()}
          />
        </StyledImages>
      )
    case 'url':
      if (content.url.toString().includes('http')) {
        return (
          <DefaultLink
            customColor="blue"
            external
            href={content.url.toString()}
          >
            {content.name.toString()}
          </DefaultLink>
        )
      } else {
        return (
          <div>
            Sorry, unable to process {content.type} content to display for{' '}
            {content.name}
          </div>
        )
      }
    default:
      if (content.name) {
        return (
          <div>
            Sorry, unable to process {content.type} content to display for{' '}
            {content.name}
          </div>
        )
      } else {
        return <div>Sorry, unable to process content to display</div>
      }
  }
}

export default WebContent
