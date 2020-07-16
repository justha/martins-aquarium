export const quoteHTML = (quoteObj) => {
    return `
        <section class="quote card">
            <div class="quote_text">${quoteObj.text}</div>
            <div class="quote_author">${quoteObj.author}</div>
        </section>
    `
}

