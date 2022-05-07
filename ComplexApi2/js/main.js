// Goal: List all national parks in the US and get the current weather

// later be able to cross them out when clicked on as a Travel list!?!

//2. enter a state 
//3. make a request to the NPS API for that state
//4. once it has the state it should make another fetch using the state to get data about the park

// .value = The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

// user weather api for location? 

document.querySelector('button').addEventListener('click', listParks)

function listParks(){
    
    let states = document.querySelector('input').value.toLowerCase()
    console.log(states)

    let url = `https://developer.nps.gov/api/v1/parks?parkCode&api_key=z4fBFRLANzydPcuhnwSEH8U9g1RgENYLhBDwpKa2&q=${states}`
    
    // use template string $ to plug variable right in there when you define varialbe above 

    // a. / ?api_key indicates the first parameter &date indicates the query parameter.. 
    //b. when using template literals you can to replace the '' with ``.. 
    // c. json "javascript script object notation"
    fetch(url)
    .then(res => res.json())
    .then (ndata =>{
        console.log(ndata.data[0].addresses[0].city)
        console.log(ndata.data[0].states)
        // console.log(ndata)

        let cities = ndata.data[0].addresses[0].city

        let location = ndata.data[0].states 
        
        // Math.floor(Math.random() * data.length); can try to access and make NP random for what's popped up const= nationpark.data

        document.querySelector('h2').innerText = ndata.data[0].fullName

        document.querySelector('#first').innerText = `Brief Description: ${ndata.data[0].description}. Find out more about this National Park by visitng ${ndata.data[0].url}`

        document.querySelector('img').src = ndata.data[0].images[0].url
        document.querySelector('#credit').innerText = `Credit: ${ndata.data[0].images[0].credit} Photo: ${ndata.data[0].images[0].caption}`
        
        fetch(`http://api.weatherapi.com/v1/current.json?key=493848bb4ef445c6b3120948220405&q=${cities}&${location}`)
        .then(res => res.json())
        .then(wdata =>{
            console.log(wdata)

            document.querySelector('#second').innerText = `It is currently ${wdata.current.condition.text} and ${wdata.current.temp_f} °F in ${wdata.location.name} ${wdata.location.region}, ${wdata.location.country}. We hope you visit us soon!`
        })
    })

    .catch(err => {
        console.log(`error ${err}`)
    })

}
