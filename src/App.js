import React, { useState, useEffect } from "react";
import Chart from "./components/Chart/Chart";
import { fetchStock } from "./api/Stock";

import Input from "./components/Input/Input";

import "./App.css";

const App = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [inputText, setInputText] = useState("");
  const [isLineChart, setIsLineChart] = useState(true);

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
        isLineChart={isLineChart}
        setIsLineChart={setIsLineChart}
      />
      <Chart fetchedData={fetchedData} isLineChart={isLineChart} />
    </div>
  );
};

export default App;
