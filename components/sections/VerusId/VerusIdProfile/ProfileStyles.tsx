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
export const StyledServiceCard = styled.div<any>`
  ${bgColor('#F3F3F3')}
  border: solid 1px;
  margin: 5px 10px;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${fontFam('')}
  font-size:16px;
  p {
    ${fontFam('')}
    padding: 0;
    font-weight: bold;
    margin: 0 10px;
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
`

export const ServiceCardDropDown = styled.div<any>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  padding: 20px;
  left: 50%;
  bottom: -5px;
  width: 450px;
  transform: translateY(100%) translateX(-50%);
`

export const ServiceCardDropDownArea = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.typo.header.family};
  color: ${(props) => props.theme.colors.grey.secondary};
  padding: ${(props) => props.theme.spaces.xs};
  border-radius: ${(props) => props.theme.borders.sm};
  box-shadow: 2px 2px 58px 4px rgba(0, 0, 0, 0.09);
`
