const apiKeyStock = "HQ7VZGSDVLGAC9S6";
const apiKeyNews = "7625170bc33b1fe3194db78b1ed38216";

fetch(
  "http://api.mediastack.com/v1/news?access_key=7625170bc33b1fe3194db78b1ed38216&categories=technology,business&languages=en"
) 
  .then((res) => res.json()) 
  .then((data) => {
    console.log(data);
    let stockSymbol = "";
    let companyName = document.querySelector("h3");
    data.data.forEach((element) => {
      if (element.title.includes("Microsoft")) {
        //assuming news articles mention companies with correct capitalization
        stockSymbol = "MSFT";
        companyName.innerText = "Microsoft Inc.";
      } else if (element.title.includes("Apple")) {
        stockSymbol = "AAPL";
        companyName.innerText = "Apple Inc.";
      } else if (element.title.includes("Amazon")) {
        stockSymbol = "AMZN";
        companyName.innerText = "Amazon Inc.";
      } else if (element.title.includes("Tesla")) {
        stockSymbol = "TSLA";
        companyName.innerText = "Tesla Inc.";
      }
    });
    console.log(stockSymbol);

    document.querySelector("span").innerText = stockSymbol;

    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&interval=5min&apikey=Y316RKQCPW101J73`
    )
      .then((res) => res.json())
      .then((stockData) => {
        console.log(stockData);
        document.querySelector("#fact").innerText =
          stockData["Time Series (Daily)"]["2022-05-05"]["1. open"];
        document.querySelector("#high").innerText =
          stockData["Time Series (Daily)"]["2022-05-05"]["2. high"];
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
