import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions
export default cartSlice.reducer
