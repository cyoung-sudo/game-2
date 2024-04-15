import { configureStore } from '@reduxjs/toolkit'
// Slices
import boardReducer from "./boardSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
})