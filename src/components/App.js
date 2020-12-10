import React, { useState, useEffect } from "react";
import Input from "./Input";
import Coin from "./Coin";
import styles from "./App.module.css";
import quarterSvg from "../svgs/quarter2.svg";
import dimeSvg from "../svgs/dime.svg";
import nickelSvg from "../svgs/nickel5.svg";
import pennySvg from "../svgs/penny.svg";

const App = () => {
  const [cents, setCents] = useState(0);
  const [coinType, setCoinType] = useState({});
  console.log(coinType, "coinType");
  useEffect(() => {
    function centsToCoins(cents) {
      const coins = [25, 10, 5, 1];

      let remainingCents = cents;

      let coinType = {
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
      };

      for (let coin of coins) {
        if (coin === 25 && remainingCents >= coin) {
          if (remainingCents % coin === 0) {
            coinType.quarter = remainingCents / coin;
            remainingCents = 0;
          } else {
            let remainder = remainingCents % coin;
            coinType.quarter = (remainingCents - remainder) / coin;
            remainingCents = remainder;
          }
        }

        if (coin === 10 && remainingCents >= coin) {
          if (remainingCents % coin === 0) {
            coinType.dime = remainingCents / coin;
            remainingCents = 0;
          } else {
            let remainder = remainingCents % coin;
            coinType.dime = (remainingCents - remainder) / coin;
            remainingCents = remainder;
          }
        }

        if (coin === 5 && remainingCents >= coin) {
          if (remainingCents % coin === 0) {
            coinType.nickel = remainingCents / coin;
            remainingCents = 0;
          } else {
            let remainder = remainingCents % coin;
            coinType.nickel = (remainingCents - remainder) / coin;
            remainingCents = remainder;
          }
        }

        if (coin === 1 && remainingCents >= coin) {
          if (remainingCents % coin === 0) {
            coinType.penny = remainingCents / coin;
            remainingCents = 0;
          } else {
            let remainder = remainingCents % coin;
            coinType.penny = (remainingCents - remainder) / coin;
            remainingCents = remainder;
          }
        }
      }

      setCoinType(coinType);
    }

    console.log(centsToCoins(cents));
  }, [cents]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>cents to coin</h2>
      <Input setCents={setCents} />
      <h2 className={styles.totalCents}>total cents: {cents}</h2>
      <div className={styles.coin_container}>
        <Coin coin="quarter" amount={coinType.quarter} image={quarterSvg} />
        <Coin coin="dime" amount={coinType.dime} image={dimeSvg} />
        <Coin coin="nickel" amount={coinType.nickel} image={nickelSvg} />
        <Coin coin="penny" amount={coinType.penny} image={pennySvg} />
      </div>
      <footer className={styles.footer}>created by oscar</footer>
    </div>
  );
};

export default App;
