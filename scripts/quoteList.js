import {useQuote} from "./quoteData.js"
import {quoteHTML} from "./quote.js"

export const quoteList = () => {
    const contentElement = document.querySelector("h3")

const quotes = useQuote()

let quoteHTMLRepresentations = ""
for (const currentQuoteObj of quotes) {
    quoteHTMLRepresentations += quoteHTML (currentQuoteObj)
}

contentElement.innerHTML += `
    <article class="quotes">
        ${quoteHTMLRepresentations}
    </article>
`
}