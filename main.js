let joke = document.querySelector('h2')
let btn = document.querySelector('button')
btn.addEventListener('click', getJoke)

function getJoke (){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.joke)
        let dadJoke = data.joke
        joke.innerText = dadJoke
        translateJoke (dadJoke)
    });
}

function translateJoke (dadJoke){
    let url = `https://api.funtranslations.com/translate/pirate.json?text=${dadJoke}`
    
    fetch(url)
    .then(res => res.json()) //get json
    .then(data =>{
        console.log(data)
        let pirateJoke = data.contents.translated
        joke.innerText = pirateJoke

    })


}