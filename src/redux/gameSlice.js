import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    score: 0,
    finish: false,
    
  },
  reducers: {
    updateScore: (state, action) => {
      state.score = action.payload;
    },

    updateFinish: (state, action) => {
      state.finish = action.payload;
    },

    resetGame: (state) => {
      state.score = 0;
      state.finish = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateScore, updateFinish, resetGame } = gameSlice.actions

export default gameSlice.reducer