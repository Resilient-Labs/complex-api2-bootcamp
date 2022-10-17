//Goal: Use data returned from one api to make a request to another api and display 
//the data returned
document.querySelector('button').addEventListener('click', getTemp)


function getTemp(e){
    e.preventDefault()
    let zipcode = document.querySelector('input').value
    let zipUrl = `http://ZiptasticAPI.com/${zipcode}`

    fetch(zipUrl)
        .then(res => res.json()) // parse response as JSON
        .then(playerData => {
        console.log(playerData)

        let wKey = 'fc8fc7d384204a5597525243221710'
        let govUrl = `http://api.weatherapi.com/v1/current.json?key=${wKey}&q=${zipcode}&aqi=no
        `
        fetch(govUrl)
        .then(res => res.json()) // parse response as JSON
        .then(wData => {
                console.log(wData)
                document.querySelector('h2').innerText = `${wData.location.name}`
                document.querySelector('h3').innerText = `Current temp: ${wData.current.temp_f}\u00B0`
                document.querySelector('h4').innerText = `Feels like: ${wData.current.feelslike_f}\u00B0`
            })


        })

        
        
        .catch(err => {
            console.log(`error ${err}`)
        });

}
