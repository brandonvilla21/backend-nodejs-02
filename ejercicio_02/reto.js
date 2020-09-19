/**
  Reto 1:
  Suma dos numeros provenients de la terminal
  Crea un script que reciba dos numeros, los sume y luego muestre el resultado en la consola

  node reto.js 10 30
 */

// Obtener la informacion de los argumentos en variables
// const num1 = parseInt(process.argv[2])
// const num2 = parseInt(process.argv[3])

// Realizar la operacion de suma
// console.log(`La suma de ${num1} + ${num2} = ${num1 + num2}`)

/**
 Reto 2
 Devuelve un error en caso de que el usuario no ingrese argumentos
 o esos argumentos no sean numericos
*/

const num1 = parseInt(process.argv[2])
const num2 = parseInt(process.argv[3])

if (!isNaN(num1) && !isNaN(num2)) {
  console.log(num1 + num2)  
}
else {
  console.log("The information you inputted is not correct.")
}