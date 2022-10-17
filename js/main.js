document.querySelector("button").addEventListener("click", () => {

    // Get the value from the input
    let userValue = document.querySelector("input").value

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${userValue}&api-key=JsugZluow5yPMhbbdzOMuNwQFEadLAXv`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        // Place title in the DOM
        document.querySelector("#title").innerText = data.results[0].display_title


    fetch(`http://www.omdbapi.com/?t=${data.results[0].display_title}&apikey=e8425006`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        document.querySelector("img").src = data.Poster
        document.querySelector("#release").innerText = `Release Date: ${data.Released}`
        document.querySelector("#about").innerText = data.Plot
        

        document.querySelector(".placeHolder").innerText = "Reviews"
        document.querySelector(".database").innerText = ` ${data.Ratings[0].Source} ${data.Ratings[0].Value}`
        document.querySelector(".rotten").innerText = ` ${data.Ratings[1].Source} ${data.Ratings[1].Value}`
        document.querySelector(".metacritic").innerText = ` ${data.Ratings[2].Source} ${data.Ratings[2].Value}`



    })
    .catch(err => {
        console.log(`error ${err}`)
 });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

})

