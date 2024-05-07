import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";

const reducer = (state = {colorScheme: "light"}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, colorScheme: action.payload};
    default:
      return state;
  }
};

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore);
