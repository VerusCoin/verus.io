/* eslint-disable  @typescript-eslint/no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { IBlogItem } from 'types/homepage'
import Image from 'next/image'
import dayjs from 'dayjs'
import { DefaultHeader, DefaultText } from '@/components/elements'
import { media } from 'styled-bootstrap-grid'

const StyledImage = styled.div`
  margin-bottom: ${(props) => props.theme.spaces.xs};

  ${media.desktop`
    margin-bottom: 0;
  `}
`

const StyledBlogItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 390px;
  margin-right: auto;
  margin-left: auto;
  border-radius: ${(props) => props.theme.borders.sm};
  box-shadow: 0 0 26px -4px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: ${(props) => props.theme.colors.black.primary};
  padding: ${(props) => props.theme.spaces.custom.gutter};
  margin-bottom: ${(props) => props.theme.spaces.sm};
  transition: box-shadow ${(props) => props.theme.transitions.regular};

  &:hover {
    box-shadow: 0 0 26px -4px rgba(0, 0, 0, 0.25);
  }

  ${media.desktop`
    min-height: 350px;
  `}
`

const BlogItem = ({ thumbnail, title, pubDate, link }: IBlogItem) => {
  return (
    <StyledBlogItem href={link} target="_blank" rel="noreferrer">
      <StyledImage>
        <Image
          src="/images/blog-example.png"
          alt={thumbnail}
          width={360}
          height={185}
        />
      </StyledImage>

      <DefaultHeader
        as="h4"
        headerStyle="display:-webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;"
      >
        {title}
      </DefaultHeader>

      <DefaultText>{dayjs(pubDate).format('DD MMM YYYY')}</DefaultText>
    </StyledBlogItem>
  )
}

export default BlogItem
