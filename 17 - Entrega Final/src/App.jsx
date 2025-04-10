import Router from "./components/Router/router"
import { CartProvider } from "./Context/CartContext"


const App = () => {
  return (
    <div className='container-fluid p-0'>
        <CartProvider>
          <Router />
        </CartProvider>
    </div>
  )
}

export default App