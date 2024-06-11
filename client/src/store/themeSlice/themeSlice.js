import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme : (state, action) => {
      if(action.payload){
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        state.darkMode = true;
        }else{
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
          state.darkMode = false;
      }
    }
  }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;