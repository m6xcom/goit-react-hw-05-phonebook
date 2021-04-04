import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contacts } from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});
