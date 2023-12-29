import { createSlice } from "@reduxjs/toolkit";
import { sneakers } from "../data/sneakers";
const initialState = {
  sneakers,
  priceFilter: null,
  activeFilters: [],
  filteredSneakers: [],
};
const filterSneakersByPrice = (state) => {
  let filteredSneakers = [];
  if (state.activeFilters.length > 0)
    state.filteredSneakers.forEach((sneaker) => {
      if (sneaker.price <= state.priceFilter) {
        filteredSneakers.push(sneaker);
      }
    });
  else {
    state.sneakers.forEach((sneaker) => {
      if (sneaker.price <= state.priceFilter) {
        filteredSneakers.push(sneaker);
      }
    });
  }
  return filteredSneakers;
};
const filterSneakers = (state) => {
  let filteredSneakers = [...state.sneakers];

  state.activeFilters.forEach(({ filter, value }) => {
    if (filter === "brand") {
      filteredSneakers = filteredSneakers.filter(
        (sneaker) => sneaker[filter] === value
      );
    } else if (filter === "gender" || filter === "size") {
      filteredSneakers = filteredSneakers.filter((sneaker) =>
        sneaker[filter].includes(value)
      );
    }
  });

  return filteredSneakers;
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      const { filter, value } = action.payload;
      state.activeFilters.push({ filter, value });
      state.filteredSneakers = filterSneakers(state);
    },
    removeFilter: (state, action) => {
      const { filter, value } = action.payload;
      state.activeFilters = state.activeFilters.filter(
        (filter) => filter.value !== value
      );
      state.filteredSneakers = filterSneakers(state);
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
      state.filteredSneakers = filterSneakersByPrice(state);
    },
    clearFilters: (state) => {
      state.activeFilters = [];
      state.priceFilter = null;
      state.filteredSneakers = [];
    },
  },
});
export const { setPriceFilter, clearFilters, addFilter, removeFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
