// music app where it shows lyrics and artist info

document.querySelector("button").addEventListener('click', Recipe);

function Recipe() {
  let inputValue = document.querySelector("input");
  let theInstructions = document.querySelector('h2')
  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        theInstructions.innerText = `${data.meals.strInstructions}`


      
        let secondUrl = `https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/${countryCode}.json`;

        fetch(secondUrl)
    
      
        .then((res) => res.json())
        .then((data2) => {
          console.log(data2);
          population.innerText = `Administrative Division: ${data2}`

        });

      }
    })

    .catch((err) => {
      console.log(`err ${err}`);
    });
}

getInformation();

// //
