/*Buscar la palabra más larga: Completa la función que tomando 
un array de strings como argumento devuelva el más largo, en caso de que dos strings 
tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let contador = stringList[0].length;
  let largestWord = stringList[0];
  for (let i = 1; i < stringList.length; i++) {
    if (contador < stringList[i].length ){
        contador = stringList[i].length;
        largestWord = stringList[i];
    }
    
  }
  console.log(largestWord)
}

findLongestWord(avengers)