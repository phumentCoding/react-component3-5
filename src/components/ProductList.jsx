import React from 'react'

const ProductList = ({data}) => {
  return (
    <div className=' row p-0 m-0 my-4'>
        {
            data && data.map((item,index) => {
                return (
                    <div className="col-lg-3 col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={item.image || 'https://via.placeholder.com/240'} />
                            <div className="card-body">
                                <h3>{ item.name || 'Default Name'}</h3>
                                <p>{ item.price || 'Default Price'}</p>
                                <button className="btn btn-primary">Add to Cart</button>
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