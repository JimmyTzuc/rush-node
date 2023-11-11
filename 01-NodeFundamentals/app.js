const fs = require('fs');

//Leer el archivo
const data = fs.readFileSync('README.md', 'utf-8');

//Modificamos la data
const newData = data.replace(/React/ig, 'Angular');

//Crea el nuevo archivo
fs.writeFileSync('README-ANGULAR.md', newData);