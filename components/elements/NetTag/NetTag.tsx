import styled from 'styled-components'
import { DefaultText } from '@/components/elements'
import { fontSize } from '@/styles/helpers'
import { INetTag } from '@/types/elements'
import { media } from 'styled-bootstrap-grid'

const StyledNet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spaces.xs};
  p:last-child {
    text-align: center;
  }
  ${(props) => fontSize(props.fontSz)}
  ${media.tablet`
    flex-direction: row;
    p:last-child {
      text-align: left;
    }
  `}
`

const StyledLabel = styled.p<{ netType: string }>`
  ${(props: any) =>
    props.netType === 'main'
      ? `background-color: ${props.theme.colors.green}; padding: 2px 15px;`
      : `background-color: ${props.theme.colors.orange};padding: 2px 19px;`};
  color: ${(props) => props.theme.colors.white};

  border-radius: 25px;
  font-family: ${(props) => props.theme.typo.primary.family};
  ${fontSize('xs')}
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  margin-right: 31px;
`

const NetTag: React.FC<INetTag> = ({ net, fam, fontSz = 'sm', children }) => {
  return (
    <StyledNet fontSz={fontSz}>
      <StyledLabel netType={net}>{net}net</StyledLabel>
      <DefaultText fam={fam}>{children}</DefaultText>
    </StyledNet>
  )
}

export default NetTag
