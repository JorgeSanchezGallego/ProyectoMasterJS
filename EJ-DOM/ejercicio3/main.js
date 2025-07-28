/*1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul")

for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li")
    li.textContent = `${countries[i]}`  
    ul.appendChild(li)    
}
document.body.appendChild(ul)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const delet = document.querySelectorAll(".fn-remove-me")
delet.forEach( element =>{
    element.remove();
})

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const otherUl = document.createElement("ul")
const otherDiv = document.querySelector('div[data-function="printHere"]')
cars.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    otherUl.appendChild(li)
})
otherDiv.appendChild(otherUl)

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (let i = 0; i < countries2.length; i++) {
    const newDiv = document.createElement("div")
    const h4 = document.createElement("h4")
    const image = document.createElement("img")
    h4.textContent = countries2[i].title
    image.src = countries2[i].imgUrl
    newDiv.appendChild(h4)
    newDiv.appendChild(image)
    document.body.appendChild(newDiv)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.*/
const btn = document.createElement("button")
btn.textContent = `Borrar`
document.body.appendChild(btn)

btn.addEventListener("click", () =>{
    const divs = document.querySelectorAll("div")
    const lastDiv = divs[divs.length-1]
    lastDiv.remove();
});

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/
const divs2 = document.querySelectorAll("div")
for (let i = 0; i < divs2.length; i++) {
    
    const btn2 = document.createElement("button");
    btn2.textContent = "Eliminar este div";
    btn2.addEventListener("click", () => {
        divs2[i].remove();
    });
    divs2[i].appendChild(btn2);
    
}