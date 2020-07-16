//this module's responsibility is to STORE the data and nothing else

const fishCollection = [
    {   
        name: "Chartreuse (Char)",
        species: "yellow tang",
        lengthInches: 8, 
        location: "Hawaiian Islands",
        food: "benthic turf algae", 
        image: "./images/fish_yellow_tang.jpeg"
    }, 
    {
        name: "Paul Jr. (PJ)", 
        species: "pajama cardinalfish", 
        lengthInches: 3, 
        location: "Western Pacific Ocean (Java, Fiji, Ryukyu Islands, Great Barrier Reef",
        food: "small crustaceans, mysis shrimp, brine shrimp", 
        image: "./images/fish_pajama_cardinalfish.jpeg"
    }, 
    {
        name: "Dorothy (Dotty)",
        species: "royal dottyback", 
        lengthInches: 3, 
        location: "Indo-Pacific Ocean",
        food: "brine shrimp, krill that contain carotenoids", 
        image: "./images/fish_royal_dottyback.jpeg"
    }, 
    {
        name: "Reign",
        species: "the rainbow fish", 
        lengthInches: 1, 
        location: "Canada",
        food: "Skittles, Blue Razz Pop Rocks", 
        image: "./images/fish_rainbow.jpeg"
    }, 
    {
        name: "Wonda Fish",
        species: "", 
        lengthInches: 1, 
        location: "",
        food: "green eggs", 
        image: "./images/fish_onefish.jpeg"
    }, 
    {
        name: "Theodor II Fish",
        species: "", 
        lengthInches: 1, 
        location: "",
        food: "ham", 
        image: "./images/fish_twofish.jpeg"
    }, 
    {
        name: "Dr. Reddington Seuss",
        species: "", 
        lengthInches: 1, 
        location: "",
        food: "", 
        image: "./images/fish_redfish.jpeg"
    }, 
    {
        name: "Blu Geisel",
        species: "", 
        lengthInches: 1, 
        location: "",
        food: "", 
        image: "./images/fish_bluefish.jpeg"
    }
]

//export function so that another module can import it
//.slice() to work with a COPY of fishCollection; not the raw data

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fish) => {
    fishCollection.push(fish)
}