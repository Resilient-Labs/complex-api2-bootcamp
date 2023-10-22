document.querySelector('button').addEventListener('click', getWord)

function getWord(){
    let word = document.querySelector('input').value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

        let table = document.querySelector('table')
        table.innerHTML=''
        let row

        info[0].meanings.forEach(element => {

            //make a table header for each part of speech
            let header = document.createElement('th')
            row= document.createElement('tr')
            table.appendChild(row)
            row.appendChild(header)
            header.innerText = `${element.partOfSpeech}`


            //grab the definition for each part of speech
            element.definitions.forEach(element =>{

                // //make a new row for each definition in a given part of speech
                    let data = document.createElement('td')
                    row= document.createElement('tr')
                    table.appendChild(row)
                    row.appendChild(data)
                    data.innerText= `${element.definition}`
            })
            
        })

        getSong(word)
    
    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })
}   



function getSong(word){

    fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_artist=beyonce&page_size=10&page=1&q_lyrics=${word}&apikey=6a50050a1c3b3bfdd723c64c58694bfa`)
    .then(res => res.json()) // parse response as JSON 
    .then(info => { 

        let list = document.querySelector('ul')
        list.innerHTML=''


        let arr = []
        let arr2 =[]

        info.message.body['track_list'].forEach(element => {

            if (!arr.includes(element.track['track_name'].toLowerCase())){
                arr.push(element.track['track_name'].toLowerCase())
                arr2.push(element.track['track_name'])
            }
        })

        arr2.forEach(element => {


            let listItems = document.createElement('li')
            list.appendChild(listItems)
            listItems.innerText = `${element}`
        }); 

    })

    .catch(err => { 
        console.log(`error ${err}`) 
    })

}