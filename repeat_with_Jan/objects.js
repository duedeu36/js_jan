var info = [
    'Damir',    // 0
    'Lucic',    // 1
    28,         // 2
    'Berlin'    // 3
];

console.log(info[1]);

////

var objInfo = {   //  for objects only curly brackets
    firstName: 'Damir',   // key:value
    lastName: 'Lucic',
    age: 28,
    city: 'Berlin',
}

console.log( objInfo.firstName );


function p(o) {
    console.log(o.city);
}

p(objInfo);

//      Task:
//      Write a function intro that doesnt return anything
//      it prints out an introductory about yourself based
//      on the objInfo object

function intro(me) { // one parameter 'me'
    console.log('Hallo my name is ' + me.firstName + ' ' + me.lastName + ' and I am ' + me.age + ' years old and living in ' + me.city + '.');
}

intro(objInfo); // tells here to the function 'intro' to take the keys and their values from our object 'objInfo'


/////

var family = { // object starts with curly brackets
    children:[      // the array 'children' includes two objects
        {age: 3, name: 'paul'},   // key age and value 3   
        {age: 6, name: 'susi'}    // key age and value 6
    ],
    father: 'peter',   // key and value
    mother: 'sandra'   // key and value
};

// Task objecct of an apple tree
//

var appleTree = {   // object
    fruits:[        // array so 
        {amount: 10, color: 'red'},     // key.value
        {amount: 15, color: 'yellow', size:['medium', 'big', 'small'],}   //key.value
    ],
    height: 300,
    weather: 'sunny',
};


console.log(appleTree.fruits[1].size[1]);









