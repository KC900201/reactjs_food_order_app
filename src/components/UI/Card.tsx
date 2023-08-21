import React from 'react'
import styles from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const CardDiv = styles.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
`

export const Card: React.FC<Props> = (props: Props) => {
  return <CardDiv>{props.children}</CardDiv>
}
