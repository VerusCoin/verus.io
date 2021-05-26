import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, media } from 'styled-bootstrap-grid'
import { DefaultText, DefaultHeader, SVGs } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import { IPaper } from '@/types/paperspage'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const StyledContainer = styled(Container)`
  ${spacer('xxl')}
  text-align: center;
  ${media.tablet`text-align:left;`}
`

const StyledContainerRow = styled(Row)`
  justify-content: center;
  ${media.tablet`
    justify-content: start;
  `}
`

const StyledPageList = styled.div`
  ${media.tablet`margin-bottom: 123px; `}
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #838383;
  }
  h3 {
    font-weight: bold;
    ${media.tablet`max-width: 350px;`}
  }
  p {
    color: #838383;
  }
`

const StyledPDF = styled.div`
  margin-bottom: 25px;
  box-shadow: 4px 4px 16px 0px #00000033;

  ${media.tablet`
  margin-right: 44px;
  margin-bottom: 0;
  `}
`

const StyledDownload = styled.a<any>`
  ${media.tablet`
    margin-left: ${(props: any) => props.theme.spaces.md};
    margin-top: ${(props: any) => props.theme.spaces.sm};
  `}
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  color: ${(props) => props.theme.colors.blue.primary};
  p {
    font-weight: bold;
  }
`
const StyledSVG = styled.div`
  margin-bottom: 0;
  margin-right: 11px;
`
const StyledWrittenBy = styled.div`
  p:first-child {
    color: #838383;
  }
  ${media.phone`
    p:first-child{text-align:left;}
  `}
`
const PaperList: React.FC<IPaper> = ({ file, title, heading, writtenBy }) => {
  const [numPages, setNumPages] = useState<null | number>(null)
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <StyledContainer>
      <StyledContainerRow>
        <StyledPDF>
          <Document
            file={`/papers/${file}`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              height={300}
              renderAnnotationLayer={false}
              renderMode="svg"
            />
          </Document>
        </StyledPDF>
        <div>
          <StyledPageList>
            <DefaultHeader as="h2">{title}</DefaultHeader>
            <DefaultHeader as="h3">{heading}</DefaultHeader>
            <DefaultText>{numPages} pages</DefaultText>
          </StyledPageList>
          <StyledWrittenBy>
            <DefaultText>Written by:</DefaultText>
            {Array.isArray(writtenBy) ? (
              <DefaultText>
                {Array.prototype.slice.call(writtenBy).join(', ')}
              </DefaultText>
            ) : (
              <DefaultText>{writtenBy}</DefaultText>
            )}
          </StyledWrittenBy>
        </div>
      </StyledContainerRow>
      <StyledContainerRow>
        <StyledDownload href={`/papers/${file}`} download>
          <StyledSVG>
            <SVGs name="download" />
          </StyledSVG>
          <DefaultText>Download PDF</DefaultText>
        </StyledDownload>
      </StyledContainerRow>
    </StyledContainer>
  )
}

export default PaperList
