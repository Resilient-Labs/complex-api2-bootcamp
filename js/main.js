//url is already randomized!
document.querySelector('button').addEventListener('click', getCats)
//PUT OUTSIDE THE FUNCTION
 const url = `https://api.thecatapi.com/v1/images/search?api_key=o5ylSb6rzdjMGWHNYxB1FPyuEEGPV82XgMs96zJQIK8qd35VLEXGE1YTFMDoZyYh`

function getCats(){
 
  fetch(url) 
      .then(res => res.json())
      .then(data => { 
        document.querySelector('img').src = (data[0].url) 

        let url2 = `https://cat-fact.herokuapp.com/facts`

        fetch(url2)
        .then(res => res.json())
        .then(data => {
          let i = Math.floor(Math.random() * 5)
          document.querySelector('h2').innerText = `Fun Cat Fact: ${data[i].text}`
          console.log(data)

        })







      }) 
      .catch(err => { 
        console.log(`error ${err}`) 
      });

}