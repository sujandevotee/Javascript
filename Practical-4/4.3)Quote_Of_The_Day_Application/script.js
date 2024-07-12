let quoteContainer = document.getElementById("quote");
let authorContainer = document.getElementById("author");

let btn = document.getElementById("btn");
let URL = "https://type.fit/api/quotes";

let getQuote = () => {
    authorContainer.textContent = '';
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            let quoteText = data[randomIndex].text;
            let quoteAuthor = data[randomIndex].author || 'Unknown';

            quoteContainer.textContent = `"${quoteText}"`;
            authorContainer.textContent = `-- ${quoteAuthor}`;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            quoteContainer.textContent = 'Failed to fetch a quote. Please try again later.';
        });
};

btn.addEventListener("click", getQuote);
getQuote();
