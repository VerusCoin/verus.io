import React from 'react'
import styled from 'styled-components'
import { IHamburger } from '@/types/molecules'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { StyledHamburgerMenu } from './HamburgerMenu'

type HamburgerProps = {
  openMenu: boolean
}

const StyledHamburger = styled.div<HamburgerProps>`
  position: absolute;
  right: ${(props) => props.theme.spaces.custom.gutter};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 20;

  div {
    width: 32px;
    height: 3px;
    background: ${(props) => props.theme.colors.black.primary};
    position: relative;
    transform-origin: 1px;
    transition: transform 0.3s linear;

    &:first-child {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ openMenu }) => (openMenu ? '0' : '1')};
      transform: ${({ openMenu }) =>
        openMenu ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Hamburger: React.FC<IHamburger> = ({ openMenu, setOpenMenu }) => {
  const handleClick = () => {
    const targetElement = document.querySelector(
      StyledHamburgerMenu
    ) as HTMLElement

    setOpenMenu(!openMenu)
    // if (!openMenu) {
    //   console.log('!openMenu', openMenu)
    //   console.log('tag', targetElement.className)
    // } else {
    //   console.log('openMenu', openMenu)
    // }
    if (!openMenu) {
      disableBodyScroll(targetElement, {
        allowTouchMove: (el) => el.className === targetElement.className,
      })
    } else {
      clearAllBodyScrollLocks()
    }
  }

  return (
    <StyledHamburger openMenu={openMenu} onClick={() => handleClick()}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  )
}

export default Hamburger
