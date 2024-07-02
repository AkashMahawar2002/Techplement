/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// creating array of objects (quotes to randomly display on webpage)
const quotes = [
  {
      quote: "You wanna make an omelet, you gotta break some eggs.",
      source: "Tyler Durden",
      citation: "Fight Club",
      tags: "life, experience"
  },
  {
      quote: "Fate, it seems, is not without a sense of irony.",
      source: "Morpheus",
      citation: "The Matrix",
      tags: "life"
  },
  {
      quote: "E = mc²",
      source: "Albert Einstein",
      year: 1905
  },
  {
      quote: "All I need are some tasty waves, a cool buzz, and I'm fine.",
      source: "Jeff Spicoli",
      tags: "life, inspirational"
  },
  {
      quote: "Perhaps home is not a place but simply an irrevocable condition.",
      source: "James Baldwin",
      year: 1956,
      tags: "life, wisdom"
  },
  {
      quote: "Our greatest glory consists not in never falling, but in rising every time we fall",
      source: "Oliver Goldsmith",
      tags: "life"
  },
  {
      quote: "Economy is essential to all good fart.",
      source: "Jerry Seinfeld",
      citation: "Fresh Air",
      year: 2007,
      tags: "humor, wisdom"
  },
  {
      quote: "It is a poor sport that is not worth the candle.",
      source: "George Herbert",
      citation: "Jacula Prudentum",
      year: 1651,
      tags: "sports"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    tags: "courage, fear, motivation",
    year: 1933
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
source: "Martin Luther King Jr.",
citation: "Speech",
tags: "friendship, silence, enemies",
year: 1965
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
source: "Ralph Waldo Emerson",
citation: "Essay",
tags: "individuality, self, accomplishment",
year: 1841
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
source: "Franklin D. Roosevelt",
citation: "Speech",
tags: "future, doubts, realization",
year: 1945
  }



];

// function to generate random number
const getRandomNumber = number => Math.floor(Math.random() * number)

// function to get a random quote from quotes array
const getRandomQuote = () => quotes[getRandomNumber(quotes.length)]

// function to change index.html to show randomly selected quote
// and check if citation, year and tag properties exists in quote objects
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let HTML = '';
        HTML += `<p class="quote">${randomQuote.quote}</p>`;
        HTML += `<p class="source">${randomQuote.source}`;
        if (randomQuote.citation) {
          HTML += `<span class="citation">${randomQuote.citation}</span>`;
        }
        if(randomQuote.year) {
          HTML += `<span class="year">${randomQuote.year}</span>`;
        }
        HTML += `</p>`;
        if(randomQuote.tags) {
          HTML += `<p class="tags">${randomQuote.tags}</p>`;
        }
  document.getElementById('quote-box').innerHTML = HTML;
}

// function to assign a random rgb color to <body> element
const changeBackground = () => {
  document.body.style.backgroundColor = `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

// change quote automatically every 20s
const autoChange = setInterval(printQuote, 20000);

// when button with id='loadQuote' is clicked, background color changes
document.getElementById('loadQuote').addEventListener("click", changeBackground, false);

// when button with id='loadQuote' is clicked, quote changes
document.getElementById('loadQuote').addEventListener("click", printQuote, false);