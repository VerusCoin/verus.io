import styled from 'styled-components'
import { DefaultText } from '@/components/elements'
import { fontSize } from '@/styles/helpers'
import { INetTag } from '@/types/elements'

const StyledNet = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spaces.xs};
  p {
    font-size: 18px;
  }
`

const StyledLabel = styled.span<{ netType: string }>`
  ${(props: any) =>
    props.netType === 'main'
      ? `background-color: ${props.theme.colors.green}`
      : `background-color: ${props.theme.colors.orange}`};
  color: ${(props) => props.theme.colors.white};
  padding: 2px 8px;
  border-radius: 2px;
  font-family: ${(props) => props.theme.typo.primary.family};
  ${fontSize('xs')}
  margin-bottom: ${(props) => props.theme.spaces.xxs};
  margin-right: 13px;
`

const NetTag: React.FC<INetTag> = ({ net, children }) => {
  return (
    <StyledNet>
      <DefaultText>
        <StyledLabel netType={net}>{net}net</StyledLabel>
        {children}
      </DefaultText>
    </StyledNet>
  )
}

export default NetTag
