
document.querySelector('#button').addEventListener('click', fightBoredom)

function fightBoredom()
{
let boredUrl = `http://www.boredapi.com/api/activity/`
fetch(boredUrl)
.then(res => res.json())
.then(data => {
console.log(data)
let activity = data.activity
let access = data.accessibility
let key = data.key
let participants = data.participants
let link = data.link
let price = data.price
let type = data.type

let url = `https://movie-quote-api.herokuapp.com/v1/quote`
fetch(url)
.then(res => res.json())
.then(data => {
console.log(data)
let movieQuote = data.quote
let actorRole = data.role
let tvShows = data.show
let activityInfo = `Activities: ${activity}\n Accessibility: ${access}\n Key: ${key}\n Participants: ${participants}\n Link: ${link}\n Price: ${price}\n Type: ${type}\n Movie quote time!\n Quote: ${movieQuote}\n Actor/Actress: ${actorRole}\n Shows/Movies: ${tvShows}`
document.querySelector('#list').innerText = activityInfo

})
})
}