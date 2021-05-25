import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row } from 'styled-bootstrap-grid'
import { DefaultText, DefaultHeader, SVGs } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import { IPaper } from '@/types/paperspage'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const StyledContainer = styled(Container)`
  ${spacer('xxl')}
`

const StyledPageList = styled.div`
  margin-bottom: 100px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #838383;
  }
  h3 {
    font-weight: bold;
    max-width: 350px;
  }
  p {
    color: #838383;
  }
`

const StyledPDF = styled.div`
  margin-right: 44px;
  box-shadow: 4px 4px 16px 0px #00000033;
`

const StyledDownload = styled.a<any>`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-top: ${(props) => props.theme.spaces.sm};
  color: ${(props) => props.theme.colors.blue.primary};
  margin-left: ${(props) => props.theme.spaces.md};
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
`
const PaperList: React.FC<IPaper> = ({ file, title, heading, writtenBy }) => {
  const [numPages, setNumPages] = useState<null | number>(null)
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  const nameArray = Array.prototype.slice.call(writtenBy)

  return (
    <StyledContainer>
      <Row>
        <StyledPDF>
          <Document
            file={`/papers/${file}`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              height={259}
              renderAnnotationLayer="false"
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
            {writtenBy.count > 0 ? (
              <DefaultText>{nameArray.join(', ')}</DefaultText>
            ) : (
              <DefaultText>{writtenBy}</DefaultText>
            )}
          </StyledWrittenBy>
        </div>
      </Row>
      <Row>
        <StyledDownload href={`/papers/${file}`} download>
          <StyledSVG>
            <SVGs name="download" />
          </StyledSVG>
          <DefaultText>Download PDF</DefaultText>
        </StyledDownload>
      </Row>
    </StyledContainer>
  )
}

export default PaperList
