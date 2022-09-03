import React from 'react'
import { Container,Label,Input } from './FormInput.style';

const FormInput = ({label,inputOptions}) => {
  return (
    <Container>
      <Input {...inputOptions}/>
      {label && (
        <Label shrink={inputOptions.value.length}>
          {label}
        </Label>)
      }
    </Container>
  )
}

export default FormInput