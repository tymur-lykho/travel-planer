import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "markers",
  initialState: {
    items: [],
  },
  reducers: {
    addMarker: (state, action) => {
      const isAdded = state.items.some(
        (item) =>
          item.lat === action.payload.lat && item.lng === action.payload.lng
      );
      if (!isAdded) {
        state.items.push(action.payload);
      }
      return state;
    },
    deleteMarker: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    renameMarker: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.name };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addMarker, deleteMarker, renameMarker } = slice.actions;
export default slice.reducer;
