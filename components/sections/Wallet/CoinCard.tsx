import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { CardText, Img } from '@/components/elements'
import { bgColor } from '@/styles/helpers'

const StyledCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 41px 30px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  height: 316px;
  ${media.tablet`
    border-radius: 20px;
    height: 370px;
    padding: 86px ;
    min-width: 342px;  
  `}
  ${media.desktop`
  padding: 86px 70px;
  `}
`

const StyledCoinSection = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 225px;
  img {
    margin: 12px;
  }
  ${media.tablet`
  max-width: 400px;
  `}
`

const CoinCard = ({ header, text }: { header: string; text: string }) => {
  return (
    <StyledCard>
      <CardText book fontSz="mdlg" margin="0" text={header} />
      <StyledCoinSection>
        <Img name="verus-logo" height={32} />
        <Img name="pirate-logo" height={32} />
        <Img name="komodo-logo" height={32} />
        <Img name="bitcoin-logo" height={32} />
        <Img name="ltc-logo" height={32} />
        <Img name="binance-logo" height={32} />
        <Img name="ethereum-logo" height={32} />
      </StyledCoinSection>
      <CardText regular fontSz="xs" margin="0" text={text} />
    </StyledCard>
  )
}

export default CoinCard
