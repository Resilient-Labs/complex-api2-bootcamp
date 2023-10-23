
document.querySelector("button").addEventListener("click", mood);

function mood() {

                     //Mode retrieval type, Today, Author, Random
                     //key can be removed
                     //options can also be removed

    // let url = "https://programming-quotesapi.vercel.app/api/random"

    //api#1
    fetch('https://programming-quotesapi.vercel.app/api/random')
    .then(response => response.json())
    .then(data =>  {
    console.log(data)
    

    let text = document.querySelector('h3').innerText = data.quote

                 //&tag={Key word selected from first api}

    // https://api.giphy.com/v1/stickers/random?api_key=zxQfl97UZQrhC6c8RKyXXo8nVJ5Y6njg&tag=run&rating=pg-13


    //api#2

    function longWord(string) {
        let str = string.split(" ");
        let longest = 0;
        let word = null;
        for (let i = 0; i < str.length; i++)  {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }

    let tag = longWord(data.quote)
    console.log(tag)
    
        fetch(`https://api.giphy.com/v1/stickers/random?api_key=zxQfl97UZQrhC6c8RKyXXo8nVJ5Y6njg&tag=${tag}&rating=pg`)
        .then(res => res.json())
        .then((data) => {
    console.log('image')
    console.log(data)                      //Research Includes method
    document.querySelector('.imgTest').src = data.data.embed_url
    document.querySelector('.list').innerText
    
    // let text = document.querySelector('h3').innerText = quote
      //we have the id from the user's item
      //grab the value
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
})
}
//  API KEY = 'zxQfl97UZQrhC6c8RKyXXo8nVJ5Y6njg'
//   console.log(url);
  
//     fetch(url,{ 
//     method: "GET",
//     headers: {
//       "X-Api-Key": apiKey,
//       "Content-Type": "application/json"
//     }
//     })
//     .then(res => res.json()) 
//     .then(data => { 
//         console.log(data) 
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//       });
// }