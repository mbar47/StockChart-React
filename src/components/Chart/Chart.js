import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ fetchedData }) => {
  let xValueList = [];
  let openingValueList = [];
  let closingValueList = [];
  let highValueList = [];
  let lowValueList = [];

  if (!fetchedData) {
    return <h1>loading...</h1>;
  }

  //var companyName = fetchedData["Meta Data"]["2. Symbol"];

  for (const key in fetchedData["Meta Data"]) {
    var companyName = fetchedData["Meta Data"]["2. Symbol"];
  }

  for (const key in fetchedData["Time Series (Daily)"]) {
    xValueList.push(key);
    openingValueList.push(fetchedData["Time Series (Daily)"][key]["1. open"]);
    highValueList.push(fetchedData["Time Series (Daily)"][key]["2. high"]);
    lowValueList.push(fetchedData["Time Series (Daily)"][key]["3. low"]);
    closingValueList.push(fetchedData["Time Series (Daily)"][key]["4. close"]);
  }

  var myLineChart = (
    <Line
      data={{
        labels: xValueList,
        datasets: [
          {
            data: openingValueList,
            label: "Opening value",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0,0,255,0.3)",
            fill: true,
          },
          {
            data: highValueList,
            label: "Highest value",
            borderColor: "#008000",
            backgroundColor: "rgba(0,150,0,0.3)",
            fill: true,
          },
          {
            data: lowValueList,
            label: "Lowest value",
            borderColor: "#ff0000",
            backgroundColor: "rgba(255,0,0,0.3)",
            fill: true,
          },
          {
            data: closingValueList,
            label: "Closing value",
            borderColor: "#000000",
            backgroundColor: "rbga(0,0,0,0.3)",
            fill: true,
          },
        ],
      }}
    />
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.company}>
        You are currently viewing: {companyName}
      </h1>
      <div className={styles.chart}>{myLineChart}</div>
    </div>
  );
};

export default Chart;
