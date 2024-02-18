import React, { useEffect, useState } from "react";

//Component
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";

//Redux
import { useDispatch, useSelector } from "react-redux";

function Dining() {
  const dispatch = useDispatch();
  const [ResturntList, setRestaurantList] = useState([]);
  const Resturants = useSelector((state) => state.restaurant.restaurants);

  useEffect(() => {
    Resturants.restaurants && setRestaurantList(Resturants.restaurants);
  }, [Resturants.restaurants]);
  return (
    <div className="mb-10">
      <h1 className="text-xl text-gray-700 my-4 md:my-8 md:text-3xl md:font-semibold">
        Collections
      </h1>
      <h1 className="text-xl text-gray-800 my-4 md:my-8 md:text-xl md:font-semibold">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune,
        based on trends
      </h1>
      <DiningCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-2xl md:font-semibold">
      Trending  restaurants in Baner
      </h1>
      <div className="flex justify-between flex-wrap">
        {ResturntList.map((resturant) => (
          <RestaurantCard {...resturant} key={resturant._id} />
        ))}
      </div>
    </div>
  );
}

export default Dining;
