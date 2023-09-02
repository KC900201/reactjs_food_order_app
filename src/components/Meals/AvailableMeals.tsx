import * as React from 'react'
import styles from 'styled-components'

import { Card } from '../UI/Card'
import MealItem from './MealItem/MealItem'

import { DUMMY_MEALS } from '../../helpers/dummy-meals'

const MealsSection = styles.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear ease-out forwards;

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: transformY(0);
    }
  }
`

const MealsListUL = styles.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={`meal-item-${meal.id}`}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <MealsSection>
      <Card>
        <MealsListUL>{mealsList}</MealsListUL>
      </Card>
    </MealsSection>
  )
}

export default AvailableMeals
