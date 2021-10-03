// document.querySelector('#question').addEventListener('click', randomNum)
// document.querySelector('#answer').addEventListener('click', getAnswer)


document.querySelector('button').addEventListener('click', showAnime)
function randomNum() {
   const url = 'https://animechan.vercel.app/api/random'
   fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h2').innerHTML = `Who said this quote: ${data.quote}`
        let name = document.querySelector('input').value
        console.log(data)
        const url2 = `https://animechan.vercel.app/api/quotes/anime?title=${data.anime}`
        fetch(url2)
        .then(res => res.json())
        .then(data2 => {
            document.querySelector('h3').innerHTML = `Anime: ${data2[0].anime}. Character: ${data2[0].character}`
            console.log(data2)
        })
    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })

}randomNum()

function showAnime() {
    document.querySelector('h3').style.display = 'block'
}
