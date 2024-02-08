import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../components/objects/book";
import shortid from "shortid";
import services from "../components/objects/services";

const initialState = {
  value: {
    barber: [],
    filteredBarber: [],
    showInput: false,
    service: [],
    addedService: [],
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
    showInput: (state, action) => {
      state.value.showInput = action.payload;
    },
    service: (state, action) => {
      state.value.service = services.filter(
        (service) => service.id === action.payload
      );
    },
  },
});

export const { chooseBarber, showInput, service } = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
