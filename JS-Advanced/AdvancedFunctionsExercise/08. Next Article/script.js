function getArticleGenerator(articles) {
    let resultBox = document.getElementById("content");
    let articlesCopy = articles.slice();

    return function showNext() {
        if (articlesCopy[0] !== undefined) {
            const article = document.createElement("article");
            article.textContent = articlesCopy.shift();
            resultBox.appendChild(article);
        }
    }
}
