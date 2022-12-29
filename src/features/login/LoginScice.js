import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserName:'',
  Password:''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    checkUserName : (state, action) => {}
  },
  // extraReducers:{}
})

export const { checkUserName } = loginSlice.actions

export default loginSlice.reducer