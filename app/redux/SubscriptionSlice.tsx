import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    isPremium: null,
  },
  reducers: {
    setPremium(state, actions) {
      state.isPremium = actions.payload;
    },
    resetPremium(state) {
      state.isPremium = null;
    },
  },
});
export const { setPremium, resetPremium } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
