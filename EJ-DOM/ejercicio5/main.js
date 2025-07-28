/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.*/

//Hola Antonio del futuro, me he tomado la libertad de modificar un poco el array para que quede mas chulo según el enunciado
const albumsWithImages = [
  {
    title: "The Dark Side of the Moon",
    img: "https://picsum.photos/seed/The%20Dark%20Side%20of%20the%20Moon/300/300"
  },
  {
    title: "Abbey Road",
    img: "https://picsum.photos/seed/Abbey%20Road/300/300"
  },
  {
    title: "Thriller",
    img: "https://picsum.photos/seed/Thriller/300/300"
  },
  {
    title: "Back in Black",
    img: "https://picsum.photos/seed/Back%20in%20Black/300/300"
  },
  {
    title: "Rumours",
    img: "https://picsum.photos/seed/Rumours/300/300"
  }
];
const ul = document.createElement("ul")
const h1 = document.createElement("h1")
h1.textContent = "Las canciones favoritas de Antonio"
document.body.appendChild(h1)

const btnMode = document.createElement("button")
btnMode.textContent = "Cambiar Modo"
btnMode.id = "mode"
document.body.appendChild(btnMode)
btnMode.addEventListener("click", () => {
    document.body.classList.toggle("white")
    ul.classList.toggle("black")
    h1.classList.toggle("black")
})


albumsWithImages.forEach(album =>{
    const li = document.createElement("li")
    const img = document.createElement("img")
    li.textContent = album.title
    img.src = album.img
    img.alt = album.title
    li.appendChild(img)
    ul.appendChild(li)
})
document.body.appendChild(ul)


