document.querySelector('button').addEventListener('click', searchMusic)
const artistName = document.querySelector('h2')
const section = document.getElementById('albums')
const artistImage = document.getElementById('artistImage')
const body = document.querySelector('body')

function searchMusic(){
    body.style.background = 'black'
    artistName.style.color ='white'
    const artist = document.querySelector('input').value
    document.querySelector('input').value = ''
    artistImage.innerHTML = ''
    section.innerHTML = ''
    section.style.display = 'flex'


    fetch(`https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=${artist}&count=10&type=albums`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com",
		"x-rapidapi-key": "ed90666f5emsh2a3f430f2550497p1e9a1fjsn54a56b4ac2d7"
	}
})
    .then(res => res.json())
    .then(data => {
        artistName.innerText = data.Query
        console.log(data);
        
        for(let i = 0; i < data.Results.length;i++){
            if(data.Results[i].album_type === 'album'){
            const links = document.createElement('a')
            const img = document.createElement('img')
            const playList = document.createElement('iframe')
            section.append(links)
            section.append(playList)
            links.href = data.Results[i].external_urls.spotify
            links.append(img)
            img.src = data.Results[i].images[0].url
            playList.allow = 'encrypted-media'
            playList.src = `https://open.spotify.com/embed/album/${data.Results[i].id}`
            }
        }
        getArtistImage(data.Results[0].artists[0].name)
    })
    .catch(err => {
        console.error(err);
    });
}

function getArtistImage(artist){

    fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${artist}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": "ed90666f5emsh2a3f430f2550497p1e9a1fjsn54a56b4ac2d7"
	}
        })
        .then(res => res.json())
        .then(data => {
            const img = document.createElement('img')
            artistImage.append(img)
            img.src = data.value[2].thumbnailUrl
            img.classList.add('artistImage')
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
}