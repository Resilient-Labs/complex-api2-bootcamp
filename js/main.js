document.querySelector('button').addEventListener('click', makeQuoteMeme)

function makeQuoteMeme(){
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            document.querySelector('span').innerText = data.slip.advice
            let advice = data.slip.advice

            let url = `https://image-charts.com/chart?chl=${advice}&choe=UTF-8&chs=200x200&cht=qr&icqrf=5D576B`

            fetch(url)
                .then(
                    document.querySelector('img').src = url
                )
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}