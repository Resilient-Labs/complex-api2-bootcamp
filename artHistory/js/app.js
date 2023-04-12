const butt = document.querySelector('button');
let dateStr = ""
let resultIndex = 0
///dont completely understand why it is -1? something to do with the findIndex method

class Run {

  

  History() {
    let keyword = document.querySelector('input').value;
    const histUrl = (`https://api.api-ninjas.com/v1/historicalevents?text=${keyword}`)
    fetch(histUrl, {
      headers: {
        "X-Api-Key": "e3wSZg7MJIfO0TkB9r4Q4A==XLLqnXDVaWaUYRHa"
      }})
      .then(res => res.json())
      .then(data => {
//create a for loop that loops through the array of objects and thier properties i < .length
        for(let i = 0; i < data.length; i++) {
          if(data[i].year > 1200){
              
            resultIndex= i

            break;
          }
          
        }
        dateStr = data[resultIndex].year + "-" + data[resultIndex].month + "-" + data[resultIndex].day
        art(dateStr)
//create a conditional that checks if the year is greater than 1500
///return first object that meets condition,
/// concatonate the values of properties in that object year, month, and day ----> in that order

                // console.log(data[resultIndex])
        document.querySelector('#event').innerText = data[resultIndex].event
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  }
    
 
}

function art(dateStr) {
    console.log(dateStr)
    const artUrl = (`https://api.harvardartmuseums.org/image?apikey=museumApi&q=date:${dateStr}`);
    
    fetch(artUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.records)
        if(data.records[0].baseimageurl === ''){
          
        }
        document.querySelector('img').src = data.records[0].baseimageurl
        document.querySelector('#descrip').innerText = data.records[0].description
      }
      )
      .catch(err => {
        alert(`Sorry! Art results for historical date ${dateStr} is not available. Please enter another word. (Example: France)`)
      })


  }
const run = new Run(); // create instance of Run class
butt.addEventListener('click', run.History); // call method of Run class when button is clicked

