import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:null
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)
    }
})