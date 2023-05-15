

function lastFM() {
  const apiKey = 'ca9aa393af9c7f361e54929a35918ced';
  const albumName = document.querySelector('#album').value;
  let artist = document.querySelector('#artist').value
  let albumImage = document.querySelector('.album')

  const url = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artist}&album=${albumName}&format=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    
    albumImage.src = data.album.image.find(img => img.size === 'extralarge')?.['#text']; //this line is accessing the album art cover, the data was hard to grab because the 'text' property had an octothorpe in front of it.
    let albumTitle= document.querySelector('#albumName')
    //'track total' represents the duration of the first track of the selected album.Following that 'track array' converts the numbers of the duration into strings and track covert turns them back into individual numbers. finally 'track sum' adds those numbers together to give us an issue number id to search for in the comic vine api. Ellie helped me with the ternary opeator on line 19 which allows the program to still generate a comic if the given album doesnt have a track duration. I also created some conditionals due to a few albums I tested ended up being a few of the same issue id's so i added in some randomization methods to switch it up a bit.
    let trackTotal = 'tracks' in data.album ? `${data.album.tracks.track[1].duration}`: (Math.ceil(Math.random()*8912)).toString() 
    let trackArray = trackTotal.split('')
    let trackConvert = trackArray.map(x => +x)
    let trackSum = trackConvert.reduce((a,b) => a+b,0)

      albumTitle.innerText = `Album : ${data.album.name} by ${data.album.artist}`
    if(trackTotal === 'null'){
      trackTotal = (Math.ceil(Math.random()*25)).toString()
    }
    if( trackSum >= 9 && trackSum <= 16){
     trackSum = Math.ceil(Math.random()*(5)+1)
    }

    console.log(trackTotal)
    console.log(trackSum)
    getComic(trackSum)

    })
    .catch(error => {console.error(error)
    document.querySelector('#Error').innerText = 'No Results found! check your spelling!'});
   
}





function getComic(trackSum){
// let selection = document.querySelector('input').value
const comic = document.querySelector('.comic')
let comicName = document.querySelector('#comicName')
const apiUrl = 'https://corsproxy.io/?' + encodeURIComponent(`https://comicvine.gamespot.com/api/issues/?api_key=9bde55ab2add47e90aa4662580878024f0585bae&format=json&filter=series:4005,issue_number:${trackSum},name:X-Men&sort=field_list=name,issue_number,description,image/`);

fetch(apiUrl, 
)
  .then(res => res.json()) // parse response as JSON 
  .then(data => { 
    console.log(data)
//selects a comic name and cover from the comic vine database, I tried my best to pick from the arrays with the most english-language issues of X-men
   comic.src = data.results[1].image.medium_url
   comicName.innerText = data.results[1].name
  
  }) 
  .catch(err => { 
      console.log(`error ${err}`) 
  });
 
}

const button = document.querySelector('#button').addEventListener('click', lastFM)



