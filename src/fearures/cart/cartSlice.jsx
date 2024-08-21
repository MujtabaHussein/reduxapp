import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { data } from '../../data'
import { useEffect } from 'react'
import axios from 'axios'
const url = 'https://fakestoreapi.com/products'

export const getProductsItem = createAsyncThunk(
  'cart/getProductsItem',
  async () => {
    const resp = await axios(url)
    return resp.data
  }
)

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    remove: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.rating.rate = cartItem.rating.rate + 1
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.rating.rate = Math.floor(cartItem.rating.rate - 1)
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0

      state.cartItems.forEach((item) => {
        amount += Math.floor(item.rating.rate)
        total += item.rating.rate * item.price
      })
      state.amount = amount
      state.total = Math.floor(total)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductsItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getProductsItem.rejected, (state) => {
        state.isLoading = true
      })
  },
})

export const { clearCart, increase, decrease, remove, calculateTotals } =
  cartSlice.actions

export default cartSlice.reducer
