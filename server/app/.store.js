import pkg from "@reduxjs/toolkit";
const { configureStore } = pkg;

import exampleReducer from "./redux-reducers/example.reducer.js";

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
