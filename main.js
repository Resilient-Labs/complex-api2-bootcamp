let input = document.getElementById('input')
let btn = document.getElementById('btn').addEventListener('click', Search)
let image = document.getElementById('img')


function Search() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let word = document.getElementById('result')
            let def = document.getElementById('definition')
            let audio = document.getElementById('audio')

            def.innerText = data.meanings[0].definitions[0].definition
            word.innerText = data.word

            audio.src = data.phonetics[0].audio
            console.log(data)
            debugger
        })
    const url2 = `https://api.unsplash.com/photos/random?query=${input.value}&client_id=XEGreltdGwANEubbjLZ0CoFAedLg9RepRJQbD_1-zMQ`
    fetch(url2)
        .then(res => res.json())
        .then(data2 => {
            image.src = `${data2[0].urls.raw}`

        })
        .catch(err => {
            console.error(err)
        })

}