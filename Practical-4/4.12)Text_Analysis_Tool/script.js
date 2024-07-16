function analyzeText() {
    let text = document.getElementById('textInput').value;

    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

    let words = text.split(/\s+/).filter(word => word.length > 0);

    let wordCount = words.length;

    let totalLength = words.reduce((acc, word) => acc + word.length, 0);
    let averageLength = totalLength / wordCount;


    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('averageWordLength').textContent = averageLength.toFixed(2);

    let wordFrequency = {};
    words.forEach(word => {
        if (word in wordFrequency) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });

    let sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);

    let commonWordsList = document.getElementById('commonWords');
    commonWordsList.innerHTML = ''; 
    for (let i = 0; i < Math.min(5, sortedWords.length); i++) {
        let word = sortedWords[i];
        let listItem = document.createElement('li');
        listItem.textContent = `${word} (${wordFrequency[word]})`;
        commonWordsList.appendChild(listItem);
    }
}
