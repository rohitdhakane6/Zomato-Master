import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer, { fetchRestaurants, fetchRestaurantByID, searchRestaurants } from "../features/resturant/restaurantSlice";
import imageReducer, { fetchImageURL } from "../features/image/imageSlice";
import ReviewSlice, { getReviews, postReview } from '../features/Reviews/ReviewSlice';
import UserSlices, { getSelf, getUser, clerUser } from '../features/User/UserSlices';
import FoodSlice ,{getFoodList,getfood} from '../features/Food/FoodSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    image: imageReducer,
    review: ReviewSlice,
    user:UserSlices,
    food:FoodSlice
  },
});

export { fetchRestaurants, fetchRestaurantByID, searchRestaurants };
export { fetchImageURL, getReviews, postReview }
export { getUser, getSelf, clerUser };
export {getFoodList,getfood}
export default store;
