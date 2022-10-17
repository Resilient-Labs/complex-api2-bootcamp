let input = document.getElementById('input')
let btn = document.getElementById('btn').addEventListener('click', Search)
let image = document.getElementById('img')


function Search() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let div = document.querySelector('div')
            div.innerHTML = ''
            // let audio = document.getElementById('audio')
            // audio.setAttribute('src', data[0].phonetics[0].audio)
            console.log(audio)
            data.forEach(definition => {
                definition.meanings.forEach(item => {
                    item.definitions.forEach(subdefinition => {
                        let def = document.createElement('p')
                        def.innerText = subdefinition.definition
                        // let div = document.querySelector('div')
                        // div.innerHTML = ''
                        console.log(def, div)
                        div.appendChild(def)
                    })
                })
            })
            // let word = document.getElementById('result')
            // let def = document.getElementById('definition')
            // let def2 = document.getElementById('definition2')
            // let audio = document.getElementById('audio')
            // console.log(data, def)
            // def.innerHTML = data[0].meanings[0].definitions[0].definition
            // def2.innerHTML = data[0].meanings[0].definitions[1].definition
            // console.log(data[0].meanings[0].definitions[0].definition)
            // word.innerText = data[0].word

            // audio.src = data[0].phonetics[0].audio
            console.log(data)
        })
    const url2 = `https://api.unsplash.com/photos/random?query=${input.value}&client_id=XEGreltdGwANEubbjLZ0CoFAedLg9RepRJQbD_1-zMQ`
    fetch(url2)
        .then(res => res.json())
        .then(data2 => {
            console.log(data2)
            image.src = `${data2.urls.raw}`

        })
        .catch(err => {
            console.error(err)
        })

}
// 