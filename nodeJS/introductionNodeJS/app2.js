var fs = require('fs');

var file = fs.readFileSync('./helloworld.txt', 'utf-8');

console.log( file );