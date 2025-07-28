// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector(".showme")
console.log(btn)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado")
console.log(title)

//1.3 Usa querySelector para mostrar por consola todos los p
const parragraph = document.querySelectorAll("p")
console.log(parragraph)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
//	la clase .pokemon
const AllPokemon = document.querySelectorAll(".pokemon")
console.log(AllPokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]')
console.log(testMe)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".
console.log(testMe[2])