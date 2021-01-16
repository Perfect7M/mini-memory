import { createSlice } from "@reduxjs/toolkit";

export const joinSlice = createSlice({
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
      console.log(action);
      state.nickname = action.payload;
    },
  },
});

export const { addPoints, setNickname } = joinSlice.actions;

export const selectNickname = (state) => state.player.nickname;
export const selectPoints = (state) => state.player.points;

export default joinSlice.reducer;
