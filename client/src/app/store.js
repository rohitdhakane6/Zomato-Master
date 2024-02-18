import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer, { fetchRestaurants, fetchRestaurantByID, searchRestaurants } from "../features/resturant/restaurantSlice";
import imageReducer, { fetchImageURL } from "../features/image/imageSlice";
import ReviewSlice,{getReviews,postReview} from '../features/Reviews/ReviewSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    image: imageReducer,
    review:ReviewSlice,
  },
});

export { fetchRestaurants, fetchRestaurantByID, searchRestaurants, fetchImageURL,getReviews,postReview };

export default store;
