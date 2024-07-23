import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {
  removeItemFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/slices/cartSlice'
import { useRouter } from 'next/router'

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id))
  }

  const handleClear = () => {
    dispatch(clearCart())
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id))
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleClear}>Clear Cart</button>
        </div>
      )}
    </div>
  )
}

export default Cart
