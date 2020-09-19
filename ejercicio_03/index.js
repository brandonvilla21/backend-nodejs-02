/**
  Módulo: HTTP
  Con http puedes tener accesso a funciones que trabajan con el protocolo HTTP
  Con este modulo podemos crear clientes y servidores web.
 */

const http = require('http')

// Crear un servidor
const server = http.createServer((request, response) => {
  response.end('<h1>Hola desde mi servidor con http + Nodejs</h1>')
})

server.listen(3000, () => console.log('Server is listening on port 3000'))

/**
  Módulo: HTTPS
  El modulo de https provee las mismas funcionalidades que el modulo de http
  pero sobre el protocolo de TLS/SSL que nos brinda una capa de seguridad.

  Con este modulo podemos realizar peticiones a servidores
 */

const https = require('https')
// API: https://api.spacexdata.com/v3/rockets
const call = https.get('https://api.spacexdata.com/v3/rockets', (response) => {
  let data = ''
  response.setEncoding('utf8')

  // Recibe pedazos de información que se van recibiendo del servidor
  response.on('data', (chunks) => {
    data += chunks
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

call.on('error', (error) => {
  console.error(`There was an error: ${error.message}`)
})
