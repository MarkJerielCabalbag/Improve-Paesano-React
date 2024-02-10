import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../components/objects/book";
import shortid from "shortid";
import services from "../components/objects/services";
import addedServices from "../components/objects/addedServices";
import time from "../components/objects/time";

const initialState = {
  value: {
    barber: [],
    filteredBarber: [],
    showInput: false,

    //name input
    clientName: "",

    //added name input
    companionName: "",

    //date input
    date: "",

    //time input
    timeValue: [],

    //tel input
    phoneNumber: [],

    //service radio input
    service: [],

    //added service radio input
    addedService: [],

    selectedRadio: false,

    selectedAddedRadio: false,

    //push all the input values here
    addAllInputValue: [],
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
    selectedAddedRadio: (state, action) => {
      state.value.selectedAddedRadio = action.payload;
    },
    selectedRadio: (state, action) => {
      state.value.selectedRadio = action.payload;
    },

    selectedTime: (state, action) => {
      state.value.timeValue = time.filter((time) => time.id === action.payload);
    },

    clientName: (state, action) => {
      state.value.clientName = action.payload;
    },

    companion: (state, action) => {
      state.value.companionName = action.payload;
    },

    date: (state, action) => {
      state.value.date = action.payload;
    },

    time: (state, action) => {
      state.value.time = action.payload;
    },

    phoneNumber: (state, action) => {
      state.value.phoneNumber = action.payload;
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
  },
});

export const {
  chooseBarber,
  showInput,
  service,
  addedService,
  selectedAddedRadio,
  selectedRadio,
  selectedTime,
  addAllInputValue,

  clientName,
  companion,

  date,
  phoneNumber,
} = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
