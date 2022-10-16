

document.querySelector('button').addEventListener('click',getMovie)


function getMovie(){

    let title = document.querySelector('input').value
    let url = `http://www.omdbapi.com/?apikey=KEY&t=${title}`
    
    fetch(url)``
    .then(res => res.json())
    .then(data =>{
        if(data.Plot === undefined){
            alert('Please enter a valid movie name') 
            return
        }
        let urlG = `https://api.giphy.com/v1/gifs/search?api_key=6SZD7JEgPJpoKZbbJAtylZhgwsKfNAsw&q=${data.Title}`
        document.querySelector('p').innerText = `${data.Title} was Released ${data.Released}: ${data.Plot}`
        fetch(urlG)
        .then(res => res.json())
        .then(dataGif=>{
            document.querySelector('iframe').src = dataGif.data[Math.floor(Math.random()*50)].embed_url
        })
    })
    .catch(err => alert('Please enter a valid movie name'))
}