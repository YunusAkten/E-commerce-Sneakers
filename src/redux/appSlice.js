//redux files not written in typescript because it causes errors in the app idk why
import { sneakers } from "../data/sneakers";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sneakers,
  favs: [],
};

//check if localstorage is empty for favs, if not, add the items to the state
if (localStorage.getItem("favs") === null) {
  localStorage.setItem("favs", JSON.stringify([]));
} else if (localStorage.getItem("favs") !== null) {
  let favs = JSON.parse(localStorage.getItem("favs"));
  favs.forEach((item) => {
    initialState.favs.push(item);
  });
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToFavs: (state, action) => {
      state.favs.push(action.payload);
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },
    removeFromFavs: (state, action) => {
      state.favs = state.favs.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },
  },
});
export const { addToFavs, removeFromFavs } = appSlice.actions;
export default appSlice.reducer;
