import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../components/objects/book";
import shortid from "shortid";
import services from "../components/objects/services";
import addedServices from "../components/objects/addedServices";

const initialState = {
  value: {
    barber: [],
    filteredBarber: [],
    showInput: false,
    service: [],
    addedService: [],
    selectedRadio: false,
    selectedAddedRadio: false,
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
    addedService: (state, action) => {
      state.value.addedService = addedServices.filter(
        (service) => service.id === action.payload
      );
    },
    selectedAddedRadio: (state, action) => {
      state.value.selectedAddedRadio = action.payload;
    },
    selectedRadio: (state, action) => {
      state.value.selectedRadio = action.payload;
    },
  },
});

export const {
  chooseBarber,
  showInput,
  service,
  addedService,
  selectedAddedRadio,
  selectedRadio,
} = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
