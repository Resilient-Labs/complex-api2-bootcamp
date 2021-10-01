document.querySelector("button").addEventListener("click", get_data)
let API_key = "89591760-221d-11ec-9899-03447e036495"
let abbiviations = {}
function get_data() {
  let enterV = document.querySelector("#enterV").value

  var url = (`https://app.zipcodebase.com/api/v1/search?apikey=${API_key}&codes=${enterV}&country=US`)
  fetch(url)
    .then((response) => response.json())
    .then((Zdata) => {
      let result = Zdata.results[`${enterV}`][0]
      document.querySelector("#content").innerText = "Info for city:" + " " + 
        result.city + ", " + result.state;
      let stateAbriv = abbiviations[result.state];

      getCovidcases(stateAbriv);
    })

    .catch((err) => {
      alert(err);
    })
}
function getCovidcases(state) {
  const urlForCovid = (`https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/${state}/info.json`)
  fetch(urlForCovid)
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("currentCases").innerText = result.notes
    })
    .catch((err) => {
      alert(err)
    })
}
function getAbbriv() {
  let abbUrl = (`https://worldpopulationreview.com/static/states/name-abbr.json`)
  fetch(abbUrl)
    .then((response) => response.json())
    .then((response) => (abbiviations = response))
    .catch((err) => {
    })
}
getAbbriv();
setTimeout(() => {
  console.log(abbiviations)
}, 2000)
