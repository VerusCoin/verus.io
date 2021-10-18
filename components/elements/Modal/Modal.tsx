import React, { useState, ReactNode, createRef, useEffect } from 'react'
import { media } from 'styled-bootstrap-grid'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import { DefaultHeader, SVGs, CardText } from '@/components/elements'

const StyledModal = styled.div`
  padding: 0;
  position: fixed;
  z-index: 10000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: none;
  --width: 100%;
  --inner-padding: 30px;
  --outer-padding: 0;
  --blur: 0;
  cursor: pointer;
  ${media.tablet`
    --width: 687px;
    --inner-padding: 86px;
    --outer-padding: 80px;
    --duration: 0.75;
    --blur: 24;
  `}
  ${media.giant`
    quotes: "“" "”";
    --width: 1020px;
    --inner-padding: 130px;
    --outer-padding: 93px;
  `}
`

const Backdrop = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(245, 245, 247, 0.6);
  backdrop-filter: blur(24px);
`

const ContentContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  vertical-align: middle;
  width: auto;
  height: auto;
`
const Wrapper = styled.div`
  width: 100%;
  padding: var(--outer-padding) 0;
  border-radius: 18px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    width: auto;
  `}
`

const ContentPadding = styled.div`
  padding: 0;
  max-width: initial;
  border-radius: 0;
  background: none;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column-reverse;
  flex-basis: initial;
  box-sizing: border-box;
`

const ModalContent = styled.div`
  border-radius: 0;
  background: white;
  overflow: hidden;
  width: var(--width);
  transform: translateZ(0);
  height: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  cursor: initial;
  ${media.tablet`
    min-height: auto;
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 18px;
    box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 20%);
  `}
`

const StyledCardContent = styled.div`
  padding: 93px 27px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  h2 {
    margin-bottom: 40px;
  }
  ${media.tablet`
    padding: 147px 90px ;
    box-sizing: border-box;
    margin-top: calc(-1 * 24px);
  `}
  ${media.giant`
    padding: 154px 160px;
  `}
`
const ModalClose = styled.div`
  position: sticky;
  height: 0;
  top: var(--outer-padding);
`

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  background: none;
  :hover {
    cursor: pointer;
  }
  svg {
    height: 24px;
    :hover {
      path:first-child {
        fill: ${(props) => props.theme.colors.blue.primary};
      }
      path:last-child {
        fill: white;
      }
      circle {
        fill: ${(props) => props.theme.colors.blue.primary};
      }
    }
  }
  ${media.tablet`
    svg {
      height: 32px;
    }
  `}
  ${media.desktop`
    svg {
      height: 42px;
    }
  `}
`

interface ModalType {
  isShown: boolean
  hide: () => void
  title?: string
  text?: string[] | string
  children?: ReactNode
}

const Modal = ({ isShown, hide, title, children, text }: ModalType) => {
  const nodeRef = createRef<HTMLDivElement>()
  useEffect(() => {
    const handleBodyClick = (e: any) => {
      if (nodeRef.current === e.target) {
        hide()
      }
    }
    document.addEventListener('mousedown', handleBodyClick)
    return () => {
      document.removeEventListener('mousedown', handleBodyClick)
    }
  })
  useEffect(() => {
    const targetElement = document.querySelector(ModalContent) as HTMLElement
    if (isShown) {
      disableBodyScroll(targetElement)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [isShown])
  const modal = (
    <>
      <StyledModal>
        <Backdrop />
        <ContentContainer ref={nodeRef}>
          <Wrapper>
            <ContentPadding>
              <ModalContent>
                <StyledCardContent>
                  <DefaultHeader>{title}</DefaultHeader>

                  {typeof text === 'object' &&
                    text.map((element, index) => (
                      <CardText
                        key={index}
                        fontSz="modal"
                        color="#676767"
                        align="left"
                        text={element}
                      />
                    ))}

                  {typeof text === 'string' && (
                    <CardText
                      fontSz="modal"
                      color="#676767"
                      align="left"
                      text={text}
                    />
                  )}

                  {children}
                </StyledCardContent>
              </ModalContent>
              <ModalClose>
                <CloseButton onClick={hide}>
                  <SVGs name="close" />
                </CloseButton>
              </ModalClose>
            </ContentPadding>
          </Wrapper>
        </ContentContainer>
      </StyledModal>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export const useModal = () => {
  const [isShown, setIsShown] = useState(false)
  const toggle = () => {
    setIsShown(!isShown)
  }

  return { isShown, toggle }
}

export default Modal
