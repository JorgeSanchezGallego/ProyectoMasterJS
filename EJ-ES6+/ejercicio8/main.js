document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://thronesapi.com/api/v2/Characters"
    const select = document.getElementById("character-list")
    const image = document.querySelector(".character-image")
    let characters = []

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            characters = data;
            data.forEach(character => {
                const option = document.createElement("option");
                option.value = character.id;
                option.textContent = character.fullName
                select.appendChild(option)
            });
        })
        .catch(error =>{
            console.error("Error al obtener datos", error);
            
        })
        select.addEventListener("change", () => {
            const selectedId = parseInt(select.value);
            const selectedCharacter = characters.find(char => char.id === selectedId);
            if (selectedCharacter){
                image.src = selectedCharacter.imageUrl;
                image.alt = selectedCharacter.fullName;
            } else {
                image.src = "";
                image.alt = "Error"
            }
        })

})