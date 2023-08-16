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
      <h2 style={{ fontSize: '2rem', marginTop: '0' }}>Deli</h2>
      <p>Haha</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga error
        veniam architecto ipsam delectus illo eos saepe omnis corporis quas sit
        provident necessitatibus a, expedita possimus, fugiat adipisci
        repellendus. Laboriosam!
      </p>
    </SummarySection>
  )
}

export default MealsSummary
