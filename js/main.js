document.querySelector('button').addEventListener('click', getQuotes) 


function getQuotes(){
    const quotesApi = 'https://animechan.vercel.app/api/random'
    console.log(quotesApi)
    fetch(quotesApi)
        .then(response => response.json())
        
        .then(data => {
        console.log(data)
        document.querySelector('.quote').innerHTML = data.quote
        document.querySelector('.character').innerHTML = '- ' + data.character
        document.querySelector('.title').innerHTML = 'Anime: ' + data.anime
        const title = data.anime
        const animeApi = `https://api.jikan.moe/v3/search/anime?q=${title}`
        fetch(animeApi)
            .then(response => response.json())
            
            .then(animeData => {
            console.log(animeData)
            document.querySelector('img').src = animeData.results[0].image_url
            })
            
            
            .catch(error => {
            console.log(`Error ${error}`)
            })
        })
        
        
        .catch(error => {
        console.log(`Error ${error}`)
        })
}
