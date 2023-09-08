import * as React from 'react'
import styled from 'styled-components'
import { MealsInterface } from '../../helpers/dummy-meals'

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`
const CartListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }
`

const ItemSummarySection = styled.section`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ActionButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const CartItemButton = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: #8a2b06;
  border: 1px solid #8a2b06;
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  marrgin-left: 1rem;
  margin: 0.25rem;

  &:hover,
  &:active {
    background-color: #8a2b06;
    color: white;
  }
`

interface ItemProps {
  items: MealsInterface[]
  onAdd: (item: MealsInterface) => void
  onRemove: (id: string) => void
}

const CartItem = ({ items, onRemove, onAdd }: ItemProps) => (
  <CartList>
    {items.map((item: MealsInterface) => (
      <CartListItem key={item.id}>
        <div>
          <h2>{item.name}</h2>
          <ItemSummarySection>
            <span style={{ fontWeight: 'bold', color: '#8a2b06' }}>
              {item.price}
            </span>
            <span
              style={{
                fontWeight: 'bold',
                border: '1px solid #ccc',
                padding: '0.25rem 0.75rem',
                borderRadius: '6px',
                color: '#363636',
              }}
            >
              x {item.amount}
            </span>
          </ItemSummarySection>
        </div>
        <ActionButtonSection>
          <CartItemButton onClick={() => onRemove(item.id)}>-</CartItemButton>
          <CartItemButton onClick={() => onAdd(item)}>+</CartItemButton>
        </ActionButtonSection>
      </CartListItem>
    ))}
  </CartList>
)

export default CartItem
