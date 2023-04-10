document.querySelector(".search").addEventListener("click", getMovie)
let movieTitle = document.querySelector(".movieTitle")
let movieFacts = document.querySelector(".movieFacts")
let historicalTitle = document.querySelector(".historicalTitle")
let historicalFact = document.querySelector(".historicalFact")

function getMovie() {
    movieFacts.innerHTML = " "
    let selection = document.querySelector(".userInput").value

    let url = `http://www.omdbapi.com/?apikey=d72adab7&t=${selection}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            movieTitle.innerText = `${data.Title} by ${data.Writer}`

            let dataTitle = data.Title
            let dataReleased = data.Released

            let arrayFacts = [
                `Genres: ${data.Genre}`,
                `Plot: ${data.Plot}`,
                `Starring: ${data.Actors}`,
                `Awards: ${data.Awards}`,
                `Box Office: ${data.BoxOffice}`,
                data.Released
            ]

            for (let i = 0; i < arrayFacts.length; i++) {
                let liMovieFact = document.createElement("li")
                liMovieFact.innerText = arrayFacts[i]
                movieFacts.appendChild(liMovieFact)
            }

            console.log(data.Released.split(" "))
            let dateArray = data.Released.split(" ")
            console.log(dateArray[0])
            let dayDate = dateArray[0]

            let monthDate = ""
            if (dateArray[1] == "Jan") {
                monthDate = "01"
            }
            else if (dateArray[1] == "Feb") {
                monthDate = "02"
            }
            else if (dateArray[1] == "Mar") {
                monthDate = "03"
            }
            else if (dateArray[1] == "Apr") {
                monthDate = "04"
            }
            else if (dateArray[1] == "May") {
                monthDate = "05"
            }
            else if (dateArray[1] == "Jun") {
                monthDate = "06"
            }
            else if (dateArray[1] == "Jul") {
                monthDate = "07"
            }
            else if (dateArray[1] == "Aug") {
                monthDate = "08"
            }
            else if (dateArray[1] == "Sep") {
                monthDate = "09"
            }
            else if (dateArray[1] == "Oct") {
                monthDate = "10"
            }
            else if (dateArray[1] == "Nov") {
                monthDate = "11"
            }
            else if (dateArray[1] == "Dec") {
                monthDate = "12"
            }
            console.log(monthDate)


            let urlTwo = `http://history.muffinlabs.com/date/${monthDate}/${dayDate}`

            fetch(urlTwo)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log(data.data.Events[35].year)
                    console.log(data.data.Events[35].text)

                    historicalTitle.innerText = "A historical fun fact:"

                    historicalFact.innerText = `On the release date (${data.date}) of ${dataTitle} - ${data.data.Events[35].text} (${data.data.Events[35].year})`

                })

        })

    document.querySelector(".userInput").value = ""

}

