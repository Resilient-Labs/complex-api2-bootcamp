document.querySelector('.randomMovie').addEventListener('click', getRandomImage)
//const input = document.querySelector('.value')

async function getRandomImage() {
   
   const randomCharacter = Math.floor(Math.random() * 826)   
   const rickAndMortyFetch = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter}`)
   const rickAndMortyData = await rickAndMortyFetch.json()
   const rickAndMortyDate = rickAndMortyData.created    
   const parsedDate = new Date(rickAndMortyDate)
   //console.log(parsedDate) 
   console.log(rickAndMortyData)
   const holidayDate = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=f297bda12658c6bee6e205cffe27f2adff117cfa&country=US&year=${parsedDate.getFullYear()}&month=${parsedDate.getMonth() + 1}&day=${parsedDate.getDate()}`)
   const holidayData = await holidayDate.json()
    console.log(holidayData)
    const characterName = document.querySelector('.result')
    const holidayNameList = document.querySelector('.holidayList')
    //resets list
    holidayNameList.innerHTML = ""

    characterName.innerText = rickAndMortyData.name
    for(let i =0;i < holidayData.response.holidays.length; i++) {
    let holidayCharacter = document.createElement('li')
    holidayCharacter.innerText = holidayData.response.holidays[i].name  
    holidayNameList.appendChild(holidayCharacter)

} 
}
       
    
