//generate a random quote then translate it into pig latin

document.querySelector('button').addEventListener('click', getRandomQuote)
// const apiKey = 'asgPY8g+26Xp9jn6jlcopw==ncbHZEyMPkd3kgBw'
function getRandomQuote() {
    // const apiKey = 'asgPY8g+26Xp9jn6jlcopw==ncbHZEyMPkd3kgBw'
    const url = 'https://api.quotable.io/quotes/random'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data["0"].content)
            console.log(data["0"].author)
            let randomQuote = data["0"].content
            let randomAuthor = data["0"].author
            document.querySelector('#regularQuote').innerText = randomQuote + '  -  ' + randomAuthor



            const url2 = `https://api.funtranslations.com/translate/pig-latin.json?text=${randomQuote}`
            fetch(url2)
                .then(res => res.json())
                .then(info => {
                    console.log(info)
                    console.log(info.contents.translated)
                    const pigQuote = info.contents.translated
                    document.querySelector('#pigLatinQuote').innerText = pigQuote + '  -  ' + randomAuthor
                })
                .catch(err => {
                    console.log(`err ${err} `)
                })
        })
        .catch(err => {
            console.log(`err ${err} `)
        })




}

// 29d4064a08144a82bfddc6863f5348c0// API key