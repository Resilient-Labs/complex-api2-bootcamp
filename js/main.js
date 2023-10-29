document.querySelector('#btn').addEventListener('click', getJokeAndTranslate)


function getJokeAndTranslate() {
    // dad jokes to shakespeare
    // url and options for dad jokes api
    let jokeUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
    let jokeOptions = {
        method: 'GET',
        headers: { 'x-api-key': 'BbAp8xs2JVbfOTkBqivANA==ew0cV9nnqt90UtXs' }
    } // end of jokeOptions

    // api request to dad jokes api
    fetch(jokeUrl, jokeOptions)
    .then(jokeRes => jokeRes.json()) // parse response as JSON
    .then(jokeData => {

        let joke = jokeData[0].joke // get dad joke
        document.getElementById('dadJoke').innerText = joke

        // url and options for shakespeare api
        // pass in the dad joke to the shakespeare url
        let shakeUrl = `https://api.funtranslations.com/translate/shakespeare.json?text=${joke}`
    
        // api request to shakespeare api
        fetch(shakeUrl)
        .then(shakeRes => shakeRes.json()) // parse response as JSON
        .then(shakeData => {
            let shakeJoke = shakeData.contents.translated // get shakespeare version of the dad joke 
            document.getElementById('shakeJoke').innerHTML = shakeJoke
        })

        .catch(err => {
            console.log(`error getting shakespeare translation: ${err}`)
        })
    }) // end of api call

    .catch(err => {
        console.log(`error getting dad joke: ${err}`)
    })
} // end of function