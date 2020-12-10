import React, { useEffect } from "react";
import styles from "./Coin.module.css";

const Coin = ({ coin, image, amount }) => {
  return (
    <div className={styles.coin}>
      <p className={styles.amount}>{amount}</p>
      <img className={styles.coin_img} src={image} alt={coin} />
    </div>
  );
};

export default Coin;
