$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $(".grid-container").append(createCard(value));
        })
    })
})

function createCard(manufacturer){
    return `<div class='card'>
                <h1>`+manufacturer.name+`</h1>
                <p>Ország: `+manufacturer.country+`</p>
                <p>Alapítva: `+manufacturer.founded+`</p>
            </div>`;
}
