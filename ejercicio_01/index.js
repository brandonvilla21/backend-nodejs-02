/**
  Módulo: path
  join(): formar rutas como: "app/server.js"

 */

const path = require('path')
const serverPath = path.join('app', 'server.js')

// console.log(serverPath) => app/server.js

const myAbsolutePath = path.join(__dirname, 'app', 'server.js')

// console.log(myAbsolutePath)


/**
  Módulo: fs (File System)
  Escribir y leer sobre archivos del sistema

  fs.readFile() => Leer archivos
  fs.writeFile() => Escribir archivos
  fs.appendFile => Escribir sobre un archivo existente
  
  fs.readFileSync() => Leer archivos de manera bloqueante
  fs.writeFileSync() => Escribir archivos de manera bloqueante
  fs.appendFileSync() => Escribir sobre un archivo existente de manera bloqueante
*/

const fs = require('fs')

// Escribir un archivo .txt => ejemplo_01.txt
fs.writeFile(path.join(__dirname, 'ejemplo_01.txt'), 'Este contenido se va a incluir en mi archivo', { encoding: 'utf-8' }, (error) => {
  if (error) throw error
  console.log('Archivo creado con writeFile')
})

// Leer archivo
fs.readFile(path.join(__dirname, 'ejemplo_01.txt'), { encoding: 'utf-8' }, (error, data) => {
  if (error) throw error
  console.log('readFile:', data)
})

// Escribir sobre un archivo existente
fs.appendFile(path.join(__dirname, 'ejemplo_01.txt'), '\nEsto es una nueva linea dentro de mi archivo', (error) => {
  if (error) throw error
  console.log('Append file: archivo actualizado')
})

// Callbacks anidadas
// fs.writeFile(path.join(__dirname, 'ejemplo_01.txt'), 'Este contenido se va a incluir en mi archivo', { encoding: 'utf-8' }, (error) => {
//   if (error) throw error
//   console.log('Archivo creado con writeFile')
  
//   // Leer archivo
//   fs.readFile(path.join(__dirname, 'ejemplo_01.txt'), { encoding: 'utf-8' }, (error, data) => {
//     if (error) throw error
//     console.log('readFile:', data)

//     // Escribir sobre un archivo existente
//     fs.appendFile(path.join(__dirname, 'ejemplo_01.txt'), '\nEsto es una nueva linea dentro de mi archivo', (error) => {
//       if (error) throw error
//       console.log('Append file: archivo actualizado')
//     })
//   })
// })



