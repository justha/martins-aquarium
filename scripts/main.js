import {useFish, addFish} from "./fishData.js"

const allFish  = useFish()

for (const fish of allFish) {
    console.log(fish)
}