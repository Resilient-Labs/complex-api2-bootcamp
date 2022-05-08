var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const gbutton = document.getElementById('btn')
let button = gbutton
console.log(gbutton)

//button.addEventListener('click', function () {
// +inputtext.value+
const inputtext = document.querySelector('.gameinput')
fetch('https://api.rawg.io/api/games?grandtheftauto&key=4e24760781664e6eb39c7f9fa0745327',requestOptions)
    .then(response => response.json())
    .then(res => {
        const gname = document.querySelector('.gamename')
        const art = document.querySelector('.boxart')
    
        let nameValue = res.results[0].name
        let artValue = res.results[0].background_image
    
        gname.innerHTML += nameValue
        art.innerHTML += `<img src="${artValue}">`
    
        console.log(gname)
        console.log(nameValue)
        console.log(art)
        console.log(artValue)
        console.log(res)
    })
//})

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQBx9GIntlcJiZ2OzMe3NQ8D9AG5ldM4RT0l_-v17Ni78x-8nJwO8uoQHALTOq-IsERbQOYWlL6MTvJLNBM");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
};

fetch("https://api.spotify.com/v1/search?q=grand theft auto&type=playlist&include_external=audio", requestOptions)
    .then(response => response.json())
    .then(res => {
        let spname = document.querySelector('.spname')
        let spimg = document.querySelector('.spimg')
        let splist = document.querySelector('.splist')

        let sname = res.playlists.items[0].name
        let simg = res.playlists.items[0].images[0].url
        let splaylist = res.playlists.items[0].external_urls.spotify

        spname.innerHTML += sname
        spimg.innerHTML += `<img src="${simg}">`
       splist.innerHTML += `<iframe src='${splaylist}'></a>` // wont work as iframe or a href element. all i get is blocked by cors or security policy directive "frame ancestors 'self' and ive googled, found those solutions and they didnt not work either"
    
    console.log(splist)
    console.log(splaylist)
    console.log(res)
    })
    