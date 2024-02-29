import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchImageURL, getfood } from "../../../app/store";

function FoodItem(props) {
  const dispatch = useDispatch();
  const [food, setFood] = useState({
    name: "",
    image:
      "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg",
    isAddedToCart: false,
    rating: 0,
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = () => {
      if (props.item) {
        dispatch(getfood(props.item))
          .then((response) => {
            const imageId = response.payload.photos;

            if (imageId) {
              dispatch(fetchImageURL(imageId))
                .then((imageResponse) => {
                  if (
                    imageResponse.payload &&
                    imageResponse.payload.image &&
                    imageResponse.payload.image.images &&
                    imageResponse.payload.image.images.length > 0
                  ) {
                    const imageUrl =
                      imageResponse.payload.image.images[0].location;

                    setFood((prevFood) => ({
                      ...prevFood,
                      image: imageUrl,
                      ...response.payload,
                    }));
                  } else {
                    console.error("Invalid image data format");
                  }
                })
                .catch((error) => {
                  console.error("Error fetching image:", error);
                });
            } else {
              // Set remaining data if imageId is not present
              setFood((prevFood) => ({
                ...prevFood,
                ...response.payload,
              }));
            }
          })
          .catch((error) => {
            console.error("Error fetching food list:", error);
          });
      }
    };

    fetchData();
  }, [props.item]);

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
                <button className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                  {food.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              <ReactStars count={5} value={props?.rating} />
              <h5>Rs.{food?.price}</h5>
              <p>{food?.description}</p>
            </div>
            <div className="hidden md:block w-2/12">
              <button className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
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
