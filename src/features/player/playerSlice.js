import { createSlice } from "@reduxjs/toolkit";

export const joinSlice = createSlice({
  name: "player",
  initialState: {
    nickname: "",
    points: 0,
    board: [],
  },
  reducers: {
    addPoints: (state, action) => {
      state.points += action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
  },
});

export const { addPoints, setNickname, setBoard } = joinSlice.actions;

export const selectNickname = (state) => state.player.nickname;
export const selectPoints = (state) => state.player.points;
export const selectBoard = (state) => state.player.board;

export default joinSlice.reducer;
