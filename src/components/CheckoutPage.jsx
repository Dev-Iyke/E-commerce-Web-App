import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2Icon } from "lucide-react";
import PopUp from "./ui/Modal";
export const CheckoutPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  
  console.log(cart);

  useEffect(() => {
    const subTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    setSubTotal(subTotal);
    const discount = subTotal * 0.1
    setDiscount(discount)
    const total = subTotal - discount + 20;
    setTotal(total)
  }, [cart])
  return (
    <div className="pt-24 md:pt-28 py-6 px-3 dark:bg-[#333]">
      <h3
        id="cart"
        className="scroll-mt-24 text-xl sm:text-2xl font-integral_bold text-center py-4"
      >
        Your cart
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="border-[#0000001A] mb-6 border rounded-sm p-2 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4 border-b-[1px]"
            >
              <div className="shadow-md h-20 w-28">
                <img
                  src={item.image}
                  alt="gred"
                  className=" dark:p-0 w-full h-full rounded-sm p-1"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between gap-3 items-center">
                  <h3 className="line-clamp-1 text-[14px] font-semibold">
                    {item.title}
                  </h3>
                  <Trash2Icon onClick={() => removeFromCart(item.id)} size={20} className="text-red-800" />
                </div>
                <p className="text-[10px]">
                  <span>Category: </span>
                  {item.category}
                </p>
                <div className="flex justify-between items-center text-base py-2">
                  <h4 className="text-blue-500 font-bold">${item.price}</h4>
                  <div className="flex gap-2 shadow-md items-center bg-[#F2F0F1] dark:bg-[#333] dark:text-white px-2 pt-1 pb-3 rounded-2xl">
                    <button
                      disabled={item.qty === 1}
                      onClick={() => decreaseQty(item)}
                      className='shadow-md px-2 w-full disabled:text-red-700 disabled:cursor-not-allowed font-bold'
                    >
                      -
                    </button>
                    <span className="shadow-md px-2 w-full">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item)}
                      className="shadow-md px-2 w-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-[#0000001A] border rounded-sm p-4 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <div className="flex flex-col gap-3">
            <p className="flex justify-between items-center">
              <span className="text-[#00000099] dark:text-white">Subtotal</span>
              <span className="text-lg font-semibold">${subTotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-[#00000099] dark:text-white">Discount (-10%)</span>
              <span className="text-lg text-red-700 font-semibold">${discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-[#00000099] dark:text-white">Delivery Fee</span>
              <span className="text-lg font-semibold">$20</span>
            </p>
          </div>
          <div className="border-t-[1px] pt-4">
            <p className="flex justify-between items-center">
              <span className="text-black dark:text-white font-semibold">Total</span>
              <span className="text-xl font-semibold">${total.toFixed(2)}</span>
            </p>

            <PopUp totalAmount={total.toFixed(2)} />
          </div>
        </div>
      </div>
    </div>
  );
};
