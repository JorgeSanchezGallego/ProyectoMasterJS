document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".random-image")

const randomId = Math.floor(Math.random()* 151) +1;

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const image = data.sprites.other['official-artwork'].front_default|| data.sprites.front_default;
        img.src = image;
        img.alt = data.name;
    })
    .catch(error => {
        console.error("Error", error);
        
    })
})