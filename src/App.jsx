import { useDispatch, useSelector } from 'react-redux'
import ItemContainer from './component/ItemContainer'
import Navbar from './component/Navbar'
import { calculateTotals, getProductsItem } from './fearures/cart/cartSlice'
import { useEffect } from 'react'
import Modal from './component/Modal'

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  useEffect(() => {
    dispatch(getProductsItem())
  }, [])
  return (
    <main>
      <Navbar />
      <ItemContainer />
      {isOpen && <Modal />}
    </main>
  )
}

export default App
