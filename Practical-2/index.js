function analyzeText() {
    let text = document.getElementById('textInput').value.trim();

    let charCount = text.length;
    let wordCount = countWords(text);
    let wordFrequency = getWordFrequency(text);

    console.log("Analysis Results:");
    console.log("Character Count:", charCount);
    console.log("Word Count:", wordCount);
    console.log("Word Frequency:");
    Object.keys(wordFrequency).forEach(function(word) {
        console.log(`${word}: ${wordFrequency[word]}`);
    });
}

function countWords(text) {
    let cleanText = text.replace();
    let words = cleanText.split(/\s+/);
    return words.length;
}

function getWordFrequency(text) {
    let cleanText = text.replace();
    let words = cleanText.toLowerCase().split(/\s+/);

    let wordFrequency = {};

    words.forEach(function(word) {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });

    return wordFrequency;
}
