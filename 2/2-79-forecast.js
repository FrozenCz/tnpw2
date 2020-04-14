///////////////////////////////////////////////
//
//  Ukázky z 2. přednášky, 2-79-forecast.js
// 
////////////////////////////////////////////////

const request = require('bms-request')

//GPS Hradec Králové: 50.2092283N, 15.8327683E
const url = 'https://api.darksky.net/forecast/01afa8952c4c73363fbc7bbcd78766cb/50.2092283,15.8327683?units=auto&lang=cs'
request({ url: url, json: true}, (error, response) => {
    const data = response.body
    console.log(data.currently.temperature)
    console.log(data.hourly.summary)
})

console.log('Předpověď počasí:')
