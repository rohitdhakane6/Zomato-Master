import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer, { fetchRestaurants, fetchRestaurantByID, searchRestaurants } from "../features/resturant/restaurantSlice";
import imageReducer, { fetchImageURL } from "../features/image/imageSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    image: imageReducer,
  },
});

export { fetchRestaurants, fetchRestaurantByID, searchRestaurants, fetchImageURL };

export default store;
