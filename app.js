






//const fs = require('fs');

const argv = require('yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 'sad';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

//let data = '';
//
//for (let i = 1; i <= 10; i++) {
//    data += `${base} * ${i} = ${base * i}\n`;
//}
//
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//    if (err) throw err;
//    console.log('archivo creado/guardado')
//});

crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(err => console.log(err));