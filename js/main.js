document.querySelector('button').addEventListener('click', getCurrency)

function getCurrency() {
    let searchCurrency = document.querySelector('input').value

    fetch(`https://api.coinbase.com/v2/currencies`)
        .then(res => res.json())
        .then(data => {
            for (i = 0; i < data.data.length; i++) {
                if (searchCurrency === data.data[i].name || searchCurrency === data.data[i].id) {
                    let coinbaseCurrency = data.data[i].id.toLowerCase() 
                    i = data.data.length
                    exchangeRates(coinbaseCurrency)
                } else {
                    document.querySelector('h2').innerText = `${searchCurrency} is not a valid currency!`
                    document.querySelector('h3').innerText = ''
                }
            }
        })
}


function exchangeRates(coinbaseCurrency) {
    fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.rates[coinbaseCurrency].name
            document.querySelector('h3').innerText = `${data.rates[coinbaseCurrency].value} ${data.rates[coinbaseCurrency].unit} to 1 BTC (Bitcoin)`
        })
        .catch(err => {
            console.log(err)
        })
}


// SyntaxError: Unexpected token o in JSON at position 1
//     at JSON.parse (<anonymous>)
//     at main.js:30