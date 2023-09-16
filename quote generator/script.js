let authorName = document.getElementById('author-name');
let quote = document.getElementById('quote');
let getNewQuote = document.querySelector('.new-quote');
let tweetBtn = document.querySelector('.tweet-button');

async function getQuote() {
  const api_url = "https://api.quotable.io/random";
  const response = await fetch(api_url);
  let data = await response.json();
  console.log(data);
  authorName.innerHTML = data.author;
  quote.innerHTML = data.content;
}

getQuote();

getNewQuote.addEventListener('click', () => {
  getQuote();
})

tweetBtn.addEventListener('click', tweet);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + ".......by " + authorName.innerHTML, "Tweet Window", "width=600, height=300");
}