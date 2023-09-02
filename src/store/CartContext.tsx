import * as React from 'react'

type Props = {
  children?: React.ReactNode
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

type CartContextObj = {
  items: any[]
  totalAmount: number
  addItem: (item: any) => void
  removeItem: (id: string) => void
}

export const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
})

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD': {
      const updatedItems = state.items.concat(action.item)
      const newTotalAmount =
        state.totalAmount + action.item.price + action.item.amount

      return {
        items: updatedItems,
        totalAmount: state.totalAmount,
      }
    }

    default:
      return 'Unsupported action'
  }
  return defaultCartState
}

const CartProvider: React.FC<Props> = (props) => {
  // useReducer
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item: any) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContextValue: CartContextObj = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
