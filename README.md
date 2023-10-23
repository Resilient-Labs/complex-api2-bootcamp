# Author Biography Finder

The Author Biography Finder is a project that allows users to fetch relevant information about authors by inputting a book title. By integrating and chaining multiple APIs, we provide a seamless experience to the users, enabling them to dive deeper into the literature world by gaining insights about the authors behind their favorite books.

## Goal

The primary goal of this application is to fetch and display a brief biography of an author based on a provided book title. This is achieved by:

1. Getting information about the book (and its author) from the Open Library API.
2. Using the obtained author's name to fetch their biography from Wikipedia.

Here's a concise illustration using the JavaScript code:

```javascript
// Listen for button click to trigger the fetch operation
document.getElementById("fetchButton").addEventListener("click", fetchBookInfo);

// Fetching book info from Open Library
function fetchBookInfo() {
	// ... [rest of the code]
	// After getting the author's name from the book info, fetch their biography
	fetchAuthorBioFromWikipedia(closestBook.author_name[0]);
}

// Fetching author's biography from Wikipedia
function fetchAuthorBioFromWikipedia(authorName) {
	// ... [rest of the code]
}
```

## Struggles and Challenges

1. **Data Consistency**: One of the most prominent challenges was ensuring data consistency. The data from the Open Library API might not always match the exact book the user had in mind, resulting in potentially mismatched biographies.
2. **Error Handling**: With chained API calls, there's an added complexity in error handling. A failure in one call can affect the subsequent calls, making it crucial to have robust error handling in place. For example:

   ```javascript
   .catch((error) => {
       document.getElementById("errorMessage").innerText =
           "Failed to fetch biography. Please try again.";
   });
   ```

3. **Rate Limits**: Being dependent on third-party APIs means the application is subject to their rate limits. Especially when chaining calls, this can potentially lead to reduced responsiveness or temporary outages.

## Lessons Learned

1. **API Integration**: This project emphasized the intricacies of integrating multiple APIs. One key takeaway was ensuring smooth transitions between API calls, which was achieved by chaining promises in JavaScript.

2. **Data Parsing and Handling**: The data structure from different APIs can vary significantly. Parsing the necessary information efficiently, like extracting the `author_name` from the Open Library data, was a valuable experience.

   ```javascript
   const closestBook = data.docs[0];
   const authorName = closestBook.author_name[0];
   ```

3. **User Experience**: Prioritizing user experience by providing clear feedback, like error messages, ensures users are not left in the dark when things don't go as planned.

---

By crafting this project, the intricacies of chained API integration became much clearer, offering valuable insights into the world of web development. It's a testament to the potential of web technologies in bringing disparate data sources together to create a cohesive user experience.
