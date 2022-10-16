let result = document.querySelector('#result')
let locationResult = ''

fetch(`https://ipapi.co/json/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      locationResult = data.region
      result.innerHTML += `
      <h2>${data.city}, ${data.region}, ${data.postal}</h2>`
    
    })

function getNews (){
    fetch(`https://gnews.io/api/v4/search?q=${locationResult}&token=10727179e4909ca6cb329858668659fe`)
        .then(res => res.json())
        .then(data => {
    console.log(data) 
    data.articles.forEach(item => {
        document.querySelector('#news').innerHTML += `
        <a href="${item.url}">${item.title}</a>`
    })
   

})} 

