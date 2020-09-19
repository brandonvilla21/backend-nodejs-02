/**
  Ejercicio:
  Crear un servidor que escuche por el puerto 3000
  Obtener la informacion de la API de Space X y mostrarla cuando el usuario
  navegue a http://localhost:3000

  API: https://api.spacexdata.com/v3/rockets

  Para la web solo sera necesario mostrar el titulo y descripcion de cada elemento del arreglo
  titulo: rocket_name
  descripcion: description
 */

const http = require('http')
const https = require('https')

const server = http.createServer((request, response) => {
  getData((rockets) => {
    // Implementar logica para mostrar la informacion
    console.log(rockets.length)
    let html = ''
    rockets.forEach((rocket) => {
      html += '<h1>' + rocket.rocket_name + '</h1>'
      html += '<p>' + rocket.description + '</p>'
    })

    // Otra variante
    // const arrayOfHTML = rockets.map((rocket) => {
    //   return `
    //     <h1>${rocket.rocket_name}</h1>
    //     <p>${rocket.description}</p>
    //   `
    // })

    response.end(html)
  })
})

server.listen(3000, () => console.log('Listening on port 3000'))

function getData(callback) {
  const call = https.get('https://api.spacexdata.com/v3/rockets', (response) => {
    let data = ''
    response.setEncoding('utf8')

    // Recibe pedazos de información que se van recibiendo del servidor
    response.on('data', (chunks) => {
      data += chunks
    })

    response.on('end', () => {
      const body = JSON.parse(data)
      callback(body)
    })
  })

  call.on('error', (error) => {
    console.error(`There was an error: ${error.message}`)
  })
}

