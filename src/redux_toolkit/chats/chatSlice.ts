import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getting-users",(async()=>{
    const res = await axios({
        url:"/api/users",
        method:"GET"
    })
    return res?.data;
}))

export const chatSlice = createSlice({
    name:"chat",
    initialState:{
        loading:false
    },
    reducers:{}
})