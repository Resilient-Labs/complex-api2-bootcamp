document.querySelector('button').addEventListener('click', players)

  function players(){
    let playersVal = document.querySelector('input').value
    let url = `https://www.balldontlie.io/api/v1/players?search=${playersVal}`  
    // document.querySelectorAll('li').textContent = ''

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
      document.querySelector('h2').innerText = data.data[0].team.name
      document.querySelector('h3').innerText = data.data[0].team.city

      let city = data.data[0].team.city
      let url2 = `https://api.openbrewerydb.org/breweries?by_city=${city}`
      
      fetch(url2)
      .then(res => res.json())
      .then(data2 => {
        console.log(data2)
        data2.forEach(element => {
          const li = document.createElement('li')
          li.textContent = element.website_url
          document.querySelector('ul').appendChild(li)
        });
      
  
      }) 
  
    }) 
    .catch(err => {
      console.log(`error ${err}`)
    })
  
    

  

}