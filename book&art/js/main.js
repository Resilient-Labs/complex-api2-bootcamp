//have my first fetch give a random(or selected by letter in 1st name) anime character then my second will find a youtube video with of the anime the character is from//


//got help from Dunia

function handleResponse(response) {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    // for (let i = 0; i < response.items.length; i++) {
    //     let item = response.items[i];
    const randomIndex = Math.floor(Math.random() * response.items.length)
    const item = response.items[randomIndex];
    const title = item.volumeInfo.title;
    const authors = item.volumeInfo.authors;
    const date = item.volumeInfo.publishedDate;
    const imgSrc = item.volumeInfo.imageLinks.smallThumbnail;
    const year = date.substring(0, 4);

    console.log(item);


    const newLi = document.createElement('li');
    const img = document.createElement('img');


    newLi.innerText = `Title: ${title} Author(s): ${authors} Date: ${year}`;
    img.src = imgSrc;
    content.appendChild(newLi);
    newLi.appendChild(img)

    getArt(year);
}
// const year = response.items[0].volumeInfo.publishedDate.substring(0, 4);
// getArt(year);



function getBooks() {
    let selection = document.querySelector("input").value
    const url = `https://www.googleapis.com/books/v1/volumes?q=${selection}&key=AIzaSyD712TWZPE2zIoSwLSdPI5dlotcLi_PmMY`

    fetch(url)
        .then(res => res.json())
        .then(handleResponse)
    console.log("working")


}
function getArt(year) {
    const url0 = `https://api.api-ninjas.com/v1/historicalevents?year=${year}`
    fetch(url0, {
        headers: {
            'X-Api-Key': 'YMtZrONkqzAGCgRb/UTonQ==WCdMrBY4VHGeHSQ7'
        }
    })
        .then(res => res.json())
        .then(data0 => {
            console.log(data0)
            document.querySelector('h3').innerText = data0[2].event
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


document.querySelector('button').addEventListener('click', getBooks);


