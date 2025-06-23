import React from 'react'
import CartNavbar from '../components/CartNavbar'
import CartList from '../components/CartList'

const Cart = () => {

  const handleIncrement = () => {}
  const handleDecrement = () => {}
  const handleRemove = () => {}

  return (
    <div className=' container'>

        <CartNavbar totalItem={10}/>

        <CartList
            data={[1,2,3,4]}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
       />
    </div>
  )
}

export default Cart