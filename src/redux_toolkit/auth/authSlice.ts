import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "http://localhost:5000"

// create user (signup)
export const createUser = createAsyncThunk("createUser", async () => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/todos',
        // data: userData
        method: "GET"
    })
    const json = res.data;
    return json;
})

export interface authState {
    isLoading: boolean,
    data: any,
    error: boolean
}

const initialState: authState = {
    isLoading: true,
    data: null,
    error: false
}

export const authSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {

    },
    extraReducers: (buider) => {
        buider.addCase(createUser.pending, (state, action) => {
            state.isLoading = true;
        })
        buider.addCase(createUser.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.data = action.payload;
            state.error = false;
            console.log(action.payload)
        })
        buider.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })

    }
})

export default authSlice.reducer;
