import React, { useMemo } from "react";
import { useSpring, animated } from "react-spring";

import styles from "./Card.module.css";

export default function Card({ value, isFlipped, selectCard }) {
  const isRevealed = useMemo(() => {
    if (typeof value === "object") {
      return true;
    }

    return isFlipped;
  }, [isFlipped, value]);
  const { transform, opacity } = useSpring({
    opacity: isRevealed ? 1 : 0,
    transform: `perspective(600px) rotateX(${isRevealed ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const symbol = useMemo(() => {
    if (typeof value === "object") {
      return value.value;
    }
    return value;
  }, [value]);

  return (
    <div
      className={`${styles.container} ${value.disabled && styles.disabled}`}
      onClick={selectCard}
    >
      <animated.div
        className={`${styles.card} ${styles.front}`}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <animated.div
        className={`${styles.card} ${styles.back}`}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        {symbol}
      </animated.div>
    </div>
  );
}
