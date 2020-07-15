//this module's responsibility is to STORE the data and nothing else

const fishCollection = [
    {   
        name: "Chartreuse (Char)",
        species: "yellow tang",
        lengthInches: 8
        location: "Hawaiian Islands",
        food: "benthic turf algae", 
        image: "./images/fish_yellow_tang.jpg"
    }, 
    {
        name: "Paul Jr. (PJ)", 
        species: "pajama cardinalfish", 
        lengthInches: 3
        location: "Western Pacific Ocean (Java, Fiji, Ryukyu Islands, Great Barrier Reef",
        food: "small crustaceans, mysis shrimp, brine shrimp", 
        Image: "./images/fish_pajama_cardinalfish.jpg"
    }, 
    {
        name: "Dorothy (Dotty)",
        species: "royal dottyback", 
        lengthInches: 3
        location: "Indo-Pacific Ocean"
        food: "brine shrimp, krill that contain carotenoids", 
        image: "./images/fish_royal_dottyback.jpg"
    }
]

//export function so that another module can import it
//.slice() to work with a COPY of fishCollection; not the raw data

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObj) => {
    fishCollection.push(fishObj)
}