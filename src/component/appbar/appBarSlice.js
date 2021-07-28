import { createSlice } from "@reduxjs/toolkit";

export const appBarSlice = createSlice({
  name: "appBar",
  initialState: {
    isDrawerOpen: true,
  },
  reducers: {
    openDrawer: (state, action) => {
      state.isDrawerOpen = action.payload.set;
    },
  },
});
export const { openDrawer } = appBarSlice.actions;
export default appBarSlice.reducer;
