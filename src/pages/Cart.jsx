import React from "react";
import { CartUse } from "../context/Cart";

const Cart = () => {
  const { cart } = CartUse();

  console.log(cart);

  return (
    <div className="bg-light">
      <div className="container pt-4">
        {/* /// filter  */}
        <div className="row ">
          {cart.map((val, index) => (
            <div key={index}>{JSON.stringify(val)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
