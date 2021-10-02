document.querySelector('button').addEventListener('click', getInfo)




function getInfo (){
    let movie = document.querySelector('input').value
    
    document.querySelector('h3').innerText= ""
    

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5a201178134b41c506552f0e22ebdcb7&query=<${movie}>`

    fetch(url) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)
        console.log(data.results[0].title)
        console.log(data.results[0].overview)
        console.log(data.results[0].release_date)
        
        document.querySelector('.title').innerText = ` Movie Title: ${data.results[0].title}`
        document.querySelector('.overview').innerText = `Overview: ${data.results[0].overview}`
        document.querySelector('.release').innerText = `Release Date: ${data.results[0].release_date}`
        
        

        
        let movieTitle = data.results[0].title
        
        let url2 = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieTitle}&api-key=JsugZluow5yPMhbbdzOMuNwQFEadLAXv`

        fetch(url2) 
        
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data.url) 
        console.log(data)
        console.log(data.results[3].summary_short)

        if(data.results[3].summary_short === ""){
            document.querySelector('h3').hidden = true
        } else{
            document.querySelector('h3').hidden = false
        }

        document.querySelector('h3').innerText = ` NYT Summary: ${data.results[3].summary_short}`

        
       
        
        }) 
        
        
        
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 

        
}

// `http://api.giphy.com/v1/gifs/search?api_key=Y9VUwomfizbVbFIhKqMA0So3Uw5IUr30&q=${search}`