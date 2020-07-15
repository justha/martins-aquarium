import {useFish} from "./fishData.js"
import {fishHTML} from ".fish.js"

export const fishList = () => {
    const contentElement = document.querySelector(".content--left")

const fishs = useFish ()

let fishHTMLRepresentations = ""
for (const currentFishObj of fishs) {
    fishHTMLRepresentations += fishHTML (currentFishObj)
}

contentElement.innerHTML += `
    <article class="fishes">
        ${fishHTMLRepresentations}
    </article>
`
}