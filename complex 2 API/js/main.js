// complex #2: anime quote generator

// get anime quote from a random anime title

document.querySelector('button').addEventListener('click', getTitle)

// gets random anime title
function getTitle() {
    fetch('https://api.jikan.moe/v4/random/anime')
    .then(res => res.json())
    .then(data => {
        let title = data.data.title
        console.log(title)
        document.querySelector('h2').innerText = title
        // puts title in 2nd fetch to find a quote from that title
        fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].quote);
            // shows user the quote from the random anime generator
            document.querySelector('h3').innerText = data[0].quote
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    .catch(err => {
        console.log(`error ${err}`)
    })
    })
}

    