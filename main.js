const selectButton = document.querySelector('button')
let rmName = document.querySelector('#name')
let answerMe = document.querySelector('#answer')
let picMe = document.querySelector('#image')

function getEpisode() {
    let pick = document.querySelector('#press')

    const url = (`https://rickandmortyapi.com/api/episode?&${pick}`)

    fetch(url)
        .then(res => res.json())
        .then(episodeData => {
           
            const randomEpisode = episodeData.results[Math.floor(Math.random() * episodeData.results.length)]
            
            let episodeName = randomEpisode.name;
            
            rmName.textContent = episodeName;

            const url2 = ('https://yesno.wtf/api')

            fetch(url2)
                .then(res => res.json())
                .then(yesOrNoData => {
                    console.log(yesOrNoData)
                    let giveMeAnAnswer = yesOrNoData.answer
                    answerMe.innerText = giveMeAnAnswer
                    let giveMePic = yesOrNoData.image
                    picMe.setAttribute('src', giveMePic)
                })
        })
}

selectButton.addEventListener('click', getEpisode)
