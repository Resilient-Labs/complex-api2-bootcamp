function getRiddle(){ 
  const url = `https://riddles-api.vercel.app/random`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
   console.log(data)
    //const thanksJoyce = Math.floor(Math.random()* 10)
    //let quote = data[thanksJoyce].content.rendered
    document.querySelector('h3').innerText = `Riddle Me Dis: ${data.riddle}`
   
    
    const url1= `https://api.funtranslations.com/translate/shakespeare.json?text=Riddle-Me-Dis:-${data.riddle}Answer:-${data.answer}`
    fetch(url1)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h4').innerText= `${data.contents.translated}`

      
    

    })
    
  })
    .catch(err => {
        console.log(`error ${err}`)
      });
}
document.querySelector('button').addEventListener('click', getRiddle)
document.querySelector('#answer').addEventListener('click', getAnswer)