import NavBar from '../NavBar/NavBar'
import ItemsContainer from '../ItemsContainer/ItemsContainer'
import  ItemDetailContainer  from '../ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'

const Router = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>

      <Route path='/' element={<ItemsContainer/>} />
      <Route path='/category/:categoryID' element={<ItemsContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      
    </Routes>

  </BrowserRouter>
  )
}

export default Router