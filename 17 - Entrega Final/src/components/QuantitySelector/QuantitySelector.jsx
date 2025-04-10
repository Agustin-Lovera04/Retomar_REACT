import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"

const QuantitySelector = ({item}) => {
    const { addToCart } = useContext(CartContext)
    const [count, setCount] = useState(1)


    const inc = () => {
        if(count < item.stock){
        setCount(count + 1)
    }
    }

    const dec = () => {
        if(count > 1){
            setCount(count - 1) 
    }
}

  return (
    <div className="container-fluid">

        <button onClick={dec}> - </button>
            {count}
        <button onClick={inc}> + </button>

        <button onClick={()=>addToCart(item, count)}>Agregar al Carrito</button>

    </div>
)}

export default QuantitySelector