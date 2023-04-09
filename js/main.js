function getQuote () { //create a function and add an event listener to run the function
    let quote = document.querySelector('input').value // create a variable with a queryselector to target the input
fetch(`https://animechan.vercel.app/api/random/character?name=${quote}`)// everytime the user types the word is gonna go the url and match
       .then((response) => response.json())
         .then((data) => {

            document.querySelector('h2').innerText = `Anime: ${data.anime} ` 
            document.querySelector('h3').innerText = ` Character ${data.character }`
             document.querySelector('p').innerText = ` Quote: ${data.quote} `
          fetch(`https://api.giphy.com/v1/gifs/search?api_key=pn4oPVcebpV1RGedFoEwv3uI3Gpg1mvB&q=${quote}&limit=5`) // get another fetch and quoute means name of the character
           .then((response) => response.json())
         .then((data) => {
            
            
  document.querySelector('iframe').src = data.data[0].embed_url // get the information of the url so is in the DOM
         })
        })
    }
    document.querySelector('button').addEventListener('click', getQuote)// make a button so everytime the users click runs the function