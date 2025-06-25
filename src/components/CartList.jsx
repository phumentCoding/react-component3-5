import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItemFromCart } from '../stores/cartStore';

const CartList = ({ data, onIncrement, onDecrement, onRemove }) => {


  const calculateTotal = () => {
    return data.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)
  }

  return (
    <div className="my-3">
      {data && data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.image || 'https://via.placeholder.com/100'}
                    alt={item.name}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.name || 'Unnamed Item'}</h5>
                    <p className="card-text mb-1">Price: ${item.price?.toFixed(2) || '0.00'}</p>
                    <p className="card-text">Total: ${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <div className="btn-group" role="group">
                    <button
                      onClick={() => onDecrement(index)}
                      className="btn btn-outline-dark"
                    >
                      -
                    </button>
                    <span className="btn btn-light">{item.qty}</span>
                    <button
                      onClick={() => onIncrement(index)}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <button
                    onClick={() => onRemove(index)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4>
              Grand Total:{' '}
              <span className="text-success">${calculateTotal()}</span>
            </h4>
          </div>
        </>
      ) : (
        <p className="text-center text-muted">Your cart is empty.</p>
      )}
    </div>
  )
}

export default CartList
