import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:'nameTrainer',
    initialState:' ',
    reducers:{
        SetNameTrainer:(state,action) => action.payload
    }
})

export const{SetNameTrainer} = nameSlice.actions

export default nameSlice.reducer