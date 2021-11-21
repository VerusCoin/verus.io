import { useState } from 'react'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
import { DefaultText, SVGs } from '@/components/elements'
import { bgColor } from '@/styles/helpers'

const StyledMenu = styled.div`
  margin-top: 61px;
  position: relative;
  height: 48px;
  width: 228px;
`

const StyledSubMenuDiv = styled.div`
  ${bgColor('white')}
  border: 1px solid #dfdfdf;
  position: absolute;
  z-index: 10;
  top: 0;

  box-shadow: 0px 0px 16px -4px #0000001f;
  border-radius: 10px;
`

const StyledButton = styled.button<{ openSubMenu: boolean }>`
  border: none;
  background: transparent;
  display: inline-flex;
  width: 228px;

  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  svg {
    width: 16px;
    height: 16px;
    transition: transform ${(props) => props.theme.transitions.regular};
    transform: ${(props) => (props.openSubMenu ? 'rotate(180deg)' : '0')};
  }
`

const StyledSubMenu = styled.ul<{ openSubMenu: boolean }>`
  display: ${(props) => (props.openSubMenu ? 'flex' : 'none')};

  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.typo.header.family};
  color: #272727;
  padding: 0 0 ${(props) => props.theme.spaces.xs};
  margin: 0;
  list-style: none;
`
const StyledMenuItem = styled.a`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  padding: 8px ${(props) => props.theme.spaces.xs};
  svg {
    margin-right: 14px;
    height: 16px;
    width: 16px;
    fill: rgba(0, 0, 0, 0.37);
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.blue.tertiary};
  }
`

const CLIdownload = ({
  linuxApp,
  winApp,
  macApp,
  armApp,
}: {
  linuxApp: string
  winApp: string
  macApp: string
  armApp: string
}) => {
  const { t } = useTranslation('wallet')
  const [dropdown, showDropdown] = useState(false)
  return (
    <StyledMenu>
      <StyledSubMenuDiv>
        <StyledButton
          onClick={() => {
            showDropdown(!dropdown)
          }}
          openSubMenu={dropdown}
        >
          <DefaultText fam="geoHead" fontSz="menu">
            {t('cards.cli.dropdown.dropdown')}
          </DefaultText>

          <SVGs name="dropdown" />
        </StyledButton>

        <StyledSubMenu openSubMenu={dropdown}>
          <StyledMenuItem href={winApp} download>
            <SVGs name="windows" />
            <DefaultText fam="geoHead" fontSz="menu">
              {t('cards.cli.dropdown.windows')}
            </DefaultText>
          </StyledMenuItem>
          <StyledMenuItem href={macApp} download>
            <SVGs name="macOS" />
            <DefaultText fam="geoHead" fontSz="menu">
              {t('cards.cli.dropdown.mac')}
            </DefaultText>
          </StyledMenuItem>
          <StyledMenuItem href={linuxApp} download>
            <SVGs name="linux" />
            <DefaultText fam="geoHead" fontSz="menu">
              {t('cards.cli.dropdown.linux')}
            </DefaultText>
          </StyledMenuItem>
          <StyledMenuItem href={armApp} download>
            <SVGs name="linux" />
            <DefaultText fam="geoHead" fontSz="menu">
              {t('cards.cli.dropdown.arm')}
            </DefaultText>
          </StyledMenuItem>
        </StyledSubMenu>
      </StyledSubMenuDiv>
    </StyledMenu>
  )
}

export default CLIdownload
