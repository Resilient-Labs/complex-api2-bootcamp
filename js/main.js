///--------------------- API 1 


//create event listeners
document.querySelector('#cityButton').addEventListener('click', triggeredEventListener)
document.querySelector('#restaurantButton').addEventListener('click', triggeredEventListenerTwo)

//create functing to fire when event listener triggers
function triggeredEventListener ( ){
    
    //clears the dom
    document.querySelector('#cityResults').innerHTML =''

    // grabs input value
    let inputCity = document.querySelector('#myCity').value

    //API Key
    let api_KeyOne = process.env.API_KEY_ONE

    //fetch syntax
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?regionCode=PA&namePrefix=${inputCity}&types=CITY&sort=name&offset=0&limit=10`, {
    headers: {
        "X-Rapidapi-Host": "wft-geo-db.p.rapidapi.com",
        "X-Rapidapi-Key": `${api_KeyOne}`
    }
    })
    .then(res => res.json())
    .then(result => {   
        console.log(result)
        for(i=0 ; i<= result.data.length; i++){
            let city = result.data[i].city
            let region = result.data[i].region
            let country = result.data[i].country
            let latitude = result.data[i].latitude
            let longitude = result.data[i].longitude
            document.querySelector('#cityResults').innerHTML += `${city},${region} in ${country}. latitude(${latitude}), longitude(${longitude})</br>` 
        }
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });

}

//------------------API 2

//function 
function triggeredEventListenerTwo (){

    //clears the dom
    document.querySelector('#restaurantResults').innerHTML =''

    // grabs input value
    let lat = document.querySelector('#latitude').value
    let lon = document.querySelector('#longitude').value

    //API Keys
    let api_KeyTwo = process.env.API_KEY_TWO

    //fetch syntax
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lon}&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": `${api_KeyTwo}`
        }
    })
    .then(res => res.json())
    .then(result => {
        for(i=0 ; i<= result.data.length; i++){
            let restaurantName = result.data[i].name
            let restaurantAddress = result.data[i].address
            let restaurantDescription = result.data[i].description
            document.querySelector('#restaurantResults').innerHTML += `${restaurantName} is located at ${restaurantAddress}. Here is a description: ${restaurantDescription}</br>`
        }
        
         
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });
}

