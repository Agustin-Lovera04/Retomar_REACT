import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

let mensaje= 'MENSAJE POR PROP'

const App = () => {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <ItemListContainer mensaje={mensaje} />
    </div>
  )
}

export default App