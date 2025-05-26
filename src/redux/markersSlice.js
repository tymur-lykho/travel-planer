import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "markers",
  initialState: {
    items: [],
  },
  reducers: {
    addMarker: (state, action) => {
      state.items.push(action.payload);
    },
    deleteMarker: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addMarker, deleteMarker } = slice.actions;
export default slice.reducer;
