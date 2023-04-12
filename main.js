document.querySelector('button').addEventListener('click', getRandom);

function getRandom() {
  
  let url = 'https://randomuser.me/api/?results=20'
  fetch(url)

   

    .then(res => res.json())
    .then(data => {

      console.log(data);


      document.querySelector('h3').innerText = `${data.results[0].name.first} ${data.results[0].name.last}`
      document.querySelector('img').src = data.results[0].picture.large


     let firstName = data.results[0].name.first
     let url2 = `https://api.nationalize.io?name=${firstName}`

     fetch(url2) 



    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 

     document.querySelector('h2').innerText = `country: ${data.country[0].country_id} probability: ${data.country[0].probability}%`


     



    }) 
  
















    })



    











    //.catch(err => {
      //console.error('Error fetching data:', err);
    //});
}






















    


