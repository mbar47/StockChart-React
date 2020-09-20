import axios from "axios";

export const fetchStock = async (company) => {
  const API_KEY = "G0KOLF07T8N5IG82";
  let stockCompany = "MSFT";

  if (company) {
    stockCompany = company;
  }

  let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockCompany}&outputsize=compact&apikey=demo${API_KEY}`;

  try {
    const { data } = await axios(API_CALL);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error " + error);
  }
};
