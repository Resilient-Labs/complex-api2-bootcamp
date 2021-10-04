// complex api for movie reviews, first part takes a movie title gives you some review
// let showsTitle = ''
document.querySelector('button').addEventListener('click', summarizeMe)

function summarizeMe(){
    let showsTitle = document.querySelector('input').value

fetch(`https://www.omdbapi.com/?&apikey=c7c9779d&t=${showsTitle}`)
.then(res => res.json())
.then(data => {
     console.log(showsTitle);
     document.querySelector('h2').innerText = showsTitle
     let searchTitle = showsTitle.replace(' ', '+')
    console.log(showsTitle.searchTitle);
    console.log(data.plot);
    document.querySelector('h3').innerText = data.Plot
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=6SZD7JEgPJpoKZbbJAtylZhgwsKfNAsw&q=${data.Title}`)
    .then(res => res.json())
    .then(gifData => {
        console.log(gifData.data[Math.floor(Math.random()* 10)].embed_url)
        console.log(gifData)
        document.querySelector('iframe').src = gifData.data[Math.floor(Math.random()* 10)].embed_url
        document.querySelector('h3').innerText = quote
    })
    .catch(err => {
        console.log(err)
    });
    

})
}
