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
    clientNameValue: "",

    //added name input
    companionNameValue: "No companion",

    //date input
    dateValue: "",

    //time input
    timeValue: "",

    //tel input
    phoneNumberValue: "",

    //service radio input
    serviceValue: [],

    selectedServiceValue: "",

    selectedAddedServiceValue: "",

    //added service radio input
    addedServiceValue: [],

    selectedRadio: false,

    selectedAddedRadio: false,

    //push all the input values here
    addAllInputValue: [],

    //close modal
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
      state.value.clientNameValue = action.payload;
    },

    companion: (state, action) => {
      state.value.companionNameValue = action.payload;
    },

    date: (state, action) => {
      state.value.dateValue = action.payload;
    },

    times: (state, action) => {
      state.value.timeValue = action.payload;
    },

    phoneNumber: (state, action) => {
      state.value.phoneNumberValue = action.payload;
    },

    serviceSelected: (state, action) => {
      state.value.serviceValue = services.filter(
        (service) => service.id === action.payload
      );
    },
    addedService: (state, action) => {
      state.value.addedServiceValue = addedServices.filter(
        (service) => service.id === action.payload
      );
    },

    addAllValue: (state, action) => {
      state.value.addAllInputValue.push({
        ...action.payload,
        id: shortid.generate(),
      });
    },

    selectedService: (state, action) => {
      const selected = services.filter(
        (item) => item.service === action.payload
      );
      state.value.selectedServiceValue = selected;
    },
  },
});

export const {
  chooseBarber,
  showInput,
  serviceSelected,
  addedService,
  selectedAddedRadio,
  selectedRadio,
  selectedTime,
  addAllValue,
  selectedService,
  clientName,
  companion,
  times,
  date,
  phoneNumber,
} = bookSlice.actions;

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});
