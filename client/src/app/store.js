import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer, { fetchRestaurants, fetchRestaurantByID, searchRestaurants } from "../features/resturant/restaurantSlice";
import imageReducer, { fetchImageURL } from "../features/image/imageSlice";
import ReviewSlice, { getReviews, postReview } from '../features/Reviews/ReviewSlice';
import UserSlices, { getSelf, getUser, clerUser } from '../features/User/UserSlices';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    image: imageReducer,
    review: ReviewSlice,
    user:UserSlices,
  },
});

export { fetchRestaurants, fetchRestaurantByID, searchRestaurants };
export { fetchImageURL, getReviews, postReview }
export { getUser, getSelf, clerUser };
export default store;
