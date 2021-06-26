import React from 'react'
import styled from 'styled-components'
import { ICategoryNavigation } from '@/types/molecules'
import { media } from 'styled-bootstrap-grid'
import { DefaultHeader, DefaultLink } from '@/components/elements'

const StyledCategoryNavigation = styled.nav`
  margin: ${(props) => props.theme.spaces.xs} 0;

  ${media.desktop`
    margin: ${(props: any) => props.theme.spaces.xxl} 0;
  `}
`

const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: ${(props) => props.theme.spaces.sm} 0 0 0;
  align-items: flex-start;

  li {
    margin-bottom: ${(props) => props.theme.spaces.xs};
  }
`

const CategoryNavigation: React.FC<ICategoryNavigation> = ({
  category,
  items,
}) => {
  return (
    <StyledCategoryNavigation>
      <DefaultHeader customColor="white" as="h5">
        {category}
      </DefaultHeader>

      <StyledNavigationList>
        {items.map((item, index) => {
          return (
            <li key={`categoryNav_${index}`}>
              <DefaultLink href={item.href} customColor="grey">
                {item.name}
              </DefaultLink>
            </li>
          )
        })}
      </StyledNavigationList>
    </StyledCategoryNavigation>
  )
}

export default CategoryNavigation
