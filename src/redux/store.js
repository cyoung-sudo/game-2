import { configureStore } from '@reduxjs/toolkit'
// Slices
import boardReducer from "./boardSlice";
import playerReducer from "./playerSlice";
import gameReducer from "./gameSlice";

export default configureStore({
  reducer: {
    board: boardReducer,
    player: playerReducer,
    game: gameReducer
  },
})