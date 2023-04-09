function randomize() {
    let num = Math.ceil(Math.random() * 2);
    if (num <= 1) {
      doThat();
    } else if (num === 2) {
      riddleMe();
    }
  }
  
  function riddleMe() {
    const url = "https://opentdb.com/api.php?amount=1&difficulty=easy";
  
    // Hide the <p> element
    document.querySelector("#riddle-answer").style.display = "none";
  
    fetch(url)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data); // console log the array/object
  
        document.querySelector("h3").innerHTML = `Riddle me: ${data.results[0].question}`;
        document.querySelector("#riddle-answer").innerHTML = data.results[0].correct_answer;
  
        // Show the <p> element
        document.querySelector("#riddle-answer").style.display = "block";
      })
  
      //in case of errors
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
  
  function doThat() {
    const url = "https://www.boredapi.com/api/activity";
  
    fetch(url)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data); // console log the array/object
        document.querySelector("h3").innerHTML = `Do that: ${data.activity}`;
        document.querySelector("#riddle-answer").style.display = "none"; // hide the <p> element
      })
  
      //in case of errors
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
  
  document.querySelector("button").addEventListener("click", randomize);
