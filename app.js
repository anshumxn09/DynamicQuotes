const header = document.getElementById('header');
const quote = document.getElementById('quote');
const newquote = document.getElementById('newquote');
const postTweet = document.getElementById('postTweet');

const getQuotes = async () => {
    try {
        let randomNumber = Math.floor(Math.random() * 1642);
        let dataFromAPI = await fetch('https://type.fit/api/quotes');
        let jsonDataFromResponse = await dataFromAPI.json();
        let data = jsonDataFromResponse[randomNumber];
        quote.innerText = data.text;
        if(data.author === null) header.innerText = "Unknown"
        else{
            header.innerText = data.author;
        }

    } catch (error) {
        console.log(error)
    }
}

newquote.addEventListener('click', getQuotes);
postTweet.addEventListener('click', () => {
    const tweetLink = `https://twitter.com/intent/tweet?text=${quote.innerText}`;
    window.open(tweetLink);
})
getQuotes();