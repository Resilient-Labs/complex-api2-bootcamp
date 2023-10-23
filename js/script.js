document.getElementById("fetchButton").addEventListener("click", fetchBookInfo);

function fetchBookInfo() {
	const bookTitleInput = document.getElementById("bookTitle").value;
	fetch(`https://openlibrary.org/search.json?title=${bookTitleInput}`)
		.then((response) => response.json())
		.then((data) => {
			if (data.docs.length > 0) {
				const closestBook = data.docs[0];
				document.getElementById("bookTitleInfo").innerText = closestBook.title;
				document.getElementById("bookAuthorInfo").innerText =
					closestBook.author_name[0];
				document.getElementById("bookYearInfo").innerText =
					closestBook.first_publish_year;

				// Fetch biography of this author from Wikipedia
				fetchAuthorBioFromWikipedia(closestBook.author_name[0]);
			} else {
				document.getElementById("errorMessage").innerText =
					"No book or author wiki found for the provided title.";
			}
		});
}

function fetchAuthorBioFromWikipedia(authorName) {
	fetch(
		`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&exintro=&titles=${authorName}`
	)
		.then((response) => response.json())
		.then((data) => {
			const pages = data.query.pages;
			const pageId = Object.keys(pages)[0];
			const biography =
				pages[pageId].extract ||
				"No biography found for this author on Wikipedia.";

			document.getElementById("authorData").innerHTML = biography;
		})
		.catch((error) => {
			document.getElementById("errorMessage").innerText =
				"Failed to fetch biography. Please try again.";
		});
}
