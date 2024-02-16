import React, { useEffect, useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { fetchImageURL, fetchRestaurantByID } from "../app/store";

//Component
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import InfoButton from "../components/Restaurant/InfoButton";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/cart/cartContainer";
import { useParams } from "react-router-dom";

function RestaurantLayout({ children }) {
  const {id}=useParams()
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });
  console.log(restaurant.address);
  const dispatch = useDispatch();
  const { status: restaurantByIdStatus, error: restaurantByIdError } =
    useSelector((state) => state.restaurant.fetchRestaurantByID);

  useEffect(() => {
    dispatch(fetchRestaurantByID(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload,
      }));

      dispatch(fetchImageURL(data.payload.photos)).then((data) => {
        // console.log(data);
        setRestaurant((prev) => ({
          ...prev,
          images: data.payload.image.images,
        }));
      });
    });

  }, []);
    
  if (restaurantByIdStatus === "loading") {
    return <p>Loading...</p>;
  }
  if (restaurantByIdError !== null) {
    return <p>Error: {restaurantByIdError}</p>;
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4  lg:px-20 pb-10">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButton isActive>
            <RiDirectionLine className="text-zomato-300" /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus className="text-zomato-300" /> BookMark
          </InfoButton>
          <InfoButton isActive>
            <RiShareForwardLine className="text-zomato-300" /> Share
          </InfoButton>
        </div>
        <div className="my-3">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer />
    </>
  );
}

export default RestaurantLayout;
