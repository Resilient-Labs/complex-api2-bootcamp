function findService() {
    let pickMovie = document.querySelector('input').value;
    const url = `http://www.omdbapi.com/?apikey=9d47f0f9&t=${pickMovie}`;
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.Title);
        console.log(data.Poster);
        document.querySelector('h3').innerText = data.Title;
        document.querySelector('img').src = data.Poster;

        console.log(data.imdbID)


        const secondUrl = `https://api.watchmode.com/v1/title/${data.imdbID}/sources/?apiKey=Hpb6WFgwHllChGgw3taq9lNTdHVTtZHYMYe420by`
        console.log(secondUrl)
        fetch(secondUrl)
        .then(response => response.json())
        .then(data2 => {

            console.log(data2)
            console.log(data2[0].name)
            console.log(data2[0].web_url)

            document.querySelector('h4').innerText = data2[0].name;
            document.getElementById('link').href = data2[0].web_url;


        })
    });
}

document.querySelector('button').addEventListener('click', findService);

