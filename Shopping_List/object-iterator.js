var damir = {
    age: 28,
    lastname: 'lucic',
    height: 178,
    born: 'bugojno',
    hobbies: {
        videogames: 'league of legends',
        handball: 'vgg adler',
        drawing: 'everything'
    },
    living: 'berlin'
}

for(var key in damir) {
    console.log('key: ' + key + ', value: ' + damir[key]);
    
  /*  if(typeof damir[key] === 'object') {
        console.log('is an object');
    }*/
}

var a = [
    {x:1, y:5},
    {x:4, y:9},
    {x:2, y:7}
];

for(i = 0; i< a.length; i++) {
    for(var key in a[i]) {
        console.log('object: ' + i + ' key: ' + key + ', value: ' + a[i][key]); // each key means: key x, key y in one object.. and the i 
    }
}






