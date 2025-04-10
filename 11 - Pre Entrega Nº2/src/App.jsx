import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='container-fluid p-0'>
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryID' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App