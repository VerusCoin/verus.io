import React from 'react'
import styled from 'styled-components'

import { IBlog } from '@/types/homepage'
import { Row, Col, Container } from 'styled-bootstrap-grid'
import parse from 'html-react-parser'
import { Button, DefaultHeader } from '@/components/elements'
import BlogItem from './BlogItem'
import { spacer } from '@/styles/helpers'

const StyledBlogItem = styled.div`
  ${spacer('xl')}

  h4 {
    margin-bottom: ${(props) => props.theme.spaces.md};
  }
`
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spaces.md};
`

const Blog = ({ title, data, link }: IBlog) => {
  return (
    <StyledBlogItem>
      <Container>
        <Row justifyContent="center">
          <Col col={12}>
            <DefaultHeader align="center" as="h4">
              {parse(title)}
            </DefaultHeader>

            <Row>
              {data.map((item, index) => {
                return (
                  <Col key={`blog_${index}`} col={12} md={6} lg={4}>
                    <BlogItem {...item} />
                  </Col>
                )
              })}
            </Row>
            {link && (
              <StyledButtonContainer>
                <Button
                  transparent
                  as="a"
                  wide
                  color="#3165d4"
                  svg={{ type: 'tab', rotate: false }}
                  href="https://medium.com/veruscoin"
                  target="_blank"
                >
                  Go to Blog
                </Button>
              </StyledButtonContainer>
            )}
          </Col>
        </Row>
      </Container>
    </StyledBlogItem>
  )
}

export default Blog
