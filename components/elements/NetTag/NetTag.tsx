import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { DefaultText } from '@/components/elements'
import { fontSize } from '@/styles/helpers'

export const StyledNet = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props: any) =>
    (props.unMargin && '0') || props.theme.spaces.xs};

  ${(props: any) => fontSize(props.fontSz)};
  ${media.tablet`
    margin-bottom: 0;
  `}
`

const StyledLabel = styled.span<any>`
  ${(props: any) =>
    props.netType === 'main'
      ? `background-color: ${props.theme.colors.green}; padding: 5px 15px;`
      : props.netType === 'test' || props.netType === 'pretest'
      ? `background-color: ${props.theme.colors.orange}; padding: 5px 19px;`
      : `background-color: #BEBEBE; padding: 5px 19px;`}
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.text && 'margin-right: 31px;'}

  border-radius: 25px;
  font-family: ${(props) => props.theme.typo.primary.family};
  ${fontSize('xs')}
`

export interface INetTag {
  net: 'main' | 'test' | 'plan' | 'pretest'
  fam?: string
  fontSz?:
    | 'xxl'
    | 'xl'
    | 'lg'
    | 'mdlg'
    | 'md'
    | 'sm'
    | 'xs'
    | 'menu'
    | 'menuXs'
    | 'button'
  text?: string
  unMargin?: boolean
}

const NetTag = ({ net, fam, fontSz = 'sm', text, unMargin }: INetTag) => {
  const { t } = useTranslation('common')

  return (
    <StyledNet fontSz={fontSz} unMargin={unMargin}>
      <p>
        {net === 'plan' ? (
          <StyledLabel netType={net}>{t('planned')}</StyledLabel>
        ) : (
          <StyledLabel netType={net}>{t(`${net}net`)}</StyledLabel>
        )}
      </p>
      {text && <DefaultText fam={fam}>{text}</DefaultText>}
    </StyledNet>
  )
}

export default NetTag
