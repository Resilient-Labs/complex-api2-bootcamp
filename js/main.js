    //creating a complex api with a random number being generated and another api with random advice


  function numAndAdvice(){
    const numUrl =`https://api.math.tools/numbers/nod`
    fetch(numUrl)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      let random = data.contents.nod.numbers.number
      musuem(random)
    document.querySelector('#number').innerText= random
      
    })


  }

  function musuem(num){
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if ('message' in data){
      alert('random number of the day does not have an artpeice')
    } else {
      document.querySelector('#title').innerText= data.title,
      document.querySelector('#artistDisplay').innerText = data.artistDisplayName,
      document.querySelector('#artistBio').innerText = data.artistDisplayBio
      document.querySelector('#myA').href= data.objectURL
      document.querySelector('#myA').innerText= 'Learn More'
      document.querySelector('#date').innerText = data.objectDate
      document.querySelector('#country').innerText = data.country
      document.querySelector('#culture').innerText = data.culture
      document.querySelector('#place').innerText = data.repository
    }
   

  })}




  document.querySelector('button').addEventListener('click', numAndAdvice)


