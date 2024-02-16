import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creators using createAsyncThunk
export const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurant', async (city) => {
  try {
    const response = await axios.get(`http://localhost:8080/restaurant/?city=${city}`);
    return response.data; // Assuming the response has a 'restaurants' property
  } catch (error) {
    throw error;
  }
});

export const fetchRestaurantByID = createAsyncThunk('restaurant/fetchRestaurantByID', async (_id) => {
  try {
    const response = await axios.get(`http://localhost:8080/restaurant/${_id}`);
    return response.data.restaurant; // Assuming the response has a 'restaurant' property
  } catch (error) {
    throw error;
  }
});

export const searchRestaurants = createAsyncThunk('restaurant/searchRestaurants', async (searchString) => {
  try {
    const response = await axios.get(`http://localhost:8080/restaurant/search/${searchString}`);
    return response.data; // Assuming the response has a 'restaurants' property
  } catch (error) {
    throw error;
  }
});

const initialState = {
  restaurants: [],
  restaurantdata: {},
  searchedRestaurants: [],
  fetchRestaurant: { status: 'idle', error: null },
  fetchRestaurantByID: { status: 'idle', error: null },
  searchRestaurants: { status: 'idle', error: null },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.fetchRestaurant.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.restaurants = action.payload;
        state.fetchRestaurant.status = 'succeeded';
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.fetchRestaurant.status = 'failed';
        state.fetchRestaurant.error = action.error.message;
      })
      .addCase(fetchRestaurantByID.pending, (state) => {
        state.fetchRestaurantByID.status = 'loading';
      })
      .addCase(fetchRestaurantByID.fulfilled, (state, action) => {
        state.restaurantdata = action.payload;
        state.fetchRestaurantByID.status = 'succeeded';
      })
      .addCase(fetchRestaurantByID.rejected, (state, action) => {
        state.fetchRestaurantByID.status = 'failed';
        state.fetchRestaurantByID.error = action.error.message;
      })
      .addCase(searchRestaurants.pending, (state) => {
        state.searchRestaurants.status = 'loading';
      })
      .addCase(searchRestaurants.fulfilled, (state, action) => {
        state.searchedRestaurants = action.payload;
        state.searchRestaurants.status = 'succeeded';
      })
      .addCase(searchRestaurants.rejected, (state, action) => {
        state.searchRestaurants.status = 'failed';
        state.searchRestaurants.error = action.error.message;
      })
      .addDefaultCase((state) => state);
  },
});

export default restaurantSlice.reducer;
