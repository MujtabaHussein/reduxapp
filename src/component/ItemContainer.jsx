// const url = 'https://api.aranasayesh.ir/api/company/'
// const url = 'https://jsonplaceholder.typicode.com/photos'
// const url = 'https://fakestoreapi.com/products'
import React from 'react'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../fearures/cart/cartSlice'
import { openModal, closeModal } from '../fearures/modal/modalSlice'
clearCart
const itemContainer = () => {
  const dispatch = useDispatch()

  const { amount, cartItems, total } = useSelector((store) => store.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <ItemCart key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default itemContainer
