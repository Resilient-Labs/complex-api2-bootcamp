

 // select the button element from the DOM and add an event listener
let btn = document.querySelector('button');
btn.addEventListener('click', getFact);

function getFact() {
  // fetch API
  let url = 'https://cat-fact.herokuapp.com/facts';
  fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(dataFact => { 
      // get a random quote 
      const randomI = Math.floor(Math.random() * dataFact.length);
      const randomQuote = dataFact[randomI].text;

      // display the quote
      let quoteFacts = document.querySelector('.quote');
      quoteFacts.innerText = randomQuote;

    
      let urlTwo = 'https://api.thecatapi.com/v1/images/search?limit=10'


      fetch(urlTwo)


      .then(response => response.json())
      .then(data => {
        // do something with the data

        
       

      })



       












      
      //imgElement.src = urlTwo;
    })
    .catch(err => { 
      console.log(`error ${err}`); 
    });
}
