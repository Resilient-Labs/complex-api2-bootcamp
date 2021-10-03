document.querySelector("button").addEventListener("click", getEvent);

function getEvent() {
  const search = document.querySelector("input").value;

  const movieUrl = `http://www.omdbapi.com/?apikey=b07a2b27&t=${search}`;

  fetch(movieUrl)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      fetch(
        `https://gnews.io/api/v4/search?q=${data.Year}&token=1c10ba2c9b6630c09cf8878a42580ff7&lang=en`
      )
        .then((res) => res.json()) // parse response as JSON
        .then((dataNews) => {
          document.querySelector(".title").innerText = `Title: 
            ${dataNews.articles[0].title}`;
          document.querySelector(".content").innerText = `Description: 
            ${dataNews.articles[0].description}`;
          document.querySelector(".source").innerText = `Source 
            ${dataNews.articles[0].source.url}`;
          console.log(dataNews);
        });
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
