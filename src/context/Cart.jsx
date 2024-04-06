import { createContext, useState, useContext } from "react";

// stape 1
const CartContext = createContext({
  cart: [{ product_id: "", qty: "" }],
  add: () => {},
  del: () => {},
  edite: () => {},
});

// stape 2
export function CartProvider({ children }) {
  const [cart, setCart] = useState([{ product_id: "", qty: "" }]);

  function add(product_id, qty) {
    const newCart = { product_id: product_id, qty: qty };
    setCart([...cart, newCart]);
    console.log("cart add");
  }

  function del() {}

  function edite() {}

  return (
    <CartContext.Provider value={{ cart, add, del, edite }}>
      {children}
    </CartContext.Provider>
  );
}

// stape 3
export function CartUse() {
  return useContext(CartContext);
}
