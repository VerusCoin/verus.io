import React from 'react'
import styled from 'styled-components'
import { DefaultText } from '@/components/elements'
import { fontSize } from '@/styles/helpers'

export const StyledNet = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spaces.xs};

  ${(props: any) => fontSize(props.fontSz)};
`

const StyledLabel = styled.span<{ netType: 'main' | 'test' }>`
  ${(props: any) =>
    props.netType === 'main'
      ? `background-color: ${props.theme.colors.green}; padding: 5px 15px;`
      : `background-color: ${props.theme.colors.orange};padding: 5px 19px;`};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.text && 'margin-right: 31px;'}

  border-radius: 25px;
  font-family: ${(props) => props.theme.typo.primary.family};
  ${fontSize('xs')}
  margin-bottom: ${(props) => props.theme.spaces.xxs};
`

export interface INetTag {
  net: 'main' | 'test'
  fam?: string
  fontSz?:
    | 'xxl'
    | 'xl'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs'
    | 'menu'
    | 'menuXs'
    | 'button'
  text?: string
}

const NetTag = ({ net, fam, fontSz = 'sm', text }: INetTag) => {
  return (
    <StyledNet fontSz={fontSz}>
      <p>
        <StyledLabel netType={net}>{net}net</StyledLabel>
      </p>

      <DefaultText fam={fam}>{text}</DefaultText>
    </StyledNet>
  )
}

export default NetTag
