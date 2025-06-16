const quotes = [
    { quote: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { quote: "Do what you can with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "If you’re going through hell, keep going.", author: "Winston Churchill" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${currentQuote.quote}"`;
    document.getElementById('author').textContent = `– ${currentQuote.author}`;
}
