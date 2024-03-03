import React, { useEffect, useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
//redux
import { UseDispatch, useSelector } from "react-redux";

// component
import FoodItem from "./FoodItem";

function CartSM({ toggle, totalItems, totalPrice }) {
  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-cetner gap-1" onClick={toggle}>
            {totalItems} Item <IoMdArrowDropup />
          </small>
          <h4>
            Rs. {totalPrice} <sub>(plus tax)</sub>
          </h4>
        </div>
        <Link to="/checkout/orders">
          <button className="flex items-cetenr gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg right-32 relative">
            Continue <IoMdArrowDropright />
          </button>
        </Link>
      </div>
    </>
  );
}

function CartLG({ toggle, totalItems, totalPrice }) {
  return (
    <>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1" onClick={toggle}>
            {totalItems} Item <IoMdArrowDropup className="cursor-pointer" />
          </small>
          <h4>
            Rs. {totalPrice} <sub>(plus tax)</sub>
          </h4>
        </div>
        <Link to="/checkout/orders">
          <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg">
            Continue <IoMdArrowDropright className="cursor-pointer" />
          </button>
        </Link>
      </div>
    </>
  );
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const reduxState = useSelector((state) => state.cart.items);
  const [info, setInfo] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    if (reduxState?.length) {
      const totalItems = reduxState
        .map((item) => item.quantity)
        .reduce((total, num) => total + Math.round(num), 0);
      const totalPrice = reduxState
        .map((item) => item.totalPrice*item.quantity)
        .reduce((total, num) => total + num, 0);
      setInfo({ totalItems, totalPrice });
    }
  }, [reduxState]);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {reduxState?.length && (
        <div>
          {isOpen && (
            <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-14 px-3">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="text-xl font-semibold">Your Orders</h3>
                <IoCloseSharp className="cursor-pointer" onClick={closeCart} />
              </div>

              <hr className="my-2" />

              <div className="flex flex-col gap-2 md:px-20">
                {reduxState.map((food, index) => (
                  <FoodItem key={index} {...food} />
                ))}
              </div>
            </div>
          )}

          <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0  mx-auto lg:px-20">
            <CartSM toggle={toggleCart} {...info} />
            <CartLG toggle={toggleCart} {...info}/>
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;
