import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { increase, decrease, remove } from '../fearures/cart/cartSlice'
const itemCart = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch()

  const { rate } = rating
  return (
    <article className='cart-item'>
      <img src={image} alt={title} className='img' />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{Math.floor(rate)}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={() => {
            if (rate === 1) {
              dispatch(remove(id))
              return
            }
            dispatch(decrease(id))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default itemCart
