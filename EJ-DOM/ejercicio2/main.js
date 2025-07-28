//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const otherDiv = document.createElement("div")
const newP = document.createElement("p")
otherDiv.appendChild(newP)
document.body.appendChild(otherDiv)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//	loop con javascript.
const loopDiv = document.createElement("div")
for (let i = 0; i < 6; i++) {
    let loopP = document.createElement("p")
    loopP.textContent = `Soy el ${i+1} párrafo`
    loopDiv.appendChild(loopP)
}
document.body.appendChild(loopDiv)

//2.4 Inserta dinamicamente con javascript en un html una p con el
//	texto 'Soy dinámico!'.
const dinamicP = document.createElement("p")
dinamicP.textContent = `Soy dinámico!`
document.body.appendChild(dinamicP)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here")
h2.textContent = `Wubba Lubba dub dub`

//2.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul")
for (let i = 0; i < apps.length; i++) {
    const li = document.createElement("li")
    li.textContent = `${apps[i]}`
    ul.appendChild(li)
    
}
document.body.appendChild(ul)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const remove = document.querySelectorAll(".fn-remove-me")
remove.forEach( element => {
    element.remove();
})

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll("div")
const otherP = document.createElement("p")
otherP.textContent = `Voy en medio`
document.body.insertBefore(otherP, allDivs[1])

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here
const insert = document.querySelectorAll(".fn-insert-here")

insert.forEach(element => {
    const p = document.createElement("p")
    p.textContent = `Voy dentro!`
    element.appendChild(p)
})