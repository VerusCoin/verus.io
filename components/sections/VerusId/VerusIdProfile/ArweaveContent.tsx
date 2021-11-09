import { useState } from 'react'
import useSWR from 'swr'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import { PublicProfileLib } from '@/lib/VerusIdProfile/ProfileTypes'
import ArweaveComponents from './ArweaveComponents'
import { Button } from '@/components/elements'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 0 0 35px;
  border: solid 1px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 10px;
  justify-content: center;
  button {
    justify-content: center;
  }
  overflow-x: scroll;
`
// const StyledHr = styled.hr`
//   width: 90%;
// `
const StyledPostContent = styled.div<any>`
  ${(props) =>
    !props.readStatus &&
    `
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  `}
  a {
    color: #3165d4;
  }
`
// const StyledImages = styled.div`
//   border: solid 1px rgba(0, 0, 0, 0.125);
//   border-radius: 8px;
//   padding: 8px;
// `

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ArweaveContent = ({ content }: { content: PublicProfileLib }) => {
  const [readMore, setReadMore] = useState(false)
  const { data, error } = useSWR(
    `/api/arweaveContent?id=${content.txid}&type=${content.type}`,
    fetcher
  )
  if (error) return <div>Failed to load content</div>
  if (!data) return <div>Fetching content from arweave...</div>
  switch (content.type) {
    case 'post':
      // const source = data.body
      // onst mdxSource = serialize(source)

      return (
        <StyledContainer>
          {/* <DefaultText fam="geoHead" fontSz="mdlg" customMargin="0">
            Arweave Post
          </DefaultText> */}
          {/* <StyledHr /> */}
          <StyledPostContent readStatus={readMore}>
            <MDXRemote {...data} components={ArweaveComponents} />
          </StyledPostContent>
          <Button
            onClick={() => setReadMore(!readMore)}
            fontRegular
            small
            margin="8px 0 0 0 "
          >
            {readMore ? 'Read Less' : 'Read More'}
          </Button>
        </StyledContainer>
      )
    default:
      return (
        <>
          <p>unknown</p>
          <p>{content.type}</p>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </>
      )
  }
}

export default ArweaveContent
