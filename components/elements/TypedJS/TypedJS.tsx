import React from 'react'
import styled from 'styled-components'
// import Typed from 'react-typed'
import { ITypedJS } from '@/types/elements'

const StyledTyped = styled.div`
  display: inline;

  span {
    margin-top: ${(props) => props.theme.spaces.sm};
    display: inline;
    justify-content: center;
    color: ${(props) => props.theme.colors.green};
    height: 30px;
  }
`

const TypedJS: React.FC<ITypedJS> = ({ strings }) => {
  return (
    <StyledTyped>
      {strings}
      {/* <Typed
        strings={strings}
        typeSpeed={125}
        backSpeed={80}
        backDelay={1000}
        showCursor={false}
        smartBackspace={false}
        loop={true}
      /> */}
    </StyledTyped>
  )
}

export default TypedJS
