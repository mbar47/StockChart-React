import React, { useState, useEffect } from "react";
import Chart from "./components/Chart/Chart";
import { fetchStock } from "./api/Stock";

import Input from "./components/Input/Input";

import "./App.css";

const App = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [inputText, setInputText] = useState("");

  /*
  const didComponentMount = async () => {
    const data = await fetchStock();
    setFetchedData(data);
  };*/

  const handleCompanyChange = async (country) => {
    const data = await fetchStock(country);
    setFetchedData(data);
  };

  useEffect(() => {
    handleCompanyChange();
  }, []);

  return (
    <div className="App">
      <Input
        handleCompanyChange={handleCompanyChange}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Chart fetchedData={fetchedData} />
    </div>
  );
};

export default App;
