import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk("review/getReviews", async (resId) => {
  try {
    const response = await axios.get(`http://localhost:8080/reviews/${resId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const postReview = createAsyncThunk("review/postReview", async (reviewData) => {
  try {
    const response = await axios.post(`http://localhost:8080/reviews/new`, {reviewData:reviewData});
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        // Assuming the server responds with the updated list of reviews
        state.reviews = action.payload;
      });
  },
});

export default reviewSlice.reducer;
