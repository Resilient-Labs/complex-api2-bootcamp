const newsAPI = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ec5d58f629eb440daaef572feb8c127d';
const chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';

// Fetch latest news
fetch(newsAPI)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles.slice(0, 2); // get first two articles
        const newsContainer = document.getElementById('news-container');

        // Create HTML for each news article
        articles.forEach(article => {
            const newsItem = `
                <div class="col">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.innerHTML += newsItem;
        });
    });

// Fetch random Chuck Norris joke
fetch(chuckNorrisAPI)
    .then(response => response.json())
    .then(data => {
        const quoteContainer = document.getElementById('quote-container');

        // Create HTML for quote
        const quoteItem = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>However, ${data.value}</p>
                        
                        </blockquote>
                    </div>
                </div>
            </div>
        `;
        quoteContainer.innerHTML += quoteItem;
    });
