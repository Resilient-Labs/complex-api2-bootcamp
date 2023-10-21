document.querySelector('button').addEventListener('click', findBook);

function findBook() {
    console.log('findBook runs');

    let unknown = document.querySelector('#search').value;

    const url1 = `https://openlibrary.org/search.json?q=${unknown}`;

    fetch(url1)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Get the first ever published year
            const publishDates = data.docs[0].publish_date;
            let firstPublishYear = "Not available"; // Default value if no publish dates are found
            if (publishDates && publishDates.length > 0) {
                // Sort the publish dates in ascending order
                publishDates.sort();
                // Get the earliest (first) publish year
                firstPublishYear = publishDates[0];
            }

            document.querySelector('#title').innerText = `Title: ${data.docs[0].title}`;
            document.querySelector('#author').innerText = `Author: ${data.docs[0].author_name[0]}`;
            document.querySelector('#rating').innerText = `Rating: ${data.docs[0].ratings_average}`;
            document.querySelector('#publishingyear').innerText = `Publishing Year: ${firstPublishYear}`;

            
            const apiKey = '79QanBZ88ax2EzMakiUbhQ==5iW9fjtlk93vb786';
            const url2 = `https://api.api-ninjas.com/v1/historicalevents?year=${firstPublishYear}`;
            const headers = new Headers({            // NOT MY CODE 
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            });

            fetch(url2, { method: 'GET', headers })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    document.querySelector('#fact').innerText = `In ${firstPublishYear} ${result[0].event}`;

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })
        .catch(err => {
            console.error(`error url1 ${err}`);
        });
}

