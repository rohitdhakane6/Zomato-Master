import React, { useState, useEffect } from "react";

// redux
// import { useDispatch, useSelector } from "react-redux";
// import { getReviews } from "../../../redux/reducers/review/review.action";

// components
import ReviewCard from "./ReviewCard.jsx";
import AddReviewCard from "./AddReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../app/store.js";

function Reviews() {
  const [reviews, setReviews] = useState([]);
    const dispatch = useDispatch();

    const restaurant = useSelector((state) => state.restaurant.restaurantdata);

    useEffect(() => {
      if (restaurant) {
        dispatch(getReviews(restaurant?._id)).then((data) => {
          setReviews(data.payload.reviews);
        });
      }
    }, [restaurant]);

  return (
    <>
      <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden mb-4">
            <AddReviewCard />
          </div>
          {reviews.map((review,id) => (
            <ReviewCard {...review} key={id}/>
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-4 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
