import * as React from 'react'
import styles from 'styled-components'

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

const MealsList = styles.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)

  return (
    <MealsSection>
      <MealsList>{mealsList}</MealsList>
    </MealsSection>
  )
}

export default AvailableMeals
