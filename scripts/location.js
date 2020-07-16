export const locationHTML = (locationObj) => {
    return `
        <section class="location card">
            <div><img class="location_image" src="${locationObj.image}"/></div>
            <div class="location_name">${locationObj.name}</div>
            <div class="location_url" href="${locationObj.url}">click here</div>
            <div class="location_desc">${locationObj.desc}</div>
        </section>
    `
}