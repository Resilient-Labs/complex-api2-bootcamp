// HOUSE HAYDEN: SYDNEI, MARSHA
// SHOUTOUT TO ZIKRE

// User puts in currency code in CAPS and site returns ticket prices in USD for events across the country and also gives you the cheapest ticket price in requested currency. 
document.querySelector("button").addEventListener("click", loadEvents);
function loadEvents() {
  prices = [];

  fetch(
    `https://api.seatgeek.com/2/events?client_id=Mjk3NDE1NzZ8MTY2NTg2NDU4OC44NTUxNDE&per_page=100`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      data.events.forEach((event) => {
        prices.push(event.stats.average_price);
        let tr = document.createElement("tr");
        let html = `
      <td>${event.id}</td> 
      <td>${event.title}</td>
      <td>${event.venue.city}</td>
      <td>${event.venue.name}</td>
      <td>${event.stats.average_price}</td>

      `;
        tr.innerHTML = html;
        document.querySelector("tbody").appendChild(tr);
      });
      let input = document.querySelector("input").value;

      convertedPrice(prices, input);
    });
}

function convertedPrice(prices, input) {
  
  let price = prices.filter(p => p);
  let finalPrice = price.sort((a,b) => a-b)[0]
  
  fetch(
    `https://api.frankfurter.app/latest?amount=${finalPrice}&from=USD&to=${input}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      
      document.querySelector("h2").innerText = data.rates[`${input}`] ;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}


