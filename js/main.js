document.querySelector('#generateName').onclick = getRandomName

function getRandomName() { 
  fetch('https://www.behindthename.com/api/random.json?usage=ita&gender=f&key=sa542120201') 
    .then (response => response.json()) 
    .then (data => { 
      document.querySelector('#first').innerHTML = data.names[0]
      document.querySelector('#last').innerHTML = data.names[1]
      let newFirst = data.names[0]
      let newLast= data.names[1]
      document.querySelector('#img').src = `https://ui-avatars.com/api/?background=random&rounded=true&name=${newFirst}+${newLast}` 
  }
  )
}

/*contributors:

Miriam Kifle
Ian Ascencio
Alexa Macias
Roxana Lemus
*/