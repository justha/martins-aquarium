//this module's responsibility is to STORE the data and nothing else

const fishCollection = [
    {   
        Name: "Chartreuse (Char)",
        Species: "yellow tang",
        Length in Inches: 8
        Location: "Hawaiian Islands",
        Food: "benthic turf algae", 
        Image: "./images/fish_yellow_tang.jpg"
    }, 
    {
        Name: "Paul Jr. (PJ)", 
        Species: "pajama cardinalfish", 
        Length in Inches: 3
        Location: "Western Pacific Ocean (Java, Fiji, Ryukyu Islands, Great Barrier Reef",
        Food: "small crustaceans, mysis shrimp, brine shrimp", 
        Image: "./images/fish_pajama_cardinalfish.jpg"
    }, 
    {
        Name: "Dorothy (Dotty)",
        Species: "royal dottyback", 
        Length in Inches: 3
        Location: "Indo-Pacific Ocean"
        Food: "brine shrimp, krill that contain carotenoids", 
        Image: "./images/fish_royal_dottyback.jpg"
    }
]

//export function so that another module can import it
//.slice() to work with a COPY of fishCollection; not the raw data

export const useFish = () => {
    return fishCollection.slice()
}