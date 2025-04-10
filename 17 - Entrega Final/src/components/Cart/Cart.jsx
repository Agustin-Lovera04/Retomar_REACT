import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total, deleteProdInCart, cleanCart } = useContext(CartContext);

  return (
    <>
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? <div className="alert alert-warning">NO HAY PRODUCTOS EN CARRITO</div> :

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">QUANTITY</th>
                <th scope="col">TITLE</th>
                <th scope="col">SUBTOTAL</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <tr key={prod.item.id}>
                  <td>{prod.quantity}</td>
                  <td>{prod.item.title}</td>
                  <td>${prod.item.price * prod.quantity}</td>
                  <td> <button onClick={() => deleteProdInCart(prod.item.id)}> Eliminar </button> </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning" onClick={() => cleanCart()}> VACIAR CARRITO </button>
          <h3>Total: $ {total} </h3>
          <Link to='/checkout'>FINALIZAR COMPRA</Link>
        </div>
      }
    </>
  );
};

export default Cart;
