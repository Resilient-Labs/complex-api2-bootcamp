// goal: Use data returned from one api to make a request to another api and display the data returned

// worked with mentors Trek and Micheal Kazin on this

const plantInput = document.querySelector('input')
const getInfoBtn = document.querySelector('#getInfoBtn')
const resetBtn = document.querySelector('#resetBtn')
const plantCommonName = document.querySelector('#commonName')
const plantSciName = document.querySelector('#sciName')
const sunlightAmount = document.querySelector('#sunlightAmount')
const sunlightAmountEmoji = document.querySelector('#sunlightAmountEmoji')
const plantImage = document.querySelector('#plantImage')

function getPlantsAndEmojis() {
    let selector = document.querySelector('input').value
    const url = `https://perenual.com/api/species-list?page=1&key=sk-yl9b642f0124f14ce444&q=${selector}`


    fetch(url)
        .then(res => res.json())
        .then(plantData => {
            // console.log(plantData)
            console.log(plantData.data[0])

            // error to display if plant name is not found
            if (plantData.data.length === 0) {
                plantCommonName.innerText = "NO PLANTS FOUND! Please check your spelling and try again"
                return
            }

            if (plantData.data[0].common_name === undefined) {
                plantCommonName.innerText = "No common name available"
            } else {
                plantCommonName.innerText = plantData.data[0].common_name
            }


            if (plantData.data[0].scientific_name === undefined) {
                plantSciName.innerText = "No scientific name available"
            } else {
                plantSciName.innerText = plantData.data[0].scientific_name
            }


            if (plantData.data[0].scientific_name === undefined) {
                sunlightAmount.innerText = "No sunlight data available"
            } else {
                sunlightAmount.innerText = plantData.data[0].sunlight[0]
            }

            const url2 = `https://api.unsplash.com/search/photos/?query=${plantCommonName.innerText}&client_id=Jv3XmxIOH0RMGYp_5_Ypjam6QTtEncDQVOoqqW9HUh8&page=1`
            fetch(url2)
             .then(res => res.json())
             .then(imageData => {


                const plantImageURL = imageData.results[0].urls.small
                plantImage.src = imageData.results[0].urls.small
                console.log(imageData)

             })

        })
        .catch(err => {
            console.log(`error ${err}`)
        });


}

function resetPage() {
    window.location.reload()
}


getInfoBtn.addEventListener('click', getPlantsAndEmojis)
resetBtn.addEventListener('click', resetPage)




// getting input from the user
// taking the user's input and connecting it to the api
// getting information from the api
// how to render


            // if (plantData.data[0].sunlight[0] = 'full shade') {
            //     sunlightAmountEmoji.innerText = "🌥️"
            // } 
            // if (plantData.data[0].sunlight[0] = 'part shade') {
            //     sunlightAmountEmoji.innerText = "☀️"
            // }
            // if (plantData.data[0].sunlight[0] = 'sun-part shade') {
            //     sunlightAmountEmoji.innerText = "🌤️"
            // }
            // if (plantData.data[0].sunlight[0] = 'full sun') {
            //     sunlightAmountEmoji.innerText = "☀️"
            // } 

            // , part_shade, sun-part_shade, full_sun)
            // for edible/poisonous -- option to use CSS to display none (refer to simple Nasa hidden class example)
            
            // if (plantData.data[0].sunlight[0] = 'full shade') {
            //     sunlightAmountEmoji.innerText = "🌥️"
            // } 
            // if (plantData.data[0].sunlight[0] = 'part shade') {
            //     sunlightAmountEmoji.innerText = "☀️"
            // }
            // if (plantData.data[0].sunlight[0] = 'sun-part shade') {
            //     sunlightAmountEmoji.innerText = "🌤️"
            // }
            // if (plantData.data[0].sunlight[0] = 'full sun') {
            //     sunlightAmountEmoji.innerText = "☀️"
            // } 


            // const url2 = `https://emoji-api.com/emojis?access_key=7cca669fc58c051559534487dead5667b436a001`
            // fetch(url2)
            //  .then(res => res.json())
            //  .then(data => {
            //     console.log(data)

            //  })
            
            
            // for loop to apply all things across the array
            // if you want everything displayed in a line -- you can use a UL or table
            // variable =.createElement('li')
            // variable = 
            // once you get working, even if it's not pretty, COMMIT TO GITHUB