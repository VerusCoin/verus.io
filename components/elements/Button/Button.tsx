import React from 'react'
import styled from 'styled-components'
import { fontSize } from '@/styles/helpers'
import { media } from 'styled-bootstrap-grid'
import { SVGs } from '@/components/elements'
import { IButton } from '@/types/elements'

const StyledButton = styled.button<any>`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: 16px 30px;
  background: ${(props) => props.theme.buttons.primary.bg};
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  color: ${(props) => props.theme.buttons.primary.text};
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transitions.regular};
  text-decoration: none;
  font-family: ${(props) =>
    props.fontRegular
      ? props.theme.typo.secondary.family
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
      transform: ${(props) => props.svg?.type !== 'tab' && `translateX(6px)`};
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
      }

      svg {
        fill: ${props.color || props.theme.buttons.secondary.text};

        ${props.svg?.rotate ? 'transform: rotate(-45deg);' : ''}
      }

    `}
    ${(props) => (props.small ? 'font-size: 17px' : fontSize('button'))}
`

const Button: React.FC<IButton> = ({
  svg,
  wide,
  href,
  as,
  primary,
  transparent,
  color,
  fontRegular,
  small,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      transparent={transparent}
      wide={wide}
      href={href}
      as={as}
      primary={primary}
      svg={svg}
      color={color}
      fontRegular={fontRegular}
      small={small}
      onClick={onClick}
    >
      {children}

      {svg && <SVGs name={svg.type} />}
    </StyledButton>
  )
}

export default Button
