document.querySelector('button').addEventListener('click', renderShiba)
let shibCafe = []
fetch('http://shibe.online/api/shibes?count=25&urls=true&httpsUrls=false')
    .then(res => res.json())
    .then(data => data.forEach(ele => shibCafe.push(ele)))

function renderShiba(){
    fetch('https://api.api-ninjas.com/v1/dogs?name=shiba',{
        headers: { 'X-Api-Key': 'WpFtnizr0aUUwf7aGOAOiQ==JKaxVTUyfgNwPgwP'}
    })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            document.querySelector('p').innerText = `Breed Name:${data[0].name}`
            document.querySelector('.life').innerText = `Max Life Expectency: ${data[0].name}`
        })
        let html =`
            <li>
                <img src ="${shibCafe[Math.round(Math.random()*(25-0)+0)]}">
            </li>
        `
        document.querySelector('ul').innerHTML = html
}