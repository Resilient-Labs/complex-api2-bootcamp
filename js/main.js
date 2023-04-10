
const internationalExc = document.querySelector('input')


function getMoney (){ //this function gets the cureency value.
  
  let countryName = document.querySelector('.country').value
  let amount = document.querySelector('.exchange').value
  const url = `https://api.api-ninjas.com/v1/country?name=${countryName}`
// the fetch on the bottom is fetching the country's information

  fetch(url,{
    headers:{
      "X-Api-Key":"Uezt45jzRH0NKBewKe1Q8Q==xC4JyQRMiPQkhO7d"
    }
  })
      .then(res => res.json())
      .then(country => {
        // console.log(country[0].currency.code)
        console.log(country) 
        // this fetch is calculating the exchange between the USD to any country
        const currencyExc = (`https://api.apilayer.com/exchangerates_data/convert?to=${country[0].currency.code}&amount=${amount}&from=USD`)
  
        fetch(currencyExc,{
          headers:{
            "apikey": "XRZWMqLyHeNRynNi10YrLUb3L9k0cjoo"
          }
        })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            let currencyName = country[0].currency.name

            let result = data.result 
            document.querySelector('h3').innerText = ` ${amount} USD is ${result} ${currencyName} in ${countryName} .`
            

          console.log(result)
          })
  
          // let result = document.querySelector('p').innerText = currency.result
          // console.log(result)
      })
}
document.querySelector('button').addEventListener('click', getMoney)

