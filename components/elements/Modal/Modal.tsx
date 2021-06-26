import React, { useState, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
// import { media } from 'styled-bootstrap-grid'
import { DefaultHeader } from '@/components/elements'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
  cursor: pointer;
  min-height: 100vh;
  min-width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 0;
`
const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(245, 245, 247, 0.6);
  z-index: 500;
  pointer-events: none;
  backdrop-filter: blur(24px);
`
const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 18px;
  padding: 16px 0;
  box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 20%);
`
const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`
const StyledContent = styled.div`
  padding: 26px;
`
const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`

interface ModalType {
  isShown: boolean
  hide: () => void
  title?: string
  children: ReactNode
}

const Modal: React.FC<ModalType> = ({ isShown, hide, title, children }) => {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <StyledContent>
            <DefaultHeader>{title}</DefaultHeader>
            <Content>{children}</Content>
          </StyledContent>
        </StyledModal>
      </Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export const useModal = () => {
  const [isShown, setIsShown] = useState(false)
  const toggle = () => setIsShown(!isShown)

  return { isShown, toggle }
}

export default Modal
