


document.querySelector('button').addEventListener('click', randomCharacter)

function randomCharacter(){
    let number = Math.ceil(Math.random()*57)
    let url = `https://breakingbadapi.com/api/characters/${number}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].name)
        document.querySelector('.character').innerText= data[0].name
        document.querySelector('.charImg').src= data[0].img
        document.querySelector('.actor').innerText= data[0].portrayed
        let actor= data[0].portrayed
        fetch(`https://api.tvmaze.com/search/people?q=${actor}`)
        .then(res => res.json())
        .then(actorInfo => {
            console.log(actorInfo)
            
            document.querySelector('.actorImg').src=''
            document.querySelector('p').innerText=''
            let person = actorInfo[0].person
            console.log(person['image'] === null)
            if (person['image'] === null){
                document.querySelector('.actorImg').src=''
                document.querySelector('p').innerText='Image not available'
                
            }else{
                document.querySelector('.actorImg').src= person.image.medium
            }  
            
        })
    .catch(err => {
        console.log(`error ${err}`)
    })
})
}
