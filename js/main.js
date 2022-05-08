document.querySelector('button').addEventListener('click', getSong)

function getSong() {
    document.querySelectorAll('section').forEach(el => el.remove())
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
            'X-RapidAPI-Key': 'a513589326msh39a90b04ab22f63p1a3a9bjsn1016a0e3f7c6'
        }
    };
    const container = document.querySelector('.container')
    let song = document.querySelector('input').value
    let songArr = song.split(' ')
    song = songArr.join('%20')
    let shazamUrl = `https://shazam.p.rapidapi.com/search?term=${song}&locale=en-US&offset=0&limit=5`

    fetch(shazamUrl, options)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            for (let i = 0; i < data.tracks.hits.length; i++) {
                let subcontainer = document.createElement('section')
                container.appendChild(subcontainer)

                let lyricsSong = data.tracks.hits[i].track.title
                let lyricsArtist = data.tracks.hits[i].track.subtitle

                let songTitle = document.createElement('h2')
                songTitle.innerText = lyricsSong
                songTitle.classList.add('title')
                subcontainer.appendChild(songTitle)

                let songArtist = document.createElement('h3')
                songArtist.innerText = lyricsArtist
                songArtist.classList.add('songArtist')
                subcontainer.appendChild(songArtist)

                lyricsUrl = `https://api.lyrics.ovh/v1/${lyricsArtist}/${lyricsSong}`
                fetch(lyricsUrl)
                .then(res => res.json())
                .then(data => {
                    let songLyrics = document.createElement('p')
                    songLyrics.innerText = data.lyrics
                    songLyrics.classList.add('songLyrics')
                    subcontainer.appendChild(songLyrics)

                    if (data.lyrics === undefined){
                        subcontainer.remove()
                    }
                    document.querySelector('input').value = ''
                })
                .catch(err => {
                    console.log(`error ${err}`)
                })               
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
