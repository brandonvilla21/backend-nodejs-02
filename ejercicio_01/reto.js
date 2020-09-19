/**
  Leer archivo reto.txt
  x Mostrar en la consola la longitud del texto
  x Mostrar en la consola cuantas letras a tiene el texto
  Mostrar en la consola cuantas vocales
 */

const fs = require('fs');
const path = require('path');

let countA = 0;
let countVowels = 0;

fs.readFile(path.join(__dirname, 'reto.txt'), { encoding: 'utf-8' }, (error, data) => {
  if (error) throw error;

  console.log('Longitud del texto', data.length);
  const arrayOfChars = data.split('') // => []
  arrayOfChars.forEach(element => {
    if (element == 'a') {
      countA++;
    }
    if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
      countVowels++;
    }

  });
  console.log('Letras a:', countA)
  console.log('Vocales:', countVowels)
});