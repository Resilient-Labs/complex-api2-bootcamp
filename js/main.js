document.querySelector('.submitBtn').addEventListener('click', checkName)

function checkName() {
    let name = document.querySelector('.nameInput').value.toLowerCase()
    let url = `https://api.nationalize.io/?name=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.country[0].country_id)
            let country = data.country[0].country_id
            let url2 = `https://restcountries.com/v3.1/alpha/${country}`
            fetch(url2)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2)
                    document.querySelector('.img1').src = data2[0].flags.png
                    document.querySelector('.countryName1').innerText = data2[0].name.common
                    document.querySelector('.region1').innerText = data2[0].region
                })
            let country2 = data.country[1].country_id
            let url3 = `https://restcountries.com/v3.1/alpha/${country2}`
            fetch(url3)
                .then(res => res.json())
                .then(data3 => {
                    console.log(data3)
                    document.querySelector('.img2').src = data3[0].flags.png
                    document.querySelector('.countryName2').innerText = data3[0].name.common
                    document.querySelector('.region2').innerText = data3[0].region
                })
            let country3 = data.country[2].country_id
            let url4 = `https://restcountries.com/v3.1/alpha/${country3}`
            fetch(url4)
                .then(res => res.json())
                .then(data5 => {
                    console.log(data5)
                    document.querySelector('.img3').src = data5[0].flags.png
                    document.querySelector('.countryName3').innerText = data5[0].name.common
                    document.querySelector('.region3').innerText = data5[0].region
                })
        })
}