import { ReactNode } from 'react'
import styled from 'styled-components'
import { fontSize } from '@/styles/helpers'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  > div {
    margin: 0 0 2rem;
  }
`

export const StyledButton = styled.button`
  ${fontSize('xs')}
  color: #3165d4;
  padding: 20px 40px;
  border: 1px solid #3165d4;
  background-color: white;
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  margin-bottom: 20px;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 22%);
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #3165d4;
  }
`

interface FormTypes {
  SubmitHandler: () => void
  children: ReactNode
}

const Form = ({ SubmitHandler, children }: FormTypes) => {
  return (
    <StyledForm onSubmit={SubmitHandler}>
      {children}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  )
}

export default Form
