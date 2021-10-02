document.querySelector('button').addEventListener('click', getCharacter)
// const url = `https://superheroapi.com/api/10219421403062394/search/${val}`


function getCharacter() {

    let val = document.querySelector('input').value
    const url = `https://superheroapi.com/api/10219421403062394/search/${val}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#characterName').innerText = data.results[0].name
            document.querySelector('img').src = data.results[0].image.url
            document.querySelector('.stats').innerText = `
                Combat: ${data.results[0].powerstats.combat}
                Durability: ${data.results[0].powerstats.durability}
                Intelligence: ${data.results[0].powerstats.intelligence}
                Power: ${data.results[0].powerstats.power}
                Strength: ${data.results[0].powerstats.strength}
            `
            const movieUrl = `http://www.omdbapi.com/?t=${data.results[0].name}&apikey=KEY`

            fetch(movieUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    document.querySelector('.title').innerText = `Appears in ${data.Title}, ${data.Year}`
                    document.querySelector('.imdbRating').innerText = `imdb Rating: ${data.imdbRating}`
                    document.querySelector('.plot').innerText = `Plot: ${data.Plot}`

                })
                .catch(err => {
                    console.log(`error ${err}`)
                });

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}



