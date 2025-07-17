//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
function greaterNumber(numberOne , numberTwo) {
  if ( numberOne > numberTwo) {
    console.log(`El numero ${numberOne} es mayor que ${numberTwo}`)
  } else if (numberOne < numberTwo){
     console.log(`El numero ${numberTwo} es mayor que ${numberOne}`)
  } else {
    console.log("Son iguales")
  }
}
greaterNumber(110,10);