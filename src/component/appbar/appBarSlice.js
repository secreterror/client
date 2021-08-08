import { createSlice } from "@reduxjs/toolkit";

export const appBarSlice = createSlice({
  name: "appBar",
  initialState: {
    isDrawerOpen:false,
  },
  reducers: {
    openDrawer: (state, action) => {
      state.isDrawerOpen = action.payload.set;
    },
  },
});
export const { openDrawer } = appBarSlice.actions;
export default appBarSlice.reducer;
