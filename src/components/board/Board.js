import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useImmer } from "use-immer";

import {
  addPoints,
  setBoard,
  selectBoard,
} from "../../features/player/playerSlice";
import { generateCards, DEFAULT_CONFIG } from "./Board.utils";

export default function Board({ size, config = DEFAULT_CONFIG }) {
  const board = useSelector(selectBoard);
  const [cards, setCards] = useImmer(() =>
    board.length === 0 ? generateCards(size) : board
  );
  const [selectedCard, setSelectedCard] = useImmer({ card: "", index: -1 });
  const dispatch = useDispatch();
  const history = useHistory();

  const selectCard = (card, index) => {
    if (selectedCard.index === -1) {
      setSelectedCard((draft) => {
        draft.card = card;
        draft.index = index;
      });
      return;
    }

    if (selectedCard.card !== card) {
      dispatch(addPoints(config.wrongAnswerPoints));
      clearSelection();
      return;
    }

    setCards((draft) => {
      draft.splice(selectedCard.index, 1);

      const leftElementIndex = draft.findIndex(
        (currentCard) => currentCard === card
      );

      if (leftElementIndex !== -1) {
        draft.splice(leftElementIndex, 1);
      }
    });
    dispatch(addPoints(config.correctAnswerPoints));
    clearSelection();
  };

  const clearSelection = () => {
    setSelectedCard((draft) => {
      draft.card = "";
      draft.index = -1;
    });
  };

  useEffect(() => {
    if (cards.length === 0) {
      // TODO save results and clean points
      history.push("/leaderboards");
    }

    dispatch(setBoard(cards));
  }, [cards, dispatch, history]);

  return (
    <div>
      {cards.map((card, i) => {
        return (
          <button
            key={`${card}_${i}`}
            type="button"
            onClick={() => selectCard(card, i)}
          >
            {card}
          </button>
        );
      })}
    </div>
  );
}

Board.propTypes = {
  size: PropTypes.number.isRequired,
  config: PropTypes.shape({
    wrongAnswerPoints: PropTypes.number.isRequired,
    correctAnswerPoints: PropTypes.number.isRequired,
  }),
};
