
export const fishHTML = (fishObj) => {
    return `
        <section class="fish card">
            <div><img class="fish_image" src="${fishObj.image}" /></div>
            <div class="fish_name">"${fishObj.name}"</div>
            <div class="fish_species">"${fishObj.species}"</div>
            <div class="fish_length">"${fishObj.length}"</div>
            <div class="fish_location">"${fishObj.location}"</div>
            <div class="fish_food">"${fishObj.food}"</div>
        </section>
    `
}
