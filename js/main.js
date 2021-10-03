let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=________________`

fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i <= 10; i++) {
      let authorName = data.results.books[i].author

      let isbn = data.results.books[i].isbns[0].isbn10
      console.log(data.results.books[i].author, isbn)

      let urlISBN = `https://www.googleapis.com/books/v1/volumes?q=${isbn}`

      fetch(urlISBN)
        .then(res => res.json())
        .then(googleData => {
          let bookCover = googleData.items[0].volumeInfo.imageLinks.thumbnail
          let bookDescription = googleData.items[0].volumeInfo.description

          const li = document.createElement('li')
          const photo = document.createElement('img')
          const description = document.createElement('p')
          photo.src = bookCover
          description.innerText = bookDescription
          li.innerText = `Author: ${authorName}`

          document.querySelector('#container').appendChild(li)
          document.querySelector('li').appendChild(photo)
          document.querySelector('li').appendChild(description)
          console.log(googleData.items[0].volumeInfo.imageLinks.thumbnail)
        })
        .catch(err => {
          console.log(`error ${err}`)
        });
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  })