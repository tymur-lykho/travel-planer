import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    category: "",
  },
  reducers: {
    changeNameFilters: (state, action) => {
      state.name = action.payload;
    },
    changeCategoryFilters: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeNameFilters, changeCategoryFilters } = slice.actions;
export default slice.reducer;
