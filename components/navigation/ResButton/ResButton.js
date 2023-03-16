import { useState } from "react";
import styles from "./ResButton.module.css";

const ResButton = ({ isClicked, setIsClicked }) => {
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={styles.resNavButton}
    >
      <div className={isClicked ? styles.changeBar1 : styles.bar1}></div>
      <div className={isClicked ? styles.changeBar2 : styles.bar2}></div>
      <div className={isClicked ? styles.changeBar3 : styles.bar3}></div>
    </div>
  );
};

export default ResButton;
