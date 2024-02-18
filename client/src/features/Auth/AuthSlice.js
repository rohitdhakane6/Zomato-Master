import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signInUser = createAsyncThunk('auth/signInUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/signin', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const signUpUser = createAsyncThunk('auth/signUpUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const signOutUser = createAsyncThunk('auth/signOutUser', async () => {
  // Implement the logic for signing out, if needed
  // For example, making a request to the server to invalidate the session
  return {}; // Placeholder for now
});

const initialState = {
  user: null,
  authenticationStatus: { status: 'idle', error: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.authenticationStatus.status = 'loading';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authenticationStatus.status = 'succeeded';
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.authenticationStatus.status = 'failed';
        state.authenticationStatus.error = action.error.message;
      })
      .addCase(signUpUser.pending, (state) => {
        state.authenticationStatus.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authenticationStatus.status = 'succeeded';
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.authenticationStatus.status = 'failed';
        state.authenticationStatus.error = action.error.message;
      })
      .addCase(signOutUser.pending, (state) => {
        // You can add loading state for sign out if needed
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null; // Reset user state on sign out
        state.authenticationStatus.status = 'idle';
      });
  },
});

export default authSlice.reducer;
