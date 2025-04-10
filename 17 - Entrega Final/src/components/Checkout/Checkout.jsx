import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { finallyPurchase } from "../../utils"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const { cart, total, cleanCart } = useContext(CartContext)

    const prodsForOrder = cart.map((prod) => {
        return {
            id: prod.item.id,
            title: prod.item.title,
            price: prod.item.price,
            quantity: prod.quantity
        }
    })


    const handleForm = async (e) => {
        e.preventDefault();
        const formData = e.target;
    
        const nombre = formData.nombre.value;
        const apellido = formData.apellido.value;
        const telefono = formData.telefono.value;
        const email = formData.email.value;
        const emailConfirm = formData.emailConfirm.value;
    
        if (email !== emailConfirm) {
            setError('Los emails no coinciden');
            return;
        }

        // Llamás a la función de compra
        const result = await finallyPurchase(nombre, apellido, telefono, email, prodsForOrder, total);
        
        if (!result.success) {
            
            setError(result.error);
            return;
        }
    
        setMessage(`Gracias por tu compra ${nombre} ${apellido}, tu orden es: ${result.id}`);
    
        // Limpiás los campos
        formData.reset();
        setError('');
    
        setTimeout(() => {
            cleanCart();
            navigate('/');
        }, 2000);
    };
    
  return (
    <div>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={(e) => {handleForm(e)}}>
            <label htmlFor="nombre">
                Nombre:
                <input type="text" name="nombre" id="" required/>
            </label>
            <label htmlFor="apellido">
                Apellido:
                <input type="text" name="apellido" id="" required/>
            </label>
            <label htmlFor="telefono">
                Telefono:
                <input type="number" name="telefono" id="" required/>
            </label>
            <label htmlFor="email">
                Email:
                <input type="email" name="email" id="" required/>
            </label>
            <label htmlFor="emailConfirm">
                Confirmar Email:
                <input type="email" name="emailConfirm" id="" required/>
            </label>

            <button type="submit">Comprar</button>
        </form>

    </div>
  )
}

export default Checkout