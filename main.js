//movie title to holiday api

// http://www.omdbapi.com/?i=tt3896198&apikey=681e90d1&t=avatar&y=2009
// http://www.omdbapi.com/?t=avatar
// http://www.omdbapi.com/?t=avatar&y=2009

document.querySelector(".btn").addEventListener("click",test)
document.querySelector(".clr").addEventListener("click",clear)


function test(){
    let selection = document.querySelector('input').value
    let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=681e90d1&t=${selection}`

  fetch(movieUrl)
    .then(res => res.json()) // parse response as JSON
    .then(movie => {

      console.log(movie)
      let year = movie.Year
      console.log(year)
      let awards = movie.Awards
      console.log(awards)
      let genre = movie.Genre
      console.log(genre)
      let plot = movie.Plot
      console.log(plot)
      let poster = movie.Poster
      console.log(poster)
      let rated = movie.Rated
      console.log(rated)
      let released = movie.Released
      console.log(released)
      let runTime = movie.Runtime
      console.log(runTime)
      let imdb = movie.imdbRating
      console.log(imdb)

              document.querySelector("img").src = poster
              document.querySelector("h3").innerText = `${plot}`

          let urlTwo = `https://date.nager.at/api/v3/publicholidays/${year}/JP`
          
          fetch(urlTwo)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              for( let i = 0; i < data.length; i++){
             
                let date = data[i].date
                console.log(date)
                let localName = data[i].localName
                let name = data[i].name
                console.log(localName,name)

              let li = document.createElement("li")
              let ul = document.querySelector("ul")
              li.innerText = ` ${localName} or ${name} , ${date}`
              ul.appendChild(li)
              }
            })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function clear(){
  let ul = document.querySelector("ul")
  ul.innerText = " "
}


//news article
// https://api.nytimes.com/svc/archive/v1/2019/2.json?api-key=9ohT8mO5AxZ5ORqtDLJTIEQBlNBAVfhD