function dndMake() {

    const nameGen = `https://www.behindthename.com/api/random.json?usage=ita&gender=f&key=da599341799`
    fetch(nameGen)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    const myName = data.names.join(' ')
    console.log(myName)
    const dndClass = `https://www.dnd5eapi.co/api/classes/`


        fetch(dndClass)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        let i = Math.floor(Math.random() * 12)
        const dndClass2 = data.results[i].url
        console.log(myName)
        console.log(data.results[i])
            

            fetch(`https://www.dnd5eapi.co${dndClass2}`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
            console.log(data.name)
            console.log(myName)

            const myClass = data.name

            const victoryArr = ['Slain', 'Devoured', 'Decimated', 'Ended', 'Demolished']
            const nounArr = ['Mighty', 'Fiendish', 'Horribly', 'Tenacious', 'Gigantic']

            const j = Math.floor(Math.random() * victoryArr.length)
            const n = Math.floor(Math.random() * nounArr.length)
            
    
                fetch(`https://www.dnd5eapi.co/api/monsters`)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                console.log(data)
                let m = Math.floor(Math.random() * 332)
                const dndFiend = data.results[m].name
                console.log(dndFiend)
                
                document.querySelector('#className').innerText = `I am ${myName} the ${myClass} and I have ${victoryArr[j]} the ${nounArr[n]} ${dndFiend}!`
        
                
                })
                .catch(err => {
                console.log(`error ${err}`)
                });
            })
            .catch(err => {
            console.log(`error ${err}`)
            });
        })
        .catch(err => {
        console.log(`error ${err}`)
        });
    })
    .catch(err => {
    console.log(`error ${err}`)
    });

}

document.querySelector('#button').addEventListener('click', dndMake)