import {useFish} from "./fishData.js"

const allFish = useFish()

for (const fishObj of allFish) {
    console.log(fishObj)
}