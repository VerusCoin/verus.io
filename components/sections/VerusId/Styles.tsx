import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { fontFam, fontSize, bgColor } from '@/styles/helpers'

export const StyledContainer = styled.div<any>`
  grid-column: span 2;
  max-width: 750px;
  width: 100%;

  margin: auto;
  text-align: center;
  ${(props) => props.verus && bgColor('white')}
  ${(props) =>
    props.verus &&
    `
  border-radius: 8px;
  padding: 0 0 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 13px -10px rgb(0 0 0 / 13%);
  `}
`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  justify-content: center;
  ${fontFam('geoReg')}
  ${media.tablet`
  flex-direction: row;
`}
`

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.tablet`
  width: 470px;
`}
`
export const StyledError = styled.span`
  ${fontSize('xxs')}
  color: rgba(185, 28, 28);
  margin-bottom: ${(props) => props.theme.spaces.xs};
  margin-top: 10px;
`

export const StyledResultError = styled.div`
  ${fontSize('button')}
  color: rgba(185, 28, 28);
  margin-bottom: ${(props) => props.theme.spaces.xs};
  margin-top: 10px;
`

export const StyledInput = styled.input`
  color: ${(props) => props.theme.colors.blue.primary};
  padding: 20px 40px;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  border: 1px solid ${(props) => props.theme.colors.blue.primary};
  outline: none;
  height: 60px;
  &:focus {
    background-color: #e8f0fe;
    color: ${(props) => props.theme.colors.blue.quinary};
  }
`

export const StyledSubmitButton = styled.input`
  ${fontSize('xs')}
  color: white;
  padding: 20px 40px;
  border: none;
  background-color: #3165d4;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  margin-top: 20px;
  height: 60px;

  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  ${media.tablet`
    margin-top: 0;
    margin-left: -127px;
    width: 127px;
  `}
`

export const StyledInputValue = styled.p`
  ${fontFam('geoHead')}
  ${fontSize('button')}
color: ${(props) => props.theme.colors.blue.primary};
  padding: 20px 40px;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  width: 100%;
  background-color: white;
`
