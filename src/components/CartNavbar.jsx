import React from 'react'
import { Link } from 'react-router'

const CartNavbar = ({totalItem}) => {
  return (
    <div className=' bg-success d-flex justify-content-between align-items-center p-3'>
        <Link className="btn btn-primary" to="/">Home</Link>
        <h3>Your cart items: {totalItem} products</h3>
    </div>
  )
}

export default CartNavbar