//User will enter a city's name and get the weather for that area

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getSpecies)

// https://api.gbif.org/v1/species/search?q=${value}

function getSpecies() {
    let value = document.querySelector('input').value
    let url = `https://api.gbif.org/v1/species/search?q=${value}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    document.querySelector('#scientificName').innerText = ''
    //target only animals
    if (data.results[0].kingdom === 'Animalia' || data.results[0].kingdom === 'Phasianidae') {
        document.querySelector('#scientificName').innerText = data.results[0].scientificName
        document.querySelector('#family').innerText = data.results[0].family
    } else {
        document.querySelector('#family').innerText = 'Oops! You entered a colloquial name so the results are undefined or you ented a colloquial name that is actually a scientific name for a different species. Try again.'
        document.querySelector('#wikiHeader').innerText = ''
        document.querySelector('#wikiInfo').innerText = ''
    }
    //second fetch
    let scifamily = data.results[0].family
    let dictUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${scifamily}?redirect=false`
    fetch(dictUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#wikiHeader').innerText = `What is a ${scifamily}?`
        document.querySelector('#wikiInfo').innerText = data.extract
        document.querySelector('#wikiImg').src = data.originalimage.source
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    })
    .catch(err => {  
        console.log(`error ${err}`)
    });
}


// {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'access-control-allow-origin': '*'
//     }
// }




// var city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json', // this line does not work in fetch API... need to see what content type is and what is CORS
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });