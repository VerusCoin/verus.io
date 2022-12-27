import React from 'react'
import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { fontSize } from '@/styles/helpers'
import Link from 'next/link'
import { SVGs } from '@/components/elements'
import { IButton } from '@/types/elements'

const StyledButton = styled.button<any>`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: ${(props) => (props.small ? '12px 20px' : '16px 30px')};
  background: ${(props) => props.theme.buttons.primary.bg};
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  color: ${(props) => props.theme.buttons.primary.text};
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transitions.regular};
  text-decoration: none;
  font-family: ${(props) =>
    props.fontRegular
      ? props.theme.typo.primary.family
      : props.theme.typo.header.family};

  ${(props) => props.wide && `padding: 20px 30px;`}

  ${media.desktop`
    ${(props: any) => props.wide && `padding: 20px 60px;`}
  `}

  svg {
    transition: transform ${(props) => props.theme.transitions.regular};
    margin-left: ${(props) => props.theme.spaces.xxs};
    fill: white;
    transform: ${(props) => props.svg?.rotate && 'rotate(-45deg)'};
  }

  &:hover {
    background: ${(props) => props.theme.buttons.primary.hover.bg};

    svg {
      transform: ${(props) =>
        props.svg?.type !== 'tab' &&
        props.svg?.type !== 'miniTab' &&
        `translateX(6px)`};
    }
  }

  ${(props) =>
    props.primary &&
    `
      background: ${props.theme.buttons.secondary.bg};
      border-radius: ${props.theme.buttons.secondary.radius};
      color: ${props.theme.buttons.secondary.text};

      svg {
        fill: ${props.theme.buttons.secondary.text};

        transform: ${props.svg?.rotate ? ': rotate(-45deg);' : ''}
      }

      &:hover {
        background: ${props.theme.buttons.secondary.hover.bg};
        color: ${props.theme.buttons.secondary.hover.text};

        svg {
          fill: ${props.theme.buttons.secondary.hover.text};
        }
      }
    `}

  ${(props) =>
    props.transparent &&
    `
      padding: 0;
      background: transparent;
      color: ${props.color || props.theme.buttons.secondary.text};

      &:hover {
        background: transparent;
        ${props.href && 'text-decoration: underline;'}
        
        
      }

      svg {
        fill: ${props.color || props.theme.buttons.secondary.text};

        ${props.svg?.rotate ? 'transform: rotate(-45deg);' : ''}
        ${props.svg?.size ? `height: ${props.svg.size}px;` : ''}
      }

    `}
    
  ${(props) =>
    props.white &&
    `
    background: transparent;
    border-radius: ${props.theme.buttons.primary.radius};
    border: solid 2px ${props.theme.buttons.primary.text};
    color: ${props.theme.buttons.primary.text};
    padding: ${(props: any) => (props.small ? '12px 20px' : '16px 30px')};;
    &:hover {
      background: rgb(255,255,255,0.17);
    }
  `}
  ${(props: any) => props.margin && `margin: ${props.margin};`}
  ${(props: any) =>
    props.small ? 'font-size: 17px' : fontSize(props.fontSize)}
`

const Button = ({
  svg,
  wide,
  href,
  as,
  primary,
  white,
  transparent,
  color,
  fontRegular,
  fontSize = 'button',
  small,
  margin,
  onClick,
  children,
  className,
  active,
  target,
  download,
}: IButton) => {
  if (href && !target) {
    return (
      <Link href={href} passHref>
        <StyledButton
          className={className}
          transparent={transparent}
          wide={wide}
          as={as}
          primary={primary}
          svg={svg}
          small={small}
          color={color}
          fontRegular={fontRegular}
          fontSize={fontSize}
          margin={margin}
          onClick={onClick}
          white={white}
          active={active}
          download={download}
        >
          {children}

          {svg && <SVGs name={svg.type} />}
        </StyledButton>
      </Link>
    )
  } else {
    return (
      <StyledButton
        className={className}
        transparent={transparent}
        wide={wide}
        href={href}
        as={as}
        primary={primary}
        svg={svg}
        small={small}
        color={color}
        fontRegular={fontRegular}
        fontSize={fontSize}
        margin={margin}
        onClick={onClick}
        white={white}
        active={active}
        target={target}
        rel={target && 'noreferrer'}
      >
        {children}

        {svg && <SVGs name={svg.type} />}
      </StyledButton>
    )
  }
}

export default Button
