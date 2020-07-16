export const fishHTML = (fishObj) => {
    return `
        <section class="fish card">
            <div><img class="fish_image" src="${fishObj.image}"/></div>
            <div class="fish_name">${fishObj.name}</div>
            <div class="fish_species">Species: ${fishObj.species}</div>
            <div class="fish_length">Length in Inches: ${fishObj.lengthInches}</div>
            <div class="fish_location">Location: ${fishObj.location}</div>
            <div class="fish_food">Diet: ${fishObj.food}</div>
        </section>
    `
}
