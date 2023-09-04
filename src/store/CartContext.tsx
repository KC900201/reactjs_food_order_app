import * as React from 'react'
import { type MealsInterface } from '../helpers/dummy-meals'

type Props = {
  children?: React.ReactNode
}

interface CartState {
  items: MealsInterface[]
  totalAmount: number
}

const defaultCartState = {
  items: [] as MealsInterface[],
  totalAmount: 0,
}

type CartContextObj = {
  items: MealsInterface[]
  totalAmount: number
  addItem: (item: MealsInterface) => void
  removeItem: (id: string) => void
}

export const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalAmount: 0,
  addItem: (item: MealsInterface) => {},
  removeItem: (id: string) => {},
})

const cartReducer = (
  state: CartState,
  action: { id?: string; item?: MealsInterface; type: string }
) => {
  switch (action.type) {
    case 'ADD': {
      let updatedItems: MealsInterface[] = []
      let updatedTotalAmount = 0
      const { item: actionItem } = action

      if (actionItem && actionItem.amount) {
        updatedTotalAmount =
          state.totalAmount + actionItem.price * actionItem.amount

        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === actionItem.id
        )
        const existingCartItem = state.items[existingCartItemIndex]

        if (existingCartItem && existingCartItem.amount) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + actionItem.amount,
          }
          updatedItems = [...state.items]
          updatedItems[existingCartItemIndex] = updatedItem
        } else {
          updatedItems = state.items.concat(actionItem)
        }
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    case 'REMOVE': {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      )
      const existingItem = state.items[existingCartItemIndex]
      const updatedTotalAmount = state.totalAmount - existingItem.price

      let updatedItems

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id)
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount ? existingItem.amount - 1 : 0,
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    default:
      return defaultCartState
  }
}

const CartProvider: React.FC<Props> = (props) => {
  // useReducer
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item: MealsInterface) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContextValue: CartContextObj = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
