//Create an event listener for the button so when clicked it runs a function

document.querySelector('button').addEventListener('click', yodaSpeak)


//create the yodaSpeak function, I want this function to pull a random ron swanson quote and then translate the quote to yodaspeak 

function yodaSpeak() {
    
    //store the url of the first api into a variable, this should be the ron swanson quote api
    const urla = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`

    //call the first fetch with the store ron swanson api url 
    fetch(urla)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            //store the random ron swanson quote in a variable 
            const quote = data[0]

            //show the random ron swanson quote in the DOM
            document.querySelector('#swanson').innerText = quote

            //store the url of the second api into a variable, this should be the yoda translator api. use the quote from the first api as a query parameter for the second api so that it can be translated.
            const urlb = `https://api.funtranslations.com/translate/yoda.json?text=${quote}`

            //second api requires an api key, create a variable to store the api key
            const api2 = 'jfoAd2G08152Hjkfr9jaigeF'

            //second api also requires headers. create an options object to store the headers object. Inside the headers options should container the property name and value pair for the api key.
            const options ={
                headers:{
                    'X-FunTranslations-Api-Secret': `${api2}`
                }
            }

            //call the second api within the first api, using the url variable and the options variable as parameters in order to access the yoda translator api
            fetch(urlb, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    //show the translated yoda quote in the DOM 
                    document.querySelector('#yoda').innerText = data.contents.translated

                })
                //catch errors
                .catch(err => {
                    console.log(`error${err}`)
                })

        })
        //catch errors
        .catch(err => {
            console.log(`error${err}`)
        })

}