const locationCollection = [
    {
        image: "./images/loc_hawaiian_islands.jpeg", 
        name: "Hawaiian Islands", 
        url: "https://en.wikipedia.org/wiki/Hawaiian_Islands", 
        desc: "The Hawaiian Islands (Hawaiian: Mokupuni o Hawai‘i) are an archipelago of eight major islands, several atolls, numerous smaller islets, and seamounts in the North Pacific Ocean, extending some 1,500 miles (2,400 kilometers) from the island of Hawaiʻi in the south to northernmost Kure Atoll. (Wikipedia)"
    }, 
    {
        image: "./images/loc_ryukyu_islands.jpeg", 
        name: "Ryukyu Islands", 
        url: "https://en.wikipedia.org/wiki/Ryukyu_Islands", 
        desc: "The Ryukyu Islands, also known as the Nansei Islands or the Ryukyu Arc, are a chain of Japanese islands that stretch southwest from Kyushu to Taiwan. (Wikipedia)"
    }, 
    {
        image: "./images/loc_indo-pacific_ocean.jpeg", 
        name: "Indo-Pacific Ocean", 
        url: "https://en.wikipedia.org/wiki/Indo-Pacific", 
        desc: "The Indo-Pacific, sometimes known as the Indo-West Pacific or Indo-Pacific Asia, is a biogeographic region of Earth's seas, comprising the tropical waters of the Indian Ocean, the western and central Pacific Ocean, and the seas connecting the two in the general area of Indonesia. It does not include the temperate and polar regions of the Indian and Pacific oceans, nor the Tropical Eastern Pacific, along the Pacific coast of the Americas, which is also a distinct marine realm. (Wikipedia)"        
    }, 
    // {
    //     image: "./images/loc_boundarywaters.jpeg", 
    //     name: "Boundary Waters", 
    //     url: "https://en.wikipedia.org/wiki/Boundary_Waters", 
    //     desc: "XXXX (Wikipedia)"        
    // }, 
    // {
    //     image: "./images/loc_fingerlakes.jpeg", 
    //     name: "Finger Lakes", 
    //     url: "https://en.wikipedia.org/wiki/Finger_Lakes", 
    //     desc: "XXXX (Wikipedia)"        
    // }, 
    // {
    //     image: "./images/loc_underthesea.jpeg", 
    //     name: "Under the Sea", 
    //     url: "https://en.wikipedia.org/wiki/Under_the_Sea", 
    //     desc: "XXXX"        
    // }
]

export const useLocation = () => {
    return locationCollection.slice()
}

export const addLocation = (location) => {
    locationCollection.push(location)
}