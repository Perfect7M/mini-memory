import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    nickname: "",
    points: 0,
  },
  reducers: {
    addPoints: (state, action) => {
      state.points += action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { addPoints, setNickname, setBoard } = playerSlice.actions;

export const selectNickname = (state) => state.player.nickname;
export const selectPoints = (state) => state.player.points;

export default playerSlice.reducer;
