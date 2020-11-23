$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $(".grid-container").append(createCard(value));
        })
    })
})

function createCard(car){
    consumption = parseInt(car.consumption.split("l")[0]);
    //Ha a kocsi fogyasztása nagyobb mint 10l/100km akkor sötétebb színnel jelöli a kártyát
    if(consumption<10){
        return `<div class='card good-cons'>
                    <h1>`+car.manufacturer+`</h1>
                    <h2>`+car.name+`</h2>
                    <p>Szín: `+car.color+`</p>
                    <p>Évjárat: `+car.year+`</p>
                    <p>Lóerő: `+car.horsepower+`</p>
                    <p>Elérhető: `+car.avaiable+`</p>
                </div>`;
    } else {
        return `<div class='card bad-cons'>
                    <h1>`+car.manufacturer+`</h1>
                    <h2>`+car.name+`</h2>
                    <p>Szín: `+car.color+`</p>
                    <p>Évjárat: `+car.year+`</p>
                    <p>Lóerő: `+car.horsepower+`</p>
                    <p>Elérhető: `+car.avaiable+`</p>
                </div>`;
    }
}
