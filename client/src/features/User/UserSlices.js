import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getUser = createAsyncThunk("User/GetUSer", async (Id) => {
    try {
        const response = await axios.get(`http://localhost:8080/user/${Id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const getSelf = createAsyncThunk("User/getSelf", async (Id) => {
    try {
        const response = await axios.get(`http://localhost:8080/user`);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const clerUser = createAsyncThunk("User/clerUser", async () => {
    try {
        return {};
    } catch (error) {
        throw error;
    }
})

const initialState = {
    user: {}
}
const UserSlice = createSlice({
    name: 'user',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSelf.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(clerUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },

})

export default UserSlice.reducer;
