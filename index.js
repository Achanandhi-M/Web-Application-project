const quotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');

let currentQuoteIndex = 0;

function displayQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex].text;
    authorElement.textContent = `- ${quotes[currentQuoteIndex].author}`;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

displayQuote();
setInterval(displayQuote, 7000);
