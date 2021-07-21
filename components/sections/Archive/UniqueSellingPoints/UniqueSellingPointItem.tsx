import React from 'react'
import styled from 'styled-components'
import { IUSP } from '@/types/homepage'
import { DefaultText, DefaultHeader } from '@/components/elements'

const StyledSquare = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

const StyledUniqueSellingPointItem = styled.div`
  background-color: ${(props) =>
    (props.color === 'green' && `${props.theme.colors.green}`) ||
    (props.color === 'blue' && `${props.theme.colors.blue.primary}`) ||
    (props.color === 'darkblue' && `${props.theme.colors.blue.secondary}`) ||
    (props.color === 'white' && `${props.theme.colors.white}`)};

  color: ${(props) =>
    props.color === 'white'
      ? props.theme.colors.black
      : props.theme.colors.white};
`

const UniqueSellingPointItem: React.FC<IUSP> = ({ color, title, text }) => {
  return (
    <StyledUniqueSellingPointItem color={color}>
      <StyledSquare>
        <div>
          <DefaultHeader as="h4" customColor={color !== 'white' ? 'white' : ''}>
            {title}
          </DefaultHeader>
          <DefaultText>{text}</DefaultText>
        </div>
      </StyledSquare>
    </StyledUniqueSellingPointItem>
  )
}

export default UniqueSellingPointItem
