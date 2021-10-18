import { useFormContext } from 'react-hook-form'
import {
  StyledContainer,
  StyledLabel,
  StyledTextArea,
  StyledErrorMessage,
} from './Field.style'

import { getErrors } from './Hooks'

const TextAreaField = (props: any) => {
  const { name, label, validate } = props
  const {
    formState: { errors },
    register,
  } = useFormContext()
  const errorMessage = getErrors(errors, name)?.message

  return (
    <StyledContainer>
      <StyledLabel errorMessage={errorMessage} htmlFor={name}>
        {label}
      </StyledLabel>
      <StyledTextArea
        {...props}
        id={name}
        {...register(name, validate)}
        errorMessage={errorMessage}
      />

      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledContainer>
  )
}

export default TextAreaField
