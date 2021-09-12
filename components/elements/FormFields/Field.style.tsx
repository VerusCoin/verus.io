import styled from 'styled-components'
import { bgColor } from '@/styles/helpers'

export const StyledContainer = styled.div`
  justify-content: center;
  padding: 0.75rem 0.5rem;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 22%);
  border-radius: 0.375rem;
  border: 1px solid #e0e0e0;
  ${bgColor('white')}
`

export const StyledLabel = styled.label<any>`
  font-size: 0.9375rem;
  line-height: 1.25rem;
  position: absolute;
  background: linear-gradient(
    0deg,
    white 50%,
    ${(props) => props.theme.colors.grey.quinary} 50%
  );
  width: fit-content;
  text-transform: capitalize;
  padding: 0 0.5rem;
  margin: -1.4rem 0.5rem 0.5rem 1rem;
  color: ${(props: any) => (props.errorMessage ? '#dc2626' : '#616161')};
`

export const StyledInput = styled.input<any>`
  width: 100%;
  color: #424242;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  outline: none;
  &:focus {
    outline: none;
  }
  border: none;
  ${(props: any) =>
    props.errorMessage &&
    `
      border: 1px solid #dc2626;
      background-color: #fecaca;
    `}
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  color: #424242;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  outline: none;
  &:focus {
    outline: none;
  }
  border: none;
  ${(props: any) =>
    props.errorMessage &&
    `
      border: 1px solid #dc2626;
      background-color: #fecaca;
    `}
`

export const StyledErrorMessage = styled.p`
  margin: 6px 0 0 0;
  font-style: italic;
  color: #dc2626;
  padding: 0;
  font-size: 0.75rem;
  line-height: 1rem;
`

export const StyledFileInputBox = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 125px;
  color: #616161;
  background-color: #eeeeee;
  justify-content: center;
  align-items: center;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  outline: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  border: 1px dashed #212121;
  div > p {
    margin: 0;
  }
  ${(props: any) =>
    props.isDragActive &&
    `
    background-color: #bdbdbd;
  `}

  ${(props: any) =>
    props.errorMessage &&
    `
    border: 1px solid #dc2626;
    background-color: #fecaca;
    p {
      color: #dc2626
    }
  `}
`
