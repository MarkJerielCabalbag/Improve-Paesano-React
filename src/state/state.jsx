import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../components/objects/book";
import shortid from "shortid";

const initialState = {
  value: {
    barber: [],
    filteredBarber: [],
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    chooseBarber: (state, action) => {
      const chosenBarber = book.filter(
        (barber) => barber.id === action.payload
      );
      state.value.barber = chosenBarber;
    },

    filteredBarber: (state, action) => {
      state.value.barber = state.value.filteredBarber;
    },
  },
});

export const { chooseBarber, filteredBarber } = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
