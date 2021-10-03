
document.querySelector('button').addEventListener('click', pokemon)

function pokemon(){
    const x = document.querySelector('input').value
    let whatever = x.toLowerCase()
    // let name = document.querySelector('.name').value
    const url = `https://pokeapi.co/api/v2/pokemon/${whatever}`
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(data =>{
            document.querySelector('.imgone').src= data['sprites']['front_default']
    console.log(data)
            const pokeUrl = `https://api.pokemontcg.io/v2/cards?q=name:${data.name}`
            fetch(pokeUrl)
            .then(response => {
                console.log(response)
                return response.json()
                })
            .then(datacard => {
                document.querySelector('.imgtwo').src=datacard.data[0].images.small
                console.log(datacard)
            })
    })
}
