import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signInUser = createAsyncThunk('auth/signInUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('auth/signin', { credintional: userData });
    const { token } = response.data;
    localStorage.setItem('ZomatoUser', token);
    window.location.reload();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : 'An error occurred');
  }
});

export const signUpUser = createAsyncThunk('auth/signUpUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('auth/signup', { credintional: userData });
    const { token } = response.data;
    localStorage.setItem('ZomatoUser', token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : 'An error occurred');
  }
});

export const googleAuth = createAsyncThunk('auth/googleAuth', async (token) => {
  try {
    localStorage.setItem('ZomatoUser', token);
  } catch (error) {
    throw error;
  }
});

export const signOutUser = createAsyncThunk('auth/signOutUser', async () => {
  localStorage.removeItem('ZomatoUser');
  window.location.href = process.env.REACT_APP_CLIENT_BASEURL;
     return {};
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
        state.authenticationStatus.error = action.payload ? action.payload.error : 'An error occurred';
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
        state.authenticationStatus.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(signOutUser.pending, (state) => {
        // You can add loading state for sign out if needed
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
        state.authenticationStatus.status = 'idle';
      });
  },
});

export default authSlice.reducer;
