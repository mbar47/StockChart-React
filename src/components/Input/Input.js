import React from "react";

import styles from "./Input.module.css";

const Input = ({ inputText, setInputText, handleCompanyChange }) => {
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
          placeholder="Search for stock name ex. AAPL (press enter)"
          type="text"
        />
      </form>
    </div>
  );
};

export default Input;
