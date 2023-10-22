// getting world wide location 
// second api will get food from that location 
// show location and the food around the area 
document.querySelector('button').addEventListener('click',findLocation)
function findLocation(){ 
      //select user input from the API as specified by the user 
    const selection = document.querySelector('input').value 
    const url = `https://api.api-ninjas.com/v1/country?name=${selection}`  //${selection}
    
    mode = 'cors'//??? hoste api allows
    method = 'GET'
    const headers = {
    headers:{
        'X-Api-Key': 'cKeJoFU1St6w3OKvQGZF5ND3wsj7bl5SOaloYeCf'
    }
   }
       fetch(url,headers) // gets information from nasa API
        .then(res => res.json())
        .then(data1=>{
           console.log(data1[0].gdp)
        })
    const cityPicture = `https://api.teleport.org/api/urban_areas/slug:${selection}/images/`  
    fetch(cityPicture)
    .then(res => res.json())
    .then(data2 =>{ 
        const searchResults = data2;  //['city:search-results']
        const firstResult = searchResults; 
        console.log(firstResult)
        document.querySelector('img').src = data2.photos[0].image.web
    })
    } 
    
    
    
          
         
// fetch(weather_api)
// .then(res => res.json())
// .then(data =>{
//     console.log(data.current) 
//     let temp = Math.floor(data.current.temp_f)
//     li = document.createElement('li')
//      let text = document.createTextNode(`${combine}:${temp}`)
//      li.appendChild(text)

//     ul.appendChild(li)
//     console.log(data[i].center)
// })} 

// })
// .catch(error => {
// console.log(`Error: ${error}`);
// });
// }

// }


// const url = '';
