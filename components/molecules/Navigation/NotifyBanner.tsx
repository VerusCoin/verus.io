import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { media } from 'styled-bootstrap-grid'
import { fontSize, bgColor } from '@/styles/helpers'
import { DefaultText, SVGs } from '@/components/elements'
import { useNotifyContext } from '@/lib/Contexts'

const StyledNotification = styled.div<any>`
  ${bgColor('green')};
  display: ${(props) => (props.notify ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 42px;
  z-index: 19999;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    width: fit-content;
  }
`

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin: 0;
  background: none;
  :hover {
    cursor: pointer;
  }
  svg {
    height: 26px;
    path:first-child {
      fill: white;
    }
    path:last-child {
      fill: white;
    }
    circle {
      fill: none;
    }
    :hover {
      path:first-child {
        fill: black;
      }
      path:last-child {
        fill: black;
      }
    }
  }
`
const StyledReadMore = styled.button`
  width: fit-content;
  padding: 4px 12px;
  border: solid 1px white;
  background: transparent;
  border-radius: 12px;
  color: white;
  text-decoration: none;
  ${fontSize('xxs')}
  &:hover {
    background: rgb(255, 255, 255, 0.17);
  }
`
const StyledActivation = styled(DefaultText)`
  display: none;
  border-radius: 12px;
  ${bgColor('white')}
  padding: 4px 12px;
  margin: 0 7px;
  ${media.tablet`
    display:block;
  `}
`

const NotifyBanner = () => {
  const { t } = useTranslation('common')
  const { notify, setNotify, blockString } = useNotifyContext()

  return (
    <StyledNotification notify={notify}>
      <DefaultText
        fontSz="xxs"
        customColor="white"
        align="center"
        customMargin="0 21px 0 0"
      >
        {t('upgradeComing')}
      </DefaultText>
      <StyledReadMore
        as="a"
        href={process.env.NEXT_PUBLIC_NOTIFY_BANNER_LINK}
        target="_blank"
        rel="noreferrer"
      >
        {t('upgradereadMore')}
      </StyledReadMore>
      <StyledActivation fontSz="xxs" customColor="green" align="center">
        {t(`upgradeCounter`, { count: blockString })}
      </StyledActivation>
      <CloseButton onClick={() => setNotify(false)}>
        <SVGs name="close" />
      </CloseButton>
    </StyledNotification>
  )
}

export default NotifyBanner
