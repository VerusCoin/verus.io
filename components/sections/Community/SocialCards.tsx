import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { bgColor } from '@/styles/helpers'
import { Button, CardText, SVGs } from '@/components/elements'
import useTranslation from 'next-translate/useTranslation'

const StyledContainer = styled.div<any>`
  grid-column: span 2;
  justify-content: space-between;
  grid-auto-rows: auto;
  padding: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;

  ${media.tablet`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: unset;
  `}
  ${media.desktop`
    
    grid-template-columns: 1fr 1fr 1fr;
  
  `}
`

const StyledCard = styled.div<any>`
  ${bgColor('white')}
  border-radius: 8px;
  padding: 30px 10px 30px 33px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  height: 140px;
  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  > svg {
    height: 48px;
    width: 48px;
    fill: #3165d4;
  }
  > div {
    margin-left: 25px;
  }
  a {
    svg {
      height: 25px;
    }
  }
`

const SocialList: Record<string, string> = {
  discord: 'https://discord.com/invite/VRKMP2S',
  twitter: 'https://twitter.com/veruscoin',
  github: 'https://github.com/VerusCoin',
  telegram: 'https://t.me/veruscommunity',
  youtube: 'https://www.youtube.com/channel/UC_-KCHBxaDwSgNMdE3LMThg',
}

const SocialCards = () => {
  const { t } = useTranslation('contribute')
  const list = Object.keys(SocialList)
  return (
    <StyledContainer>
      {list.map((element, index) => (
        <StyledCard key={index}>
          <SVGs name={element} />
          <div>
            <CardText
              book
              align="left"
              margin="0 0 5px"
              fontSz="md"
              text={t(`footer:${element}`)}
            />
            <Button
              transparent
              svg={{ type: 'tab', rotate: false }}
              href={SocialList[element]}
              as="a"
              color="#3165d4"
              target="_blank"
            >
              {t(`links.${element}`)}
            </Button>
          </div>
        </StyledCard>
      ))}
    </StyledContainer>
  )
}

export default SocialCards

{
  /* <SmallGrid>
          <SmallCard>
            <SVGs name="discord" />
            <div>
              <CardText
                book
                align="left"
                margin="0"
                text={t(`footer:discord`)}
              />
              <Button
                transparent
                svg={{ type: 'tab', rotate: false }}
                href="#"
                as="a"
                color="#3165d4"
              >
                {t('links.discord')}
              </Button>
            </div>
          </SmallCard>
          <SmallCard>
            <SVGs name="twitter" />
            <div>
              <CardText
                book
                align="left"
                margin="0"
                text={t(`footer:twitter`)}
              />
              <Button
                transparent
                svg={{ type: 'tab', rotate: false }}
                href="#"
                as="a"
                color="#3165d4"
              >
                {t('links.twitter')}
              </Button>
            </div>
          </SmallCard>
          <SmallCard>
            <CardText text={t(`footer:github`)} />
          </SmallCard>
          <SmallCard>
            <CardText text={t(`footer:telegram`)} />
          </SmallCard>
          <SmallCard>
            <CardText text={t(`footer:youtube`)} />
          </SmallCard>
        </SmallGrid> */
}
