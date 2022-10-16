//




document.querySelector('button').addEventListener('click', getNews)





function getNews() {


    const countryCode = document.querySelector('#countrySelect').value


    //Use this for the user entering a city
    fetch(`https://api.thenewsapi.com/v1/news/top?api_token=qbSwAiOVe03ZAkIStM7am21HDssdPAiNPsIvBJA5&locale=${countryCode}&limit=3`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].title)
            console.log(data.data[0].url)
            console.log(data.data[1].title)
            console.log(data.data[1].url)

            document.querySelector('#article1').innerText = `News article: ${data.data[0].title} \n read more at: ${data.data[0].url}`
            document.querySelector('#article2').innerText = `News article: ${data.data[1].title} \n read more at: ${data.data[1].url}`
            document.querySelector('#article3').innerText = `News article: ${data.data[2].title} \n read more at: ${data.data[2].url}`



            fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
                .then(res => res.json()) // parse response as JSON
                .then(data => {

                    console.log(data)
                    console.log("General country data: ", data[0].altSpellings[0])
                    console.log("General country data: ", data[0].altSpellings[1])
                    console.log("General country data: ", data[0].altSpellings[2])


                    document.querySelector('#countryTitles').innerText = `also known as: ${data[0].altSpellings[0]}, ${data[0].altSpellings[1]}, ${data[0].altSpellings[2]}`
                    document.querySelector('#population').innerText = `Population: ${data[0].population} `
                    document.querySelector('#region').innerText = `Region: ${data[0].region} `
                    document.querySelector('#flag').src = data[0].flags.png

                })
                .catch(err => {
                    console.log(`error ${err}`)

                });

        })
        .catch(err => {
            console.log(`error ${err}`)

        });

}

