import * as React from 'react'
import styled from 'styled-components'
import Input from '../../UI/Input'

type FormProps = {
  id: string
  onAddToCart: (amount: number) => void
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

  &:active,
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

const MealItemForm: React.FC<FormProps> = ({ id, onAddToCart }: FormProps) => {
  const amountInputRef = React.useRef({ value: '' })
  const [isAmountValid, setAmountValid] = React.useState(true)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    const enteredAmount =
      amountInputRef.current && typeof amountInputRef.current !== 'undefined'
        ? amountInputRef.current.value
        : undefined
    const enteredAmountNumber = enteredAmount ? +enteredAmount : 0

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false)
      return
    }

    onAddToCart(enteredAmountNumber)
  }

  return (
    <FormWrapper onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount-${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        ref={amountInputRef}
      />
      <FormButton>+ Add</FormButton>
      {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
    </FormWrapper>
  )
}

export default MealItemForm
