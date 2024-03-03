import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchImageURL, getfood } from "../../../app/store";

function FoodItem(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [food, setFood] = useState({
    name: "",
    image: "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
    isAddedToCart: false,
    rating: 0,
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.item) {
          const response = await dispatch(getfood(props.item));
          const imageId = response.payload.photos;

          if (imageId) {
            const imageResponse = await dispatch(fetchImageURL(imageId));

            if (
              imageResponse.payload &&
              imageResponse.payload.image &&
              imageResponse.payload.image.images &&
              imageResponse.payload.image.images.length > 0
            ) {
              const imageUrl = imageResponse.payload.image.images[0].location;

              setFood((prevFood) => ({
                ...prevFood,
                image: imageUrl,
                ...response.payload,
              }));
            } else {
              console.error("Invalid image data format");
            }
          } else {
            // Set remaining data if imageId is not present
            setFood((prevFood) => ({
              ...prevFood,
              ...response.payload,
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };

    fetchData();
  }, [props.item]);

  useEffect(() => {
    // Check if the current food item is in the cart
    const isInCart = cartItems.some((item) => item.food._id === props.item);
    
    // Update isAddedToCart accordingly
    setFood((prevFood) => ({
      ...prevFood,
      isAddedToCart: isInCart,
    }));
  }, [cartItems, props.item]);

  const AddToCartHandle = () => {
    dispatch(
      addToCart({
        food: food,
        quantity: 1,
        totalPrice: food.price,
      })
    );

    setFood((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <>
      <div className="flex items-start gap-2">
        {food.name && (
          <div className="flex items-start gap-4 w-full p-1">
            {food?.image && (
              <div className="w-3/2 h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden">
                <img
                  src={food?.image}
                  alt="food item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{food?.name}</h3>
                <button
                  onClick={AddToCartHandle}
                  disabled={food.isAddedToCart}
                  className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
                >
                  {food.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              <ReactStars count={5} value={food?.rating} />
              <h5>Rs.{food?.price}</h5>
              <p>{food?.description}</p>
            </div>
            <div className="hidden md:block w-2/12">
              <button
                onClick={AddToCartHandle}
                disabled={food.isAddedToCart}
                className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
              >
                {food.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FoodItem;
