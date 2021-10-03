//The user will enter a zipcode. That zipcode will be used to recommend local restaurants.


document.querySelector("button").addEventListener("click", getLocation)
document.querySelector('input').addEventListener('keypress', getLocation)

function getLocation (){
let zipcodeValue = document.querySelector('input').value
const locatorUrl = `https://app.zipcodebase.com/api/v1/search?apikey=6b106d70-23d4-11ec-81fe-efedeb28ffe0&codes=${zipcodeValue}`



fetch(locatorUrl)
    .then((response) => response.json())
    .then((data) => {

    console.log(data)

    data.forEach(item => {
      let latitude = item.location.latitude
      let longitude = item.location.longitude
      location(latitude, longitude)

   function location (){
    const openTableUrl= `https://worldwide-restaurants.p.rapidapi.com/restaurants/list-by-latlng?latitude=${latitude}&longitude=${longitude}&limit=20&currency=USD&distance=5&open_now=false&lunit=mi&lang=en_US`
    

    fetch(openTableUrl), {
        "method": "POST",
        "headers": {
          // "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
          "x-rapidapi-key": "ce94ad0bd8mshf6c465becd03447p1d77a2jsnb19cd8045d4f"
        }
        }
      

      
        // "body": {
        //   "language": "en_US",
        //   "limit": "30",
        //   "location_id": "297704",
        //   "currency": "USD"
        // https://opentable.herokuapp.com/api
      
        .then((response) => response.json())
        .then((data) => {
        console.log(response);

            document.querySelector('#language').src = data[0].url

            document.querySelector('#limit').src = data[0].url

            document.querySelector('#location').src = data[0].url

            document.querySelector('#currency').src = data[0].url
      })
      .catch(err => {
        console.error(err);
      });

    }
  }
)}

  



}













