import React from 'react'
import CartNavbar from '../components/CartNavbar'
import CartList from '../components/CartList'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getItemFromCart } from '../stores/cartStore'

const Cart = () => {

  const dispatch = useDispatch(); 

  const carts = useSelector((state) => {
    return state.cartStore.items;
  })


  const handleIncrement = () => {}
  const handleDecrement = () => {}
  const handleRemove = () => {}


  useEffect(() => {
    dispatch(getItemFromCart())
  },[dispatch]);

  return (
    <div className=' container'>

        <CartNavbar totalItem={10}/>

        <CartList
            data={carts}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
       />
    </div>
  )
}

export default Cart