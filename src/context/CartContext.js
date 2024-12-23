import React, { createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Product already in cart");
      return;
    }
    setCart([...cart, product]);
    alert("Item added to cart!");

    return true;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const increaseQty = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };
  
  const decreaseQty = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
