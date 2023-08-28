import React, { Fragment } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [showCart, setShowCart] = React.useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <Fragment>
      {showCart && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
