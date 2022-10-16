/* Instructions: Type title of book and Open Library Search API will return name of author. 
Then the Google Search API will return a mini description of author. */

document.querySelector('button').addEventListener('click', findAuthor)

function findAuthor() {

    let bookTitle = document.querySelector('input').value

    fetch(`http://openlibrary.org/search.json?title=${bookTitle}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            let author = data.docs[0].author_name
            document.querySelector('h2').innerText = author

            fetch(`https://api.scaleserp.com/search?api_key=954312890F9E4974B9AB98A95CD2572C&q=${author}&hl=en&output=json`) //125 searches a month. Be mindful! 
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    console.log(data)

                let biography = data.knowledge_graph.description
                document.querySelector('p').innerText = biography

                })
                .catch(err => {
                    console.log(`error ${err}`)
                });


        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}