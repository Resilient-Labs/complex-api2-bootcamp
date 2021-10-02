// Use data returned from one api to make a request to another api and display the data returned
// CREDIT TO HOUSE GARDNER

document.getElementById('button').addEventListener('click', rickRickRick)

const url = 'https://rickandmortyapi.com/api/character'

function rickRickRick() {

    let randomNum = Math.floor(Math.random() * 21)

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(dataFromMorty => {
            console.log(dataFromMorty)

            document.querySelector('h2').innerText = dataFromMorty.results[randomNum].name

            const giphy = `https://api.giphy.com/v1/gifs/search?api_key=&q=${dataFromMorty.results[randomNum].name}`

            fetch(giphy)
                .then(res => res.json()) // parse response as JSON 
                .then(data => {
                    // Pulling random gif
                    let secondRandomNum = Math.floor(Math.random() * data.data.length)

                    document.querySelector('iframe').src = data.data[0].embed_url
                })
        })
}
