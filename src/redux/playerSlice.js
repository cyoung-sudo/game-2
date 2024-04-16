import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    health: 3,
    swords: 0,
    bombs: 0
  },
  reducers: {
    updateHealth: (state, action) => {
      state.health = action.payload;
    },

    updateSwords: (state, action) => {
      state.swords = action.payload;
    },

    updateBombs: (state, action) => {
      state.bombs = action.payload;
    },

    resetPlayer: (state) => {
      state.health = 3;
      state.swords = 0;
      state.bombs = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateHealth, updateSwords, updateBombs, resetPlayer } = playerSlice.actions

export default playerSlice.reducer