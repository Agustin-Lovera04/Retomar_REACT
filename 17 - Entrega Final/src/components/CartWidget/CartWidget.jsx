import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
const CartWidget = () => {
  const {counter} = useContext(CartContext)
  return (
    <div>
    <NavLink to={'/cart'}>Cart</NavLink>
    {counter()}
    </div>
  )
}

export default CartWidget