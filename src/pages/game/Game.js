import React from "react";
import { useSelector } from "react-redux";
import Board from "../../components/board/Board";

import {
  selectNickname,
  selectPoints,
} from "../../features/player/playerSlice";

import styles from "./Game.module.css";

export default function Game() {
  const nickname = useSelector(selectNickname);
  const points = useSelector(selectPoints);

  return (
    <div className={styles.row}>
      <h1>
        Player: {nickname} {points}
      </h1>

      <Board size={4} />
    </div>
  );
}
