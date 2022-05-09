document.querySelector('button').addEventListener('click', getRandomPict)

function getRandomPict() {
    let rest = document.querySelector('input').value;
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
            'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
        }
    };

    fetch(`https://theaudiodb.p.rapidapi.com/searchalbum.php?s=${rest}`, options)
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.album.length; i++) {
                console.log(data.album)
            
              
                let stationName = document.createTextNode(data.album[i].strAlbum)
                let li = document.createElement('li')

                li.appendChild(stationName)

                document.querySelector('ul').appendChild(li)
            

            

                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                        'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
                    }
                };

                fetch(`https://spotify23.p.rapidapi.com/search/?q=${data.album[i].strAlbum}&type=album&numberOfTopResults=5`, options)
                    .then(response => response.json())
                    .then(data1 => {
                        console.log(data1.albums.items[0].data.coverArt.sources[0].url)


                    
                        

                        let imageTemp = document.createElement(`${data1.albums.items[0].data.coverArt.sources[0].url}`)
                        let div = document.createElement('div')

                        div.appendChild(imageTemp)
                        let listElements = document.querySelectorAll('li')
                        listElements[i].appendChild(div)

                        


                        



                    })
                

            }
        })
        .catch(err => {
            console.log('error')
        })
}

returnData() 







            //console.log(data.results[0].geometry.location.lat)
            //console.log(data.results[0].geometry.location.lng)
            //latt = data.results[0].geometry.location.lat
           // long = data.results[0].geometry.location.lng
       


        
/*function getEvent(latt, long) {
    let date = document.querySelector('date').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'eventbrite-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
        }
    };

    fetch(`https://eventbrite-com.p.rapidapi.com/events/nearby/${latt}/${long}?radius=25&date_start=${date}&1&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



}*/    

