import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// create user (signup)
export const createUser = createAsyncThunk("createUser", async (data: any, thunkApi) => {
    try {
        const res = await axios({
            url: '/api/users',
            method: "POST",
            data: data
        });
        const json = await res.data;
        return json;
    } catch (error) {
        console.log(error)
    }
})


//Login User 
export const loginUser = createAsyncThunk("login",async (data:any,thunkApi)=>{
    try {
        const res = await axios({
            url:'/api/users/login',
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            data:data
        })
        const json = res.data;
        return json;
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: "auth-slice",
    initialState: {
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload && action.payload.message) {
                    toast.success(action.payload.message);
                }
            }),
            builder.addCase(createUser.rejected, (state, action: any) => {
                state.isLoading = false;
                if (action.payload && action.payload.error) {
                    toast.error(action.payload.error)
                }

            }),
            builder.addCase(loginUser.pending,(state)=>{
                state.isLoading=true;
            }),
            builder.addCase(loginUser.fulfilled,(state,action)=>{
                state.isLoading=false;
                if(action.payload) {
                    if(action.payload.success){
                        localStorage.setItem("token",action.payload.token);
                    }else{
                        toast.error(action.payload.error)
                    }
                }
            }),
            builder.addCase(loginUser.rejected,(state,action:any)=>{
                state.isLoading=false;
                if(action.payload){
                    toast.error(action.payload.error)
                }
            }),
            builder.addMatcher(createUser.settled, (state, action) => {
                state.isLoading = false;
                if (action.payload && action.payload.error) {
                    toast.error(action.payload.error)
                }
            })

    }
})

export default authSlice.reducer;
