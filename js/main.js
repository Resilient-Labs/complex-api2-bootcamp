// Use data returned from one api to make a request to another api and display the data returned
//input cat breed and recieve a photo of the cat breed with
//https://developers.thecatapi.com/


document.querySelector('button').addEventListener('click', getBreed)

function getBreed(){
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => {
        const randomNum = Math.floor(Math.random()* data.length)
        const cat = data[randomNum].name
        console.log(cat)

            //SITE:https://unsplash.com/oauth/applications/372222
            //https://unsplash.com/documentation#search-photos
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${cat}+cat&client_id=ZhPnWThoH6qTEQpcMvw23nQKbhhQeBxzRAZUHknmeIM`)
            .then(res => res.json())
            .then(data =>{
                    document.querySelector('h2').innerText = cat
                    document.querySelector('img').src = data.results[0].urls.small
                    document.querySelector('img').alt = data.results[0].alt_description
            })

             .catch(err => {
                 console.log(`error ${err}`)
            })
     })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

    
   