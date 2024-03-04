import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creators using createAsyncThunk
export const fetchImageURL = createAsyncThunk('image/fetchImageURL', async (_id) => {
  try {
    const response = await axios.get(`image/${_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  image: {},
  fetchImageURL: { status: 'idle', error: null },
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageURL.pending, (state) => {
        state.fetchImageURL.status = 'loading';
      })
      .addCase(fetchImageURL.fulfilled, (state, action) => {
        state.image = action.payload;
        state.fetchImageURL.status = 'succeeded';
      })
      .addCase(fetchImageURL.rejected, (state, action) => {
        state.fetchImageURL.status = 'failed';
        state.fetchImageURL.error = action.error.message;
      })
      .addDefaultCase((state) => state);
  },
});

export default imageSlice.reducer;
