document.querySelector('button').addEventListener('click', harryPotter)

function harryPotter(){
  let url = `http://hp-api.herokuapp.com/api/characters`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let ranNum =  data[Math.floor(Math.random() * data.length)]
            document.querySelector('h2').innerText = ranNum.name
            document.querySelector('.facePic').src = ranNum.image
            document.querySelector('h3').innerText = ranNum.house

            let characterName = ranNum.name + ' harry potter'
        
              fetch(`https://api.giphy.com/v1/gifs/search?api_key=iRnrjpmTpmHQOxlt1ZmwwkwjlZAo65Yl&q=${characterName}&limit=25&offset=0&rating=g&lang=en`)
                .then(response => response.json())
                .then(result => {
                console.log(result)

                document.querySelector('.gifOne').src = result.data[0].images.downsized.url
                })
                .catch(err => {
                    console.log(`error ${err}`)
    });
// })
})
}