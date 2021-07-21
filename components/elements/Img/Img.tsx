import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ImgProp {
  name: string
  height?: number | string
}

const StyledImg = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`

const Img: React.FC<T> = ({ name, height = 100 }) => {
  return <StyledImg src={`svg/${name}.svg`} height={height} />
}

export default Img
