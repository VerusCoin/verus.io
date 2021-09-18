import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img<any>`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  ${(props) => props?.styles}
  height: ${(props) => props.height}px;
`
interface ImgProp {
  name: string | undefined
  height?: number | string
  styles?: string
}

const Img = ({ name, height = 100, styles }: ImgProp) => {
  return (
    <StyledImg
      src={`/svg/${name}.svg`}
      height={height}
      styles={styles}
      alt=""
    />
  )
}

export default Img
