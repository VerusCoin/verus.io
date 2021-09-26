import React from 'react'
import styled from 'styled-components'

import { IBlog } from '@/types/homepage'
import { Row, Col, Container } from 'styled-bootstrap-grid'
import parse from 'html-react-parser'
import { Button, DefaultHeader } from '@/components/elements'
import BlogItem from './BlogItem'
import { spacer } from '@/styles/helpers'

const StyledBlogItem = styled.div`
  ${spacer('xxl')}

  h2 {
    margin-bottom: ${(props) => props.theme.spaces.lg};
  }
`
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spaces.lg};
`

const Blog = ({ title, data }: IBlog) => {
  return (
    <StyledBlogItem>
      <Container>
        <Row justifyContent="center">
          <Col col={12}>
            <DefaultHeader align="center">{parse(title)}</DefaultHeader>

            <Row>
              {data.map((item, index) => {
                return (
                  <Col key={`blog_${index}`} col={12} md={6} lg={4}>
                    <BlogItem {...item} />
                  </Col>
                )
              })}
            </Row>

            <StyledButtonContainer>
              <Button transparent wide svg={{ type: 'arrow', rotate: false }}>
                Go to Blog
              </Button>
            </StyledButtonContainer>
          </Col>
        </Row>
      </Container>
    </StyledBlogItem>
  )
}

export default Blog
