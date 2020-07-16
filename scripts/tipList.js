import {useTip} from "./tipData.js"
import {tipHTML} from "./tip.js"

export const tipList = () => {
    const contentElement = document.querySelector("h5")

    const tips = useTip()

let tipHTMLRepresentations = ""
for (const currentTipObj of tips) {
    tipHTMLRepresentations += tipHTML (currentTipObj)
}

contentElement.innerHTML += `
    <article class="tips">
        ${tipHTMLRepresentations}
    </article>
`
}