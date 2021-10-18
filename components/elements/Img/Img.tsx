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
  logo?: boolean
  className?: string
}

const Img = ({ name, height = 100, styles, logo, className }: ImgProp) => {
  let srcLocation = ''
  if (logo) {
    srcLocation = `/logos/${name}.svg`
  } else {
    srcLocation = `/svg/${name}.svg`
  }
  return (
    <StyledImg
      className={className}
      src={srcLocation}
      height={height}
      styles={styles}
      alt=""
    />
  )
}

export default Img
