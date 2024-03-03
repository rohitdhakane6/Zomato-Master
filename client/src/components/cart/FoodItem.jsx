import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { decrementCartItem, incrementCartItem, removeFromCart } from "../../app/store";

function FoodItem(props) {
  const dispatch =useDispatch()
  const deleteFoodFromCart = () => {
    dispatch(removeFromCart(props.food._id))
  };

  const increment = () => {
    dispatch(incrementCartItem(props.food._id))

  };

  const decrement = () => {
    dispatch(decrementCartItem(props.food._id))
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h5>{props.food.name}</h5>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <small>Rs. {parseInt(props.totalPrice) * parseInt(props.quantity)}</small>
            <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
              <button
                onClick={decrement}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                onClick={increment}
                className="p-1 bg-zomato-400 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill
            onClick={deleteFoodFromCart}
            className="text-zomato-400 text-lg md:text-xl cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default FoodItem;

// {
//   "food": {
//       "name": "Veggie Delight Pizza",
//       "image": "https://theclubcafe.in/cdn/shop/products/Veggiedelight2_1024x1024@2x.png",
//       "isAddedToCart": false,
//       "rating": 0,
//       "description": "A delicious vegetarian pizza with a variety of fresh vegetables.",
//       "price": 200,
//       "_id": "65e03e6b8d92729f11954164",
//       "isVeg": true,
//       "isContainsEgg": false,
//       "category": "Pizza",
//       "photos": "65e0766c8d92729f11954188",
//       "addOns": [],
//       "restaurant": "65cd874c8cf0c4ad4b4fc665"
//   },
//   "quantity": 1,
//   "totalPrice": 200
// }