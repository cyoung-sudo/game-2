import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    board: [
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["_", "_", "_", "_", "_", "P", "_", "_", "_", "_", "_"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
    ],
  },
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    resetBoard: (state) => {
      state.board = [
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["_", "_", "_", "_", "_", "P", "_", "_", "_", "_", "_"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
        ["R", "R", "R", "R", "R", "_", "R", "R", "R", "R", "R"],
      ];
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBoard, resetBoard } = boardSlice.actions

export default boardSlice.reducer