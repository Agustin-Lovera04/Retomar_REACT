import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  quantityTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(0);


  const counter = () => {
    return cart.length
  }



  const addToCart = (item, quantity) => {
    const existProduct = cart.find((prod) => prod.item.id === item.id); //corroboramos que no existeel prod

    if (!existProduct) {
      setCart((prev) => [...prev, { item, quantity }]);
      setQuantityTotal((prev) => prev + quantity); //sumamos a la cantidad con el nuevoProd
      setTotal((prev) => prev + item.price * quantity); //sumamos al total el subotal del new Item
    } else {
      const newCart = cart.map((prod) => {
        if (prod.item.id == item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });

      setCart(newCart); //setemaos en nuevo carrito con el uevo prod
      setQuantityTotal((prev) => prev + quantity); //hacemos la misma logica de actulizacion
      setTotal((prev) => prev + item.price * quantity);
    }
    alert("Producto Agregado al carrito")
  };


  const deleteProdInCart = (id) => {
    const prodInCart = cart.find((prod) => prod.item.id === id)
    const newCart = cart.filter( (prod => prod.item.id !==id))
    setCart(newCart)
    setQuantityTotal((prev) => prev - prodInCart.quantity)
    setTotal((prev => prev - (prodInCart.item.price * prodInCart.quantity)))
  }


  const cleanCart = () => {
    setCart([])
    setTotal(0)
    setQuantityTotal(0)
  }

  return (
    <CartContext.Provider value={{ cart, total, quantityTotal, addToCart, deleteProdInCart, cleanCart, counter }}>
      {children}
    </CartContext.Provider>
  );
};
