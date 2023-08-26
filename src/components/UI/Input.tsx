import * as React from 'react'
import styled from 'styled-components'

type InputProps = {
  labelString: string
  input: React.InputHTMLAttributes<HTMLInputElement>
}

const InputSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`

const InputComponent = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`

const Input: React.FC<InputProps> = ({ labelString, input }: InputProps) => {
  return (
    <InputSection>
      <Label htmlFor={input.id}>{labelString}</Label>

      <InputComponent id={input.id} {...input} />
    </InputSection>
  )
}

export default Input
