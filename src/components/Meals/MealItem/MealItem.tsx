import React from 'react'
import styles from 'styled-components'
import type { MealsInterface } from '../../../helpers/dummy-meals'

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
type MealItemProps = Required<MealsInterface> & {
  key: string
}

const MealItem: React.FC<MealItemProps> = (props: MealItemProps) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <MealList>
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0' }}>{props?.name}</h3>
        <DescriptionDiv>{props?.description}</DescriptionDiv>
        <PriceDiv>{price}</PriceDiv>
      </div>
      <div></div>
    </MealList>
  )
}

export default MealItem
