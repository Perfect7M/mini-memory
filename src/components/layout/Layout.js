import React from "react";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <div className={styles.attribution}>
        Photo by{" "}
        <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Markus Spiske
        </a>{" "}
        or{" "}
        <a href="https://unsplash.com/@sumekler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Jarosław Kwoczała
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/bet?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}
