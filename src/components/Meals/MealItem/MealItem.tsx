import React from 'react'
import styles from 'styled-components'
import MealItemForm from '../MealItemForm/MealItemForm'
import type { MealsInterface } from '../../../helpers/dummy-meals'
import { CartContext } from '../../../store/CartContext'

const MealList = styles.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`
const DescriptionDiv = styles.div`
  font-style: italic;
`
const PriceDiv = styles.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`

const MealItem: React.FC<MealsInterface> = ({
  id,
  name,
  price,
  description,
}: MealsInterface) => {
  const cartContext = React.useContext(CartContext)
  const realPrice = parseInt(price.toFixed(2))

  // WIP (fix)
  const addItemToCartHandler = (amount: number) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: realPrice,
    })
  }

  return (
    <MealList>
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0' }}>{name}</h3>
        <DescriptionDiv>{description}</DescriptionDiv>
        <PriceDiv>{price}</PriceDiv>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
      </div>
    </MealList>
  )
}

export default MealItem
