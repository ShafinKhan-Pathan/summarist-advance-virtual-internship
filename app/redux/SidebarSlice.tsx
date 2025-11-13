import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isOpen: boolean;
}
const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSideBar: (state) => {
      state.isOpen = true;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSideBar, openSideBar, closeSideBar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
