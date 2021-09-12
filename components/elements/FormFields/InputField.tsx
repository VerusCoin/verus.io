import { useFormContext } from 'react-hook-form'
import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from './Field.style'

import { getErrors } from './Hooks'

const InputField = (props: any) => {
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
      <StyledInput
        {...props}
        errorMessage={errorMessage}
        {...register(name, validate)}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledContainer>
  )
}

export default InputField
