import * as React from 'react'
import styles from 'styled-components'

const SummarySection = styles.section`
  text-align: center;
  max-width: 45rem;
  width: 98%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`

const MealsSummary: React.FC = () => {
  return (
    <SummarySection>
      <h2 style={{ fontSize: '2rem', marginTop: '0' }}>
        Delicious Food, Delivered to You
      </h2>
      <p>
        Choose your favorite meal from our broad selection of available menus
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </SummarySection>
  )
}

export default MealsSummary
