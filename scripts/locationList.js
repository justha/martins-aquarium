import {useLocation} from "./locationData.js"
import {locationHTML} from "./location.js"

export const locationList = () => {
    const contentElement = document.querySelector("h4")

const locations = useLocation()

let locationHTMLRepresentations = ""
for (const currentLocationObj of locations) {
    locationHTMLRepresentations += locationHTML (currentLocationObj)
}

contentElement.innerHTML += `
    <article class="locations">
        ${locationHTMLRepresentations}
    </article>
`
}