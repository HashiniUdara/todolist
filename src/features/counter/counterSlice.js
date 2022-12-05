import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:0
}

export const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{ // these are action creators
      state.count += 1;
    },
    decrement:(state)=>{ // these are action creators
      state.count -= 1;
    },
    reset: (state) => { // these are action creators
      state.count = 0;
    },
    incrementByAmount:(state, action) => { // these are action creators
      state.count += action.payload;
    }
  }
});

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;