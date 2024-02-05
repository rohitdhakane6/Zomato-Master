import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//Component
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import InfoButton from "../components/Restaurant/InfoButton";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/cart/cartContainer";

function RestaurantLayout({ children }) {
  const [restaurant, setrestaurant] = useState({
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/8/6506108/7c8d1e6d9612e5bee0d54a39188e95a4.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/8/6506108/002cabe8f16150c503c2ef6ad25546f8.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/8/6506108/7c8d1e6d9612e5bee0d54a39188e95a4.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/8/6506108/002cabe8f16150c503c2ef6ad25546f8.jpg",
    ],
    name: "McDonald's",
    restaurantRating: "3.7",
    deliverytating: "4.3",
    cuisine: ["Burger", "Fast Food", "Coffee", "Beverages"],
    address: "Dange Chowk, Pune",
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4  lg:px-20 pb-10">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliverytating={restaurant?.deliverytating || 0}
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
