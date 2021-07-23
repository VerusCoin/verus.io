import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`
interface ImgProp {
  name: string | undefined
  height?: number | string
}

const Img = ({ name, height = 100 }: ImgProp) => {
  return <StyledImg src={`svg/${name}.svg`} height={height} />
}

export default Img
