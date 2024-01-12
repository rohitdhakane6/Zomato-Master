import React, { useState } from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

function Delivery() {
  const [ ResturntList ,setResturntList]=useState([
    {
      _id:"123",
      images:[
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",

      ],
      name :"Pizza",
      cuisine:["xyz"],
      isPro:false,
      isOff:true,
      restaurantReviewValue:3.4,
      averageCost:45
    },
    {
      _id:"123",
      images:[
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",

      ],
      name :"Pizza",
      cuisine:["xyz"],
      isPro:false,
      isOff:true,
      restaurantReviewValue:3.4,
      averageCost:45
    },
    {
      _id:"123",
      images:[
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",

      ],
      name :"Pizza",
      cuisine:["xyz"],
      isPro:false,
      isOff:true,
      restaurantReviewValue:3.4,
      averageCost:45
    },
    {
      _id:"123",
      images:[
        "https://b.zmtcdn.com/data/pictures/chains/8/6506108/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp",

      ],
      name :"Pizza",
      cuisine:["xyz"],
      isPro:false,
      isOff:true,
      restaurantReviewValue:3.4,
      averageCost:45
    }
  ]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-2xl md:font-semibold">
        Dilavery Resturnt in NCR
      </h1>
      <div className="flex justify-between flex-wrap">
        {ResturntList.map(resturant=>(
          <RestaurantCard{...resturant} key={resturant._id}/>
        ))}
      </div>
    </>
  );
}

export default Delivery;

// {
//   restaurants: {
//       restaurants: [
//           {
//               "_id": "61619f4fa8bb5a753a157e5c",
//               "name": "Domino's Pizza",
//               "city": "NCR",
//               "address": "61/34, 1st Floor, New Rohtak Road, Karol Bagh, New Delhi",
//               "mapLocation": "28.6581637791,77.1935084090",
//               "cuisine": [
//                   "Pizza",
//                   "Fast Food",
//                   "Desserts",
//                   "Beverages"
//               ],
//               "restaurantTimings": "11am - 11pm",
//               "contactNumber": 918130039690,
//               "website": "dominos.com",
//               "popularDishes": [
//                   "Farmhouse",
//                   "Veg Extravaganza",
//                   "Garlic Breadsticks"
//               ],
//               "averageCost": 300,
//               "amenties": [
//                   "Parking",
//                   "AC",
//                   "Rest Room",
//                   "Free WIFI"
//               ],
//               "menuImages": "6161a397a8bb5a753a157e5d",
//               "menu": "6166f8b0db8b2b72dd9de1d4",
//               "reviews": [
//                   "61619f4fa8bb5a753a157e5c"
//               ],
//               "photos": "6161a397a8bb5a753a157e5d"
//           },

//       ]
//   }
// }
