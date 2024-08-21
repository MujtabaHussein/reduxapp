import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './fearures/cart/cartSlice'
import modalReducer from './fearures/modal/modalSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  rxreducer: {},
})
