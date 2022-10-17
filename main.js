document.querySelector('button').addEventListener('click',getQuote)
function getQuote(){
    fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(data => {
        let anime= data.anime
        document.querySelector('.anime').innerText = data.anime
        document.querySelector('.character').innerText = data.character
        document.querySelector('.quote').innerText = data.quote
        fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`)
        .then(res => res.json())
        .then(photoData => {
            console.log(photoData)
            document.querySelector('img').src =photoData.data[0].images.jpg.image_url
            document.querySelector('.synopsis').innerText =photoData.data[0].synopsis
            
        })
    })
    .catch(err => {
        console.log(`error ${err}`)

    })
}