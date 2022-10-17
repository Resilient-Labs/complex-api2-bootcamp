

    const clientId = config.MY_API_TOKEN
   
    



    document.querySelector("#submit").addEventListener("click", searchArtist);

    function searchArtist(event) {
        event.preventDefault()
        foodInput = document.getElementById('term').value
        let clear = document.getElementById("clear")
        //gets rid of previous artist or mentions in the main
        clear.innerHTML = ""
        //spotify api works only with token in this case
        //token only last a hour 
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${foodInput}` , {
            method: 'GET', headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': clientId
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then((data) => {
            console.log(data)
            //output names of food
            console.log(data[0].name)
            //calories
            console.log(data[0].calories)
            //serving size by 100g
            console.log(data[0].serving_size_g)
            //protein
            console.log(data[0].protein_g)

            console.log(data[0].fat_total_g)

            console.log(data[0].sugar_g)

            //user input 
            console.log(foodInput)
            //artist is update to data.artist from Spotify
            var food = data[0].name
            // data.tracks.items[0].artists[0].name
            const main = document.querySelector(".main")
            const section = document.createElement("section")
            //Generate "Top 5 songs of ${artist}"
            const HeadingOne = document.createElement("h1")
            HeadingOne.innerHTML = `Nutrition Facts of ${food}`
            const area = document.createElement("ul")
            main.appendChild(HeadingOne)
            main.appendChild(section)
            section.appendChild(area)
           
            //Get food facts
            for(i=0;i<data.length;i++) {
                const lineForName = document.createElement("li")
                area.appendChild(lineForName)
                lineForName.innerHTML = food

                const lineForCalories = document.createElement("li")
                area.appendChild(lineForCalories)
                lineForCalories.innerHTML = "Calories: " + data[0].calories

                const lineForSize = document.createElement("li")
                area.appendChild(lineForSize)
                lineForSize.innerHTML = "Serving Size by: " + data[0].serving_size_g + " grams"

                const lineForFat = document.createElement("li")
                area.appendChild(lineForFat)
                lineForFat.innerHTML = "Fat: " + data[0].fat_total_g + " grams"

                const lineForProtein = document.createElement("li")
                area.appendChild(lineForProtein)
                lineForProtein.innerHTML = "Protein: " + data[0].protein_g + " grams"

                const lineForSugar = document.createElement("li")
                area.appendChild(lineForSugar) 
                lineForSugar.innerHTML = "Sugar: " + data[0].sugar_g + " grams"

            }


           
            fetch(`https://api.api-ninjas.com/v1/recipe?query=${food}` , {
            method: 'GET', headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': clientId
                }
             })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE ERROR");
                }
            })
            .then((data) => {
                console.log(data)
             

                const TopMention = document.createElement("h1")
                main.appendChild(TopMention)

           
                TopMention.innerHTML = `Top Recipes of ${food}`
                
                for(i=0;i<7;i++) {
                    
                    const sectionTwo = document.createElement("section")
                    const areaTwo = document.createElement("ul")
                    main.appendChild(sectionTwo)
                    sectionTwo.appendChild(areaTwo)
   
                    const lineForTitle = document.createElement("li")
                    const lineForInstructions = document.createElement("li")
                    const lineForIngredients = document.createElement("li")
                    const lineForServings = document.createElement("li")

          
                    areaTwo.appendChild(lineForTitle)
                    areaTwo.appendChild(lineForInstructions)
                    areaTwo.appendChild(lineForIngredients)
                    areaTwo.appendChild(lineForServings)
                 
                    
           
                    lineForTitle.innerHTML += data[i].title
                    lineForTitle.style.listStyleType="none"
                    lineForInstructions.innerHTML += "Instructions: " + data[i].instructions
                    lineForInstructions.style.color = "rgb(255, 122, 58)"
                    lineForInstructions.style.listStyleType="none"
                    lineForIngredients.innerHTML += "Ingredients " + data[i].ingredients
                    lineForServings.innerHTML += "Servings " +data[i].servings
                    let apiKey = config.PEXEL_API_KEY
                    fetch(`https://api.pexels.com/v1/search/?query=${food}` , {
                        method: 'GET', headers:{
                            'Accept' : 'application/json',
                            'Authorization': apiKey
                            }
                         })
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error("NETWORK RESPONSE ERROR");
                            }
                        })
                        .then((data) => {
                            console.log(data)
                            console.log(data.photos[0].src.large)
                            let imgSource = data.photos[0].src.original
                            document.querySelector("body").style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgSource}')`

                        })
                    


                }
                    


            })


        })


    }

        


