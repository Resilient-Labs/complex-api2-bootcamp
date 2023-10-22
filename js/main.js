document.querySelector('button').addEventListener('click', getPlayer)


function getPlayer(){ 
    const selection = document.querySelector('input').value
    
        const url2 = `https://api.giphy.com/v1/gifs/search?api_key=YIDa5wQXKaelSXqXAqI9G7U1ZbsKI1Ia&q=${selection}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(giphy => {
            console.log(giphy)
            document.querySelector('#one').src = giphy.data[0].images.fixed_height.url
            document.querySelector('#two').src = giphy.data[1].images.fixed_height.url
        

    
            const url = `https://www.balldontlie.io/api/v1/players?search=${selection}`
            fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)
                document.querySelector('#playerName').innerText = `${data.data[0].first_name} ${data.data[0].last_name}` 
     })


})

    .catch(err => {
        console.log(`error ${err}`)
});

}