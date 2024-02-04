import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../components/objects/book";
import shortid from "shortid";

const initialState = {
  value: {
    barber: [],
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    chooseBarber: (state, action) => {
      const selectedBarber = book.find(
        (barber) => barber.id === action.payload
      );
      state.value.barber.push({
        ...book,
        selectedBarber,
        id: shortid.generate(),
      });
    },
    resetBarber: (state) => {
      state.value.barber = initialState.value.barber;
    },
  },
});

export const { chooseBarber, resetBarber } = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
