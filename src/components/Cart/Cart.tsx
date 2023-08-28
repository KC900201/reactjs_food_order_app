import * as React from 'react'
import styled from 'styled-components'
import Modal from '../UI/Modal'

type cartProps = {
  hideCart: () => void
}

const TotalSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`

const ActionSection = styled.section`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  button:hover {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`

const CartItems = () => (
  <CartList>
    {[{ id: 'cl', name: 'Sushi', amount: 2, price: 12.09 }].map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </CartList>
)

const Cart: React.FC<cartProps> = ({ hideCart }: cartProps) => {
  return (
    <Modal>
      <CartItems />
      <TotalSection>
        <span>Total Amount</span>
        <span>22.22</span>
      </TotalSection>
      <ActionSection>
        <button style={{ color: '#8a2b06' }} onClick={hideCart}>
          Close
        </button>
        <button
          style={{ backgroundColor: '#8a2b06', color: 'white' }}
          onClick={hideCart}
        >
          Order
        </button>
      </ActionSection>
    </Modal>
  )
}

export default Cart
