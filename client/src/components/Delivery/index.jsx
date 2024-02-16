import React, { useEffect, useState } from "react";

//Component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

//Redux
import { useDispatch, useSelector } from "react-redux";

function Delivery() {
  const dispatch = useDispatch();
  const [ResturntList, setRestaurantList] = useState([]);
  const Resturants = useSelector((state) => state.restaurant.restaurants);
  console.log(Resturants);

  useEffect(() => {
    Resturants.restaurants && setRestaurantList(Resturants.restaurants);
  }, [Resturants.restaurants]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-2xl md:font-semibold">
        Delivery Restaurant in NCR
      </h1>
      <div className="flex justify-between flex-wrap">
        {ResturntList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
