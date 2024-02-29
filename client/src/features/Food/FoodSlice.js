import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creators using createAsyncThunk
export const getFoodList = createAsyncThunk('food/foodlist', async (_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/menu/list/${_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const getfood = createAsyncThunk('fodd/food', async (_id) => {
    try {
        const response = await axios.get(`http://localhost:8080/food/${_id}`);
        return response.data.foods;
    } catch (error) {
        throw error;
    }
});


const initialState = {
    menu: {},

};

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFoodList.fulfilled, (state, action) => {
                state.menu = action.payload;

            })
            .addDefaultCase((state) => state);
    },
});

export default foodSlice.reducer;
