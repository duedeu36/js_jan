// destructering

var john = ['John', 30];
var name1 = john[0];
var age1 = john[1];

const [name2, age2] = ['John', 30];
console.log(name2);
console.log(age2);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

var firstName1 = obj.firstName;
var lastName1 = obj.lastName;

const {firstName, lastName} = obj;
console.log(firstName, lastName);

function calculateAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 67 - age];
}

const [age, retirement] = calculateAgeRetirement(1989);
console.log(age);
console.log(retirement);


/*
    Task:
    
1)  Create an object tree with attributes numLeafs and height and color. Create     three variables derived from the tree using the destructing operator.

2)  do the same with the tree respresented as array

*/

//  1)
var treeObj = {
    numLeafs: 50,
    height: 10,
    color: 'green',
}

var {numLeafs, height, color} = treeObj;

//  2)
var treeArr = [50, 10, 'green'];
var [numLeaf2, height2, color2] = treeArr;







