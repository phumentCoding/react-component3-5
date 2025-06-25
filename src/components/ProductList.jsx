import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cartStore';

const ProductList = ({data}) => {
  const dispatch = useDispatch();

  const status  = useSelector((state) => {
    return state.cartStore.status
  });

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  return (
    <div className=' row p-0 m-0 my-4'>
        {
            data && data.map((item,index) => {
                return (
                    <div className="col-lg-3 col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop" />
                            <div className="card-body">
                                <h3>{ item.name || 'Default Name'}</h3>
                                <p>{ item.price || 'Default Price'}</p>

                                <button className="btn btn-primary"
                                    onClick={ () => handleAddToCart(item) }
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Loading...' : 'Add to cart'}
                                </button>
                                
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList