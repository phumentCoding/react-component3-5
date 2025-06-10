import React from 'react'

const Category = ({data}) => {
  return (
    <div className=' row p-0 m-0 my-4'>
        
        {
            data && data.map((item,index) => {
                return (
                    <div className="col-lg-6 col-md-2">
                        <div className="card">
                            <div className="card-body text-center">
                                <h3>{ item.name || 'Default Name'}</h3>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Category