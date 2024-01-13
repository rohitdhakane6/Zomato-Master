import React, { useState } from "react";
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";

function Dining() {
  const [ResturntList, setResturntList] = useState([
    {
      _id: "123",
      images: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Pizza",
      cuisine: ["xyz"],
      isPro: false,
      isOff: true,
      restaurantReviewValue: 3.4,
      averageCost: 45,
    },
    {
      _id: "123",
      images: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Pizza",
      cuisine: ["xyz"],
      isPro: false,
      isOff: true,
      restaurantReviewValue: 3.4,
      averageCost: 45,
    },
    {
      _id: "123",
      images: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Pizza",
      cuisine: ["xyz"],
      isPro: false,
      isOff: true,
      restaurantReviewValue: 3.4,
      averageCost: 45,
    },
    {
      _id: "123",
      images: [
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",
      ],
      name: "Pizza",
      cuisine: ["xyz"],
      isPro: false,
      isOff: true,
      restaurantReviewValue: 3.4,
      averageCost: 45,
    },
  ]);
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
