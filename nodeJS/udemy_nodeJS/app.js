/* const os = require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`); */

const fs = require('fs');

/* const files = fs.readdirSync('./')
console.log(files);
 */
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files)
});

