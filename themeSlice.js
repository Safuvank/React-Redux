import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    lightTheme: (state) => {
      state.theme = "light"
    },
    darkTheme: (state) => {
      state.theme = "dark";
    },
  },
});

export const { lightTheme, darkTheme } = themeSlice.actions;
export default themeSlice.reducer;
