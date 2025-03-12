import React from 'react'

export const ItemListContainer = ({mensaje}) => {
  return (
    <div className='container-fluid text-center'>
      <div className="row">
        <h1>ItemListContainer</h1>
      </div>
      <div className="row">
        <p>{mensaje}</p>
      </div>
    </div>

  )
}

export default ItemListContainer