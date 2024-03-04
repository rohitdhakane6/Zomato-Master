// store.js
import { configureStore } from '@reduxjs/toolkit';
import RestaurantReducer, { fetchRestaurants, fetchRestaurantByID, searchRestaurants } from "../features/restaurantSlice";
import ImageReducer, { fetchImageURL } from "../features/imageSlice";
import ReviewReducer, { getReviews, postReview } from '../features/ReviewSlice';
import UserReducer, { getSelf, getUser, clerUser } from '../features/UserSlices';
import FoodReducer, { getFoodList, getfood } from '../features/FoodSlice';
import AuthReducer, { signInUser, signOutUser, signUpUser, googleAuth } from '../features/AuthSlice';
import CartReducer, { addToCart, removeFromCart, incrementCartItem, decrementCartItem, clearCart } from '../features/cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('zomatocart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading cart state from local storage:', error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('zomatocart', serializedState);
  } catch (error) {
    console.error('Error saving cart state to local storage:', error);
  }
};

const preloadedState = {
  cart: loadState(),
};

const store = configureStore({
  reducer: {
    restaurant: RestaurantReducer,
    image: ImageReducer,
    review: ReviewReducer,
    user: UserReducer,
    food: FoodReducer,
    auth: AuthReducer,
    cart: CartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export {
  fetchRestaurants, fetchRestaurantByID, searchRestaurants,
  fetchImageURL,
  getReviews,
  postReview,
  getUser,
  getSelf,
  clerUser,
  getFoodList,
  getfood,
  signInUser,
  signOutUser,
  signUpUser,
  googleAuth,
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
};

export default store;
