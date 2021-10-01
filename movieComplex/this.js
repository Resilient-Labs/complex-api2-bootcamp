//what's the idea..
//type in the genre and get a list of movies that match that genre

document.querySelector("button").addEventListener("click", findMovie);

function findMovie() {
  let movIn = document.querySelector(".movieInput").value;
  let url = `http://www.omdbapi.com/?t=${movIn}&apikey=f1b52a0c`;

  //issue with fetch call, it keeps giving me a movie titled null when that is not the case.
  fetch(url)
    .then((res) => res.json())
    .then((movie) => {
      console.log(movie);
      let movieArr = movie.Country.split(",");
      movieArr = movieArr.map(function (word) {
        return word.trim();
      });

      console.log(movieArr);
      for (let i = 0; i < movieArr.length; i++) {
        let p = document.createElement("li");
        let text = document.createTextNode(movieArr[i]);
        p.appendChild(text);
        // console.log(p)
        let dole = document.querySelector(".movieResults")
        dole.appendChild(p);
        // console.log(dole)
        

        movieArr.forEach((each) => {
          let url2 = `http://api.countrylayer.com/v2/name/${each}?access_key=46d7083e9b2c80385c24a26b527ab88c& FullText=true`;
          fetch(url2)
            .then((res) => res.json())
            .then((country) => {
              // console.log(country[0].capital);
              console.log(country)
              let countryCapital = country[0].capital
              
              let p2 = document.createElement("li")
              let text2 = document.createTextNode(countryCapital)
              p2.appendChild(text2)
              console.log(p2)
              let dole2 = document.querySelector(".countryCap")
              dole2.appendChild(p2)
              console.log(dole2)
              // document.querySelector('#countryCap').innerText = country[0].boxOffice
            });
        });
      }
      // document.querySelector("#movieResults").innerText = movieArr;
    })

    .catch((err) => {
      console.log(`Error ${err}`);
    });
}
