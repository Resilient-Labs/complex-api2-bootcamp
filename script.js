// quick comments: 
// I recieved alot of guidence from Joyce, Valery and my mentor Alex P. 
// Joyce and Valery were able to help me comb through errors I made between lines 10 through 16
// and Alex was able to guide me on line 26 and specifically on line 27 to find the correct file path in bracket notation for the indecies , and dot notation for the exact path. 


const geniusApiKey = 'ed4b3a3343mshaf51db9eb303813p1e8c89jsn2a2040a8ad40';
const giphyApiKey = 'NsUtfz7TkbbENsQHJprv7Wz5qcz3eAxr';

document.querySelector('button').addEventListener('click',getGif)

function getGif(){
      // const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&api_key=${geniusApiKey}`
      const songName = document.getElementById('song-name').value;
      const options = {
            method: 'GET',
            headers: {
                  'X-RapidAPI-Key': 'ed4b3a3343mshaf51db9eb303813p1e8c89jsn2a2040a8ad40',
                  'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
      };
      
      fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&per_page=2&page=0`, options)
            .then(response => response.json())
            .then(response => {
                  console.log(response)
                  
          const gifName = response.hits[0].result.title 
            const gifArtist = response.hits[0].result.artist_names

             document.getElementById('song-title').innerText = gifName
             document.getElementById('song-artist').innerText = gifArtist
                              

          const giphyApiKey = 'NsUtfz7TkbbENsQHJprv7Wz5qcz3eAxr';

          const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${gifName}&limit=1&offset=0&rating=pg-13&lang=en`;
          fetch(giphyUrl)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            document.querySelector('img').src = data.data[0].images.original.webp
          })
              
            })
      

            .catch(err => console.error("this is an " + err));
}


