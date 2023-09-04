import React, { Fragment } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartContext'

function App() {
  const [showCart, setShowCart] = React.useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
