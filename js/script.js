document.querySelector('button').addEventListener('click',btn )

function btn(){


    const encodedParams = new URLSearchParams();
    encodedParams.append("q", document.querySelector('input').value);
    encodedParams.append("target", "ja");
    encodedParams.append("source", "en");
    
    const options = {
        method: 'POST',
    	headers: {
            'content-type': 'application/x-www-form-urlencoded',
    		'Accept-Encoding': 'application/gzip',
    		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    		'X-RapidAPI-Key': 'cd1f88c465mshcd1bbe235fcc50ap11f393jsn9b1d56bbd25d'
    	},
    	body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.querySelector('h3').innerHTML = response.data.translations[0].translatedText
        let h3 = document.querySelector('h3')
        console.log(h3)
        let word = document.querySelector('h3').innerText
        
        
    
    
    
    
        
        fetch(`http://jisho.org/api/v1/search/words?keyword=${word}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            document.querySelector('.one').innerText = data.data[0].senses[0].english_definitions[0]
            document.querySelector('.two').innerText = data.data[0].senses[0].english_definitions[1]
            document.querySelector('.three').innerText = data.data[0].senses[0].english_definitions[2]
            
        })
    })
    
    .catch(err => console.error(err)
    );
}