import { MainLayout, Grid } from '@/components/layouts'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor, fontFam, fontSize } from '@/styles/helpers'
import React from 'react'

const title = ''
const description = ''

const EthBridgeTopCard = styled.div`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 80px;
  justify-content: space-between;

  display: flex;
  grid-column: span 2;
  height: 520px;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
  `}
`

const EthTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    height: fit-content;
    width: 100%;
  }
`

const StyledBadgeRow = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  span {
    ${fontFam('geoHead')}
    font-size: 14px;
    color: #969696;
  }
  ${media.desktop`
    flex-direction: row;
  `}
`

const PreBadge = styled.p`
  ${fontFam('geoHead')}
  width: 125px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #008f06;
  font-size: 12px;
  diplay: flex;

  padding: 5px 7px;
  text-align: center;
  color: white;
`

const DateP = styled.p`
  ${fontFam('geoHead')}
  margin: 0 5px;
`

const BlueBarTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const BlueBarTextDiv = styled.div`
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid #3165d4;
  background: rgba(49, 101, 212, 0.08);
  color: #3165d4;
  ${fontFam('geoReg')}
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const BlueBarTopBar = styled.div`
  color: rgba(49, 101, 212, 0.59);
  text-align: right;
  ${fontFam('gepHead')}
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  justify-conent: end;
`
const StyledQuestionTip = styled.div`
  text-align: right;
  position: relative;
`

const Tooltip = styled.div<any>`
  ${fontFam('geoReg')}
  ${fontSize('xxs')}
  position: absolute;
  bottom: 118%;

  color: #fff;
  background-color: #3165d4;

  padding: 8px 8px;
  border-radius: 8px;
  display: none;
  visibility: hidden;
  ${StyledQuestionTip}:hover & {
    display: block;
    visibility: visible;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 97%; /* At the bottom of the tooltip */
    right: 50%;
    margin-left: -15px;
    border-width: 10px;
    border-style: solid;
    border-color: #3165d4 transparent transparent transparent;
  }
`

const EthBridge = () => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        <Grid>
          <EthBridgeTopCard>
            <EthTopLeft>
              <StyledBadgeRow style={{}}>
                <PreBadge>IN PRECONVERSION</PreBadge>
                <DateP>6d, 21h, 25m left</DateP>
                <span>Launch block: 2,750,000</span>
              </StyledBadgeRow>
              <BlueBarTextWrapper>
                <BlueBarTopBar>
                  Supply
                  <StyledQuestionTip>
                    ?
                    <Tooltip />
                  </StyledQuestionTip>
                </BlueBarTopBar>
                <BlueBarTextDiv>test</BlueBarTextDiv>
              </BlueBarTextWrapper>
            </EthTopLeft>
            <EthTopLeft>right</EthTopLeft>
          </EthBridgeTopCard>
        </Grid>
      </MainLayout>
    </>
  )
}

export default EthBridge
