import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faChartBar } from "@fortawesome/free-solid-svg-icons";

import styles from "./Input.module.css";

const Input = ({
  inputText,
  setInputText,
  handleCompanyChange,
  isLineChart,
  setIsLineChart,
}) => {
  const handleTextChange = (textValue) => {
    setInputText(textValue);
  };

  const onSubmitHandler = (e) => {
    handleCompanyChange(inputText);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Search for stock name ex. AAPL"
          type="text"
        />
        <FontAwesomeIcon
          icon={isLineChart ? faChartArea : faChartBar}
          size="2x"
          onClick={() => setIsLineChart(!isLineChart)}
        />
      </form>
    </div>
  );
};

export default Input;
