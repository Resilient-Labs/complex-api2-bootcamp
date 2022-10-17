document.querySelector("button").addEventListener("click", myPokemon);

function myPokemon() {
  const pokemon = document.querySelector("#city").value.toLowerCase();
  // const country = document.querySelector("#citytwo").value;

  fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.name);
      const character = data.name;

      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${character}`)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          console.log(data.data[0]);
          document.querySelector("img").src = data.data[0].images.small;
          document.querySelector("#prices").innerText =
            data.data[0].cardmarket.prices.averageSellPrice;
          document.querySelector("#facts").innerText = data.data[0].flavorText;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
