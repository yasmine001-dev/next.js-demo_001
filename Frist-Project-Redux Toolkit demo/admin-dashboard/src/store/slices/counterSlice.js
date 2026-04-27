import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // type name+increaseAction
  name: "counter", // create Action Type //automatic
  initialState: {
    count: 0,
    name: "ahmed",
  },
  //fire action
  reducers: {
    increaseAction: (state, action) => {
      console.log(action);
      console.log(state);
      state.count++;
    },

    decreaseAction: (state, action) => {
      state.count--;
    },
  },
});

export const { increaseAction, decreaseAction } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
