document.querySelector('button').addEventListener('click', showMeTheSpots)
function showMeTheSpots() {
  const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`

// const url =`https://api.goprogram.ai/inspiration`
  fetch(url,{
    method: 'Get'
  })
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let Q = Math.floor(Math.random() * 10)
      let Quote = data[Q].content.rendered
      document.querySelector('h3').innerHTML = Quote

      let translate = `https://api.giphy.com/v1/gifs/search?&api_key=ycUpVwOqnBj9yAc3CbzASYDoyIAPWZoJ&q=inspirational-zen-clip`
  
      fetch(translate)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          let A = Math.floor(Math.random()*30) 
          let charPic = data.data[A].embed_url
          document.querySelector('iframe').src = charPic

        })

    })

}
