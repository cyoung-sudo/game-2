import { configureStore } from '@reduxjs/toolkit'
// Slices
import boardReducer from "./boardSlice";
import playerReducer from "./playerSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer
  },
})