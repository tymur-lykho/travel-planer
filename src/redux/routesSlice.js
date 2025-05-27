import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "routes",
  initialState: {
    items: [],
  },
  reducers: {
    addRoute: (state, action) => {
      state.items.push(action.payload);
    },
    deleteRoute: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addRoute, deleteRoute } = slice.actions;
export default slice.reducer;
