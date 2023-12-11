//The user will enter a a country or city. Use that location to get the weather of that day! https://openweathermap.org/api

document.querySelector("button").addEventListener("click", getQR);

function getQR() {
  //getting my users random photo
  const newPic = document.querySelector("#newPhoto");

  // have to print what you are trying to test
  console.log("new Pic: " + newPic);
  const inputText = document.querySelector('#userInput').value

  const url = `https://api.pexels.com/v1/search?query=${inputText}`
  const options = {
    method: "GET",
    headers: {
      "Authorization": "xMznuEQB2Bdv4Y4e5rqT4URbzhRp5h2coATn2e6VILVEE1OIz4XIu9J5",
    },

  };

  //using method fetch to request my data from api using url
  fetch(url, options) // go get api
    //.then property passes param res which responds with JSON parsing out the data you requested
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // const result = data.
      console.log();
      document.querySelector("#newPhoto").src = data.photos[0].src.medium
      console.log()
      document.querySelector("#titleImg").innerText =  data.photos[0].alt

      document.querySelector("#qr-header").innerText =
        "Here is the QR Code for the photo!";


      let inputQR = data.photos[0].url
      const urlQR = `http://api.qrserver.com/v1/create-qr-code/?data=${inputQR}&size=200x200`

      fetch(urlQR, {method: 'GET'})
        .then((data) => {
          console.log("data:");
          console.log(data);
          console.log("data.photos:")

          // check to see if the data url filtered into the api
          console.log(data.url)

          document.querySelector("#photoQR").src = data.url;
          document.querySelector("#hidden").id = "";

        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
