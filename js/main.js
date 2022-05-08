document.querySelector('button').addEventListener('click', seeAmiibo)

function seeAmiibo(){
    let villager = document.querySelector('input').value
    let url = `https://www.instafluff.tv/ACDB/Villagers/${villager}.json`
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
    //   console.log(data)
       document.querySelector('h2').innerText = villager
       document.querySelector('h3').innerText = data.birthday
       document.querySelector('h4').innerText = data.description
    //   document.querySelector('img').src = data.hdurl
      document.querySelector('p').innerText = data.saying
    
       fetch(`https://www.amiiboapi.com/api/amiibo/?name=${villager}`) 
        .then(res => res.json()) // parse response as JSON 
        .then(amiiboData => { 
        console.log(amiiboData) 
        document.querySelector('img').src = amiiboData.amiibo[0].image
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 

})
}
