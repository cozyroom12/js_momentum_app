const quotes = [
    {quote: "random quotes 1."},
    {author: "somebody famous enough"}
]


const quote = document.querySelector("#quotes span:first-child")
const quthor = document.querySelector("#quotes span:second-child")
const author = document.querySelector("h2#author")
const math = Math.floor(Math.random() * quotes.length)

const todaysQuote = quotes[math]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author