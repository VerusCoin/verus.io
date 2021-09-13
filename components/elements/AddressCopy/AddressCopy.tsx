import { useState } from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import useTranslation from 'next-translate/useTranslation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button, DefaultText, Img } from '@/components/elements'
import { bgColor, fontFam, fontSize } from '@/styles/helpers'

const StyledAddress = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  justify-content: center;
  display: inline-flex;
  flex-wrap: wrap;

  p {
    font-size: 12px;
  }
  ${media.tablet`
    p{font-size: inherit;}
  `}
`

const StyledAddressBox = styled.div`
  ${bgColor('#F3F3F3')}
  border: solid 1px;
  margin-right: 20px;
  padding: 15px;
  border-radius: px;
`

const TooltipBox = styled.div<any>`
  ${fontFam('geoReg')}
  ${fontSize('xxs')}
  position: absolute;
  top: calc(100% - 77px);
  left: calc(100% - 30px);
  color: #fff;
  background-color: #3165d4;
  visibility: ${(props: any) => (props.copyStat ? 'visible' : 'hidden')};
  padding: 8px 8px;
  border-radius: 8px;
  opacity: ${(props: any) => (props.copyStat ? '1' : '0')};
  transition: visibility 2.5s, opacity 1s ease-in-out;
  &:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -15px;
    border-width: 10px;
    border-style: solid;
    border-color: #3165d4 transparent transparent transparent;
  }
`
const AddressCopy = ({ text }: { text: string }) => {
  const { t } = useTranslation('common')
  const [copy, setCopy] = useState(false)
  return (
    <StyledAddress>
      <StyledAddressBox>
        <DefaultText>{text}</DefaultText>
      </StyledAddressBox>
      <CopyToClipboard text={text} onCopy={() => setCopy(true)}>
        <Button transparent>
          <TooltipBox copyStat={copy}>{t('copied')}</TooltipBox>
          <Img name="copy" height={21} />
        </Button>
      </CopyToClipboard>
    </StyledAddress>
  )
}

export default AddressCopy
