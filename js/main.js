
document.querySelector("button").addEventListener("click", kickBucket)

function kickBucket(){

    fetch(
        `https://api.api-ninjas.com/v1/bucketlist`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'n93Xtw/Axfw76Om34G8FAA==HffRs90irrr5jimP' },
            contentType: 'application/json'
          }
    ) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
          console.log(data) 
    
          const bucketList = data.item
    
          document.querySelector('h2').innerText = data.item
    
    
    
          const apiKey = 'TZv5O3z46tScwKBTI5qkLVFKcIseTuBGhPsYsnUg1ffsxm7ut8siVaXi';
          const photo = `https://api.pexels.com/v1/search?query=${bucketList}`
    
    
          fetch(photo, {
            headers: {
              Authorization: apiKey
            }
          })
    
            .then(res => res.json()) // parse response as JSON 
            .then(dataPhoto => { 
              console.log(dataPhoto) 
    
              document.querySelector('img').src = dataPhoto.photos[0].src.portrait
    
    
            }) 
            .catch(err => { 
                console.log(`error ${err}`) 
            });
    
    
    
    
    
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        });



}

