document.querySelector('button').addEventListener('click', pronunciationPartOfSpeech)

function pronunciationPartOfSpeech() {
    let word = document.querySelector('#word').value
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca470752c0msh75e49f2589669d9p1eca3ejsn9b27bf82a472',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    }
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            let ul = document.querySelector('ul')
            let liPronunciation = document.createElement('li')

            // Remove previous results
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }

            liPronunciation.innerText = `Pronunciation (发音): ${data.pronunciation.all}`
            ul.appendChild(liPronunciation)

            translateToChinese(word, data.results[0].partOfSpeech, ul)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function translateToChinese(word, partOfSpeech, ul) {
    fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyC-rZEhYZJi-OTXWlw2f6H1n9o3FSqxHQo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ q: word, target: 'zh' })
    })
    .then(res => res.json())
    .then(data => {
        let translation = data.data.translations[0].translatedText
        let liTranslation = document.createElement('li')
        liTranslation.innerText = `Translation (翻译): ${translation}`
        ul.appendChild(liTranslation)

        fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyC-rZEhYZJi-OTXWlw2f6H1n9o3FSqxHQo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ q: partOfSpeech, target: 'zh' })
        })
        .then(res => res.json())
        .then(data => {
            let translationPOS = data.data.translations[0].translatedText
            let liTranslationPOS = document.createElement('li')
            liTranslationPOS.innerText = `Part of Speech: ${partOfSpeech} (${translationPOS})`
            ul.appendChild(liTranslationPOS)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
