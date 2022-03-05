import { createSlice } from "@reduxjs/toolkit";


export const ApiSlice = createSlice({
    name: 'data',
    initialState: {
      data:"",
    },
    reducers: {
      addData: (state,action) => {
       
        state.data = action.payload
      },
      
    },
  })

  export const {addData} = ApiSlice.actions
  

  export const selectData = (state) => state.ApiSlice.data

  export default ApiSlice.reducer
  