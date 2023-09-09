import * as React from 'react'
import styled from 'styled-components'

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
  padding-left: 1rem;
`

// May have to define the props in future
const Input = React.forwardRef((props: any, ref) => {
  return (
    <InputSection>
      <Label htmlFor={props.input.id}>{props.label}</Label>

      <InputComponent ref={ref} {...props.input} />
    </InputSection>
  )
})

export default Input
