document.getElementById('button1').addEventListener('click', generator)


function generator(){

    let artistName = document.getElementById('inputBox').value
    let url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => { 
    console.log(data)
    
    let countryCode = data.artists[0].strCountryCode

    let name = data.artists[0].strArtist
    document.querySelector('.name').innerText=name

    let location = data.artists[0].intFormedYear
    document.querySelector('.yearformed').innerText=location

    let mood =data.artists[0].strMood
    document.querySelector('.mood').innerText=mood

    let born= data.artists[0].intBornYear
    document.querySelector('.yearborn').innerText=born



    fetch(
        `https://date.nager.at/api/v3/publicholidays/${location}/${countryCode}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => { 
    for (let i = 0; i<data.length; i++){
        
        let holidayName = data[i].name
        let h2 = document.createElement('h2')
        h2.innerText = holidayName
        document.querySelector('.locationhere').appendChild(h2)
    }
       



    })
       
    })}