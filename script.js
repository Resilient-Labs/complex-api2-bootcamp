//Retreive data from random date generator and then take that date and retreive moon phase image

document.querySelector("button").addEventListener("click", search)

function search() {
  const catFactsUrl = 'https://cat-fact.herokuapp.com/facts'
  let wikiCat ;



  fetch(catFactsUrl)
      .then(res =>{
        responseCode = res.status
        return res.json()
      }  ) // parse response as JSON
      .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          let section = document.querySelector("section");
          const p = document.createElement("p");
          section.appendChild(p);
          p.innerText = data[i].text
          wikiCat = data[i].type
        }

        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${wikiCat}&format=json&origin=*`;

        fetch(wikiUrl)
          .then((res) => res.json()) // parse response as JSON
          .then((wikiData) => {
            document.querySelector("h5").innerText =
              wikiData.query.search[0].snippet;

              document.getElementById('what').innerText = "What is a cat?"
              document.getElementById('facts').innerText = "Here are some fun facts!!!"

          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      })
      .catch(err => {
          console.log(`error ${err}`)
 });
 }
