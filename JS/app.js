document.querySelector('button').addEventListener('click', getReview)

function getReview(){
    let movieName = document.querySelector('input').value
    
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieName}&api-key=bPVECwXteYAGr0A9uFgku7Ju4j2QWCTW`)
        .then(res => res.json())
        .then(movie => {
            console.log(movie);//checks to see if API data shows up
            document.querySelector('h2').innerText = movie.results[0].summary_short
            
            function jiveTalk(){
                let translate = document.querySelector('h2').innerText
                fetch(`https://api.funtranslations.com/translate/jive.json?text=${translate}`)
                    .then(res => res.json())
                    .then(jive => {
                        console.log(jive);//checks to see if API data shows up
                        document.querySelector('h2').innerText = jive.contents.translated
                    })
                    .catch(err => {
                        console.log(`Error: ${err}`)
                    });
            }
            
            jiveTalk(); // call jiveTalk() function to translate the review
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
}


