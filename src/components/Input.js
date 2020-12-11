import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";

const Input = ({ setCents }) => {
  const [dollar, setDollar] = useState("");

  console.log(dollar);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const onChangeValue = () => {
        let num = +dollar;
        num = parseFloat(num.toFixed(2));
        setCents(formatDollarsToCents(num));
      };
      onChangeValue();
    }, 100);
    return () => {
      clearTimeout(timerId);
    };
  }, [dollar, setDollar, setCents]);

  const formatDollarsToCents = function (value) {
    value = (value + "").replace(/[^\d.-]/g, "");
    if (value && value.includes(".")) {
      value = value.substring(0, value.indexOf(".") + 3);
    }

    return value ? Math.round(parseFloat(value) * 1) : 0;

    // times by 100 to get dollars
  };

  const onHandleInputChange = (e) => {
    let regex = /^(\d+)?([.]?\d{0,2})?$/;
    let value = e.target.value;
    if (value === "" || regex.test(value)) {
      setDollar(value);
    }
  };

  return (
    <div className={styles.container}>
      <input disabled className={styles.fake_input} value="$" />
      <input
        className={styles.input}
        placeholder="0.00"
        type="text"
        maxLength="2"
        value={dollar}
        onChange={onHandleInputChange}
      />
    </div>
  );
};

export default Input;
