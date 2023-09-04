import * as React from 'react'
import styles from 'styled-components'
import CartIcon from '../Cart/CartIcon'
import { CartContext } from '../../store/CartContext'

const ButtonWrapper = styles.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  :hover & {
    background-color: #2c0d00;
  }

  :active & {
    background-color: #2c0d00;
  }
`

const IconSpan = styles.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`

const BadgeSpan = styles.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  ${ButtonWrapper}:hover & {
    background-color: #92320c;
  }

  ${ButtonWrapper}:active & {
    background-color: #92320c;
  }
`

type headCartButtonProps = {
  showCart: () => void
}

const HeaderCartButton = ({ showCart }: headCartButtonProps) => {
  const cartContext = React.useContext(CartContext)
  const numberOfCartItems = cartContext.items.reduce((curNumber, i) => {
    return i.amount ? curNumber + i.amount : curNumber
  }, 0)

  return (
    <ButtonWrapper onClick={showCart}>
      <IconSpan>
        <CartIcon />
      </IconSpan>
      <span>Your Cart</span>
      <BadgeSpan>{numberOfCartItems}</BadgeSpan>
    </ButtonWrapper>
  )
}

export default HeaderCartButton
