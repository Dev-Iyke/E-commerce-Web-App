import { ShoppingCartIcon } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="relative">
      <ShoppingCartIcon className="" />
      <div className="absolute bottom-4 left-6 px-2 py-1 bg-blue-500 text-white rounded-full">
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default CartIcon;
