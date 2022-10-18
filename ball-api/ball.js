document.querySelector('button').addEventListener('click', BP)

function BP(){
    let player = document.querySelector('input').value
    console.log(player)
    const url = `https://www.balldontlie.io/api/v1/players?search=${player}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data[0].first_name
        
        let word = data.data[0].first_name
        fetch(`https://api.celebrityninjas.com/v1/search?name=${word}`,{
        method: "GET",
        headers: { "X-Api-Key": "VIRKOEzNHwvwRZ9SIhD5Bg==FkOR00OPqfQ19LjM"},
        })
        //  console.log(word)
         .then(res => res.json()) 
         .then(data => {
             console.log(word)
             console.log(data)
             document.querySelector('h3').innerText = data[0].net_worth
             // document.querySelector('h3').innerText = data.results[1].powerstats.speed
             // document.querySelector('img').src = data.results[1].image.url
        })   
    })
    
}
//simeon helped me with the second api