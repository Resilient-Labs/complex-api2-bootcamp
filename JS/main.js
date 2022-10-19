// complex api project two




let divEl = document.querySelector('div')
document.querySelector('button').addEventListener('click', getFetch)



function getFetch() {
   
   
    const userInput = document.querySelector('input').value
    let url = `https://api.nationalize.io?name=${userInput}`
    
    divEl.innerHTML = "" // reset

    fetch(url) .then(res => res.json()) 
        .then(data => {

            // SECOND FETCH REQUEST GOES BELOW
                data.country.forEach(country => {
                    fetch(`https://api.bigdatacloud.net/data/country-info?code=${country.country_id}&localityLanguage=en&key=bdc_7ba88b5255764c839e4ebbd67d7ec37d`)
                    .then(res => res.json()) // parse response as JSON
                    .then(dataTwo => {
                        divEl.innerHTML +=`<p>${dataTwo.name}</p>`
                    })
                    .catch(err => {
                        console.log(`error ${err}`)
                    });
                });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        

}




