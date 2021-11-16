import styled from 'styled-components'
// import { media } from 'styled-bootstrap-grid'
import { fontFam, fontSize, bgColor } from '@/styles/helpers'

export const StyledContainer = styled.div`
  margin: 12px 0;
  padding: 0 32px;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
`

export const StyledLabel = styled.div`
  display: flex;
  align-content: center;

  width: 100%;
  padding: 0 0 8px;
  h5 {
    text-decoration: underline;
  }
  span {
    margin-left: 10px;
  }
  svg {
    margin-left: 10px;
  }
  svg.initial {
    fill: ${(props) => props.theme.colors.orange};
  }
  svg.good {
    fill: ${(props) => props.theme.colors.green};
  }
  svg.invalid {
    fill: red;
  }
`

export const StyledAccountContainer = styled.div`
  position: relative;
`

export const StyledServiceCard = styled.div<any>`
  ${bgColor('#F3F3F3')}

  border: solid 1px;
  margin: 5px 10px;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
  ${fontFam('')}
  font-size:16px;
  p {
    ${fontFam('')}
    padding: 0;
    margin: 0 10px 5px;
    overflow-wrap: anywhere;
  }
  img.logo,
  svg.logo {
    fill: ${(props) => props.theme.colors.blue.primary};
    margin-right: 10px;
  }
  img {
    height: 25px;
  }
  svg.status {
    margin-left: 10px;
    fill: ${(props) =>
      props.status === 'true'
        ? props.theme.colors.green
        : props.status === 'false'
        ? 'red'
        : props.status === 'error'
        ? 'red'
        : props.theme.colors.orange};
    ${(props) =>
      props.status === (null || undefined) &&
      `animation: spin 2s linear infinite`}
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const TooltipBox = styled.div<any>`
  ${fontFam('geoReg')}
  ${fontSize('xxs')}
  position: absolute;
  top: calc(100% - 45px);
  left: calc(100% - 20px);
  color: #fff;
  background-color: #3165d4;
  visibility: visible;
  padding: 8px 8px;
  border-radius: 8px;

  &:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -12px;
    border-width: 5px;
    border-style: solid;
    border-color: #3165d4 transparent transparent transparent;
  }
`
export const TooltipBoxContainer = styled.div`
  position: relative;
`

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const ServiceDropDown = styled.div<any>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 10;
  padding: 20px;
  width: 100%;
  min-width: 250px;
  max-width: 350px;
  border: black solid 0.5px;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${(props) => props.theme.borders.sm};
  box-shadow: 2px 2px 58px 4px rgba(0, 0, 0, 0.09);
  left: 0;
`

export const AccountDropDown = styled.div<any>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 10;
  padding: 20px;
  width: 100%;
  min-width: 250px;
  max-width: 350px;
  border: black solid 0.5px;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${(props) => props.theme.borders.sm};
  box-shadow: 2px 2px 58px 4px rgba(0, 0, 0, 0.09);
  left: 0;
`

export const DropDownText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  svg {
    margin-right: 10px;
  }
  p {
    color: black;
    width: fit-content;
    margin-bottom: 0;
  }
  p.pass {
    color: ${(props) => props.theme.colors.green};
    font-weight: bold;
  }
  p.fail {
    color: red;
    font-weight: bold;
  }
  p.error {
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
  }
  svg.key {
    fill: black;
  }
  svg.pass {
    fill: ${(props) => props.theme.colors.green} !important;
    margin-left: 10px;
  }
  svg.fail {
    fill: red !important;
    margin-left: 10px;
  }
  svg.error {
    fill: ${(props) => props.theme.colors.orange} !important;
    margin-left: 10px;
  }
`

export const DropDownLinkText = styled.a`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.blue.primary};
  p {
    color: ${(props) => props.theme.colors.blue.primary};
    width: fit-content;
    margin-bottom: 0;
  }
  svg {
    margin-right: 10px;
  }
`
