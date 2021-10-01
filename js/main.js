document.querySelector('button').addEventListener('click', test)

function test(){
  const link = `https://api.kanye.rest`
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.quote)
      let quote = data.quote
      document.querySelector('h2').innerText = quote;
      const link2 = `https://api.qrserver.com/v1/create-qr-code/?data=${quote}&size=300x300`
  fetch(link2)
    .then(
      document.querySelector('img').src = link2)
    .catch((err2) => console.log(err2))
})
.catch((err) => console.log(err));
}