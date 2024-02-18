import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-stars"
// import ReactStars from "react-rating-stars-component";

// components
import { NextArrow, PrevArrow } from "../CarouselArrow";
import SimilarRestaurantCard from "./SimilarRestaurantCard";
import ReviewCard from "./Reviews/ReviewCard.jsx";
import Menu from "./Menu";
import MapView from "./MapView";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../app/store.js";
// import MapView from "./MapView";

function Overview() {
  const dispatch =useDispatch();
  const restaurant = useSelector((state) => state.restaurant.restaurantdata);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (restaurant) {
      dispatch(getReviews(restaurant?._id)).then((data) => {
        setReviews(data.payload.reviews);
      });
    }
  }, [restaurant]);

  
  const { id } = useParams();
  const cuisine = ["pizza", "burger", "sandwich"];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  //   "1234324234.343,23414324214.243"
  //   mapAddress?.split(",")   // ["1234324234.343", "23414324214.243"]
  //   map((item) => parseFloat(item)); // [1234324234.343, 23414324214.243]
  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <Menu />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {restaurant.cuisine?.map((cuisineName, index) => (
              <span
                key={index}
                className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
              >
                {cuisineName}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="mb-1 font-bold">
              People Say This Place Is Known For
            </h4>
            <h5 className="text-gray-500">
              Delivery Timing, Presentation, Best Place, Prices, Timely Service,
              Ambiance
            </h5>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>{restaurant.averageCost} for one order (approx.)</h6>
            <small className="text-gray-500 block">
              Exclusive of applicable taxes and cahrges, if any
            </small>
            <small className="text-gray-500 border-b border-dashed">
              How do we calculate cost for two?
            </small>
          </div>

          <div className="flex flex-col">
            <div className="my-4">
              <h4 className="text-lg font-medium">
                Rate your delivery experience
              </h4>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              {reviews.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </div>
            <div className="my-4">
              <h4 className="text-lg font-medium">Similar Restaurants</h4>
              <div>
                <Slider {...settings}>
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="restaurant Name"
                  />
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="restaurant Name"
                  />
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                  <SimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                    title="tea"
                  />
                </Slider>
              </div>
            </div>
            <div className="my-4 w-full md:hidden flex flex-col gap-4">
              <MapView
                title="McDonald's"
                phno="+919234345634"
                mapLocation={getLatLong("18.71462528212651, 73.65268914913764")}
                address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
              />
            </div>
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white p-3 shadow-md flex-col gap-4"
        >
          <MapView
            title="McDonald's"
            phno="+91 9234345634"
            mapLocation={getLatLong("18.71462528212651, 73.65268914913764")}
            address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
          />
        </aside>
      </div>
    </>
  );
}

export default Overview;
