import React from "react";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ fetchedData, isLineChart }) => {
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

  let lineChart = (
    <Line
      data={{
        labels: xValueList,
        datasets: [
          {
            data: openingValueList,
            label: "Opening value",
            borderColor: "#3333ff",
            backgroundColor: "rgba(240,248,255,0.3)",
            fill: true,
          },
          {
            data: highValueList,
            label: "Highest value",
            borderColor: "#008000",
            backgroundColor: "rgba(120,200,120,0.2)",
            fill: true,
          },
          {
            data: lowValueList,
            label: "Lowest value",
            borderColor: " #B22222",
            backgroundColor: "rgba(220,20,60,0.3)",
            fill: true,
          },
          {
            data: closingValueList,
            label: "Closing value",
            borderColor: "#FFD700",
            backgroundColor: "rgba(240,230,140, 0.3)",
            fill: true,
          },
        ],
      }}
    />
  );

  let barChart = (
    <Bar
      data={{
        labels: ["Highest", "Lowest", "Opening", "Closing"],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "rgba(120,200,120,0.5)",
              "rgba(255,99,71,0.5)",
              "rgba(135,206,250,0.5)",
              "rgba(240,230,140, 0.5)",
            ],
            data: [
              highValueList[0],
              lowValueList[0],
              openingValueList[0],
              closingValueList[0],
            ],
          },
        ],
        options: {
          legend: {
            display: false,
          },
        },
        tooltips: {
          enable: true,
        },
      }}
    />
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.company}>
        You are currently viewing: {companyName}
      </h1>
      <h3>{!isLineChart ? xValueList[0] : null}</h3>
      <div className={styles.chart}>{isLineChart ? lineChart : barChart}</div>
    </div>
  );
};

export default Chart;
