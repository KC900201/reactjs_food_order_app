import * as React from 'react'
import styled from 'styled-components'
import Input from '../../UI/Input'

type FormProps = {
  key: string
}

const FormButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }

  &:hover {
    background-color: #641e03;
    border-color: #641e03;
  }
`

const FormWrapper = styled.form`
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
`

const MealItemForm: React.FC<FormProps> = ({ key }: FormProps) => {
  return (
    <FormWrapper>
      <Input
        labelString="Amount"
        input={{
          id: `amount-${key}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <FormButton>+ Add</FormButton>
    </FormWrapper>
  )
}

export default MealItemForm
