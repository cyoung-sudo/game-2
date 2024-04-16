import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    board: [
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["_", "_", "_", "_", "_", "P", "_", "_", "_", "_", "_"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
    ],
  },
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    resetBoard: (state) => {
      state.board = [
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["_", "_", "_", "_", "_", "P", "_", "_", "_", "_", "_"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W", "_", "W", "W", "W", "W", "W"],
      ];
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBoard, resetBoard } = boardSlice.actions

export default boardSlice.reducer