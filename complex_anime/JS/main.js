document.querySelector(".anime").addEventListener("click", getAnime);

function getAnime() {
    const category = document.querySelector("select").value;
    const url = `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${category}&page%5Blimit%5D=20`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const resultList = document.querySelector("ul");
            resultList.innerHTML = "";
            for (let i = 0; i < data.data.length; i++) {
                const title = `${data.data[i].attributes.abbreviatedTitles}  / ${data.data[i].attributes.canonicalTitle}`;
                const rating = data.data[i].attributes.ageRatingGuide;
                const description = data.data[i].attributes.description;
                if (!title || title === undefined) {
                    continue; // Skip this item and move to the next one
                }
                const listItem = document.createElement("li");
                let itemHTML = "<h2><strong>Title:</strong> ";
                itemHTML += title;
                itemHTML += "</h2><h3><strong>Rating:</strong> ";
                console.log(data)
                if (rating) {
                    itemHTML += rating;
                }
                if (!rating) {
                    itemHTML += "NA";
                }
                itemHTML += "</h3><p><strong>Description:</strong> ";
                if (description) {
                    itemHTML += description;
                    itemHTML += `<button class="translate" data-description="${description}">Translate to Braille</button>`;
                }
                if (!description) {
                    itemHTML += "NA";
                }
                itemHTML += "</p>";
                listItem.innerHTML = itemHTML;
                resultList.appendChild(listItem);
            }
            const translateBtns = document.querySelectorAll(".translate");
            translateBtns.forEach((btn) => {
                btn.addEventListener("click", translateToBraille);

            });
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}

function translateToBraille(event) {
    const description = event.target.dataset.description;
    const url = `https://api.funtranslations.com/translate/braille.json?text=${description}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const brailleDescription = data.contents.translated;
            const descriptionContainer = event.target.parentElement;
            const brailleContainer = document.createElement("p");
            brailleContainer.innerHTML = `<strong>Braille:</strong> ${brailleDescription}`;
            descriptionContainer.appendChild(brailleContainer);
            console.log(data)
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}
