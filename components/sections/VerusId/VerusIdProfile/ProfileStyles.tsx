import styled from 'styled-components'
// import { media } from 'styled-bootstrap-grid'
import { fontFam, bgColor } from '@/styles/helpers'

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
