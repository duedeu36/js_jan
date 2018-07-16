//////////// ----------Objects---------- ///////////////

var arrayInfo = [];
arrayInfo[0] = 'Damir' // first name
arrayInfo[1] = 'Lucic' /// last name
arrayInfo[2] = 'Germany' // country
arrayInfo[3] = 28 // age

var objInfo = {
    firstName: 'Damir',
    lastName: 'Lucic',
    country: 'Germany',
}

// key: value,

var objApartment1 = {
    type: 'laminate',
    sofa: 'leather',
    plants: true,
    salonSize: 'big'
}

var objApartment2 = {
    size: 'biggerthanavg',
    sofa: 'brown',
    walls: 'height',
    plants: 'green',
}

var objApartment3 = {
    price: 'expensive',
    windows: 8,
    rooms: 2,
    floor: 'parkett',
}

// prints out the whole object
console.log(objApartment1);


// print out one attribute of an object
console.log(objApartment2.size);


function introduction(
         firstName,
         lastName,
         countryBorn,
         countryLiving,
         age,
         resistenceCity
)   {
            
        
console.log(`My Name is ${firstName} ${lastName}
             I was born in ${countryBorn}. I live in ${countryLiving}.
             I am ${age} yyears old. I live in ${resistenceCity} `);
}


//      Task:
//
//      rewrite the introduction function, that it does not
//      accept six arguments anymore. it should accept one
//      object as parameter
//
//      1) define an object that you pass to the introduction function
//      2) rewrite the introcution function 
//      3) execute the introduction function with the intro object

var myPersonObj = {
    firstName: 'Damir',
    lastName: 'Lucic',
    countryBorn: 'Bosnia',
    countryLiving: 'Germany',
    age: 28,
    resistenceCity: 'Berlin',
    retiresIn: function() { // functions of objects are called methods
        console.log(67-this.age);
}
}

function introductionObj(personObj)   
{
                   
console.log(`My Name is ${personObj.firstName} ${personObj.lastName}
             I was born in ${personObj.countryBorn}. I live in ${personObj.countryLiving}.
             I am ${personObj.age} years old. I live in ${personObj.resistenceCity} `);
}


introductionObj(myPersonObj);
myPersonObj.retiresIn();

myPersonObj.firstName = 'Max';
myPersonObj.countryLiving = 'France';

console.log(myPersonObj);
console.log('New first Name is: ' + myPersonObj.firstName);
console.log('New first Name is: ' + myPersonObj['firstName']);

// read about topic Scoping 

/////////////////////////

var apple1 = {
    color: 'red',
    size: 'big',
}

console.log(apple1);

var apple2 = {
    color: 'green',
    size: 'small',
}

console.log(apple2);

var apple3 = {
    color: 'red',
    size: 'small',
}

console.log(apple3);


// Task
// create a third apple with color red and size small
// and add it ti apples, unnested

var apples = [
    apple1,
    apple2,
    apple3
];

console.log(apples);

// 2

apples2 = [apples, apple3];
console.log('apples2 = ' + apples2);

// 3

apples.push(apple3);
console.log('apple3 = ' + apples);

///////////////////////

var child = {
    age: 3,
    name: 'sarah',
};


var father = {
    age: 40,
    name: 'peter'
};

var mother = {
    age: 38,
    name: 'mary',
};

var family = {
    father: father,
    mother: mother,
    child: child,
};

// Task
// give that family 2 more children and a car and a house
// the car has a brand and when it was built
// the house has qm size and a location city

var child2 = {
    age: 9,
    name: 'max',
};

var child3 = {
    age: 5,
    name: 'bob',
};

var house = {
    size: 200,
    location: 'berlin',
}; 

var car = {
    built: 2011,
    brand: 'audi',
}


var family_reassigment = {
    father: father,
    mother: mother,
    children: [child, child2, child3],
    car: car,
    house: house,
};

console.log(family);

// 2 - mutating the object structure
console.log('family before mutating: ');
console.log( JSON.stringify(family));
family.car = car,
family.house = house,
family.children = [child, child2, child3];
console.log('family after mutating: ');
console.log( JSON.stringify(family) );
delete family.child;
console.log('family after deleting child key-value pair: ');
console.log( JSON.stringify(family) );


// Taks:
//
// 1. image you have 3 users
// 2. each user has a email, a password, a status that can
//    either true or false, and the number of logins.
// 3. email is a string, ppassword is a  string, status is boolean
//      (if status is true, he is active, false, if he is inactive )
//    numbeer of logins is a number and starrts with 0
// 4. status  can be changed with a merthod activate() and the
//   number of a logins can be incrreased by newLogin()


var user1 = {
    email:  'abc@mail.com',
    password: 'abc',
    status: false,
    numLogins: 0,
    activate: function() {  
        if(user1.status) {  
    user1.status = false;   
}                             
        else{               
    user1.status = true;    
}                           
    },                      
    newLogin /* <---- method */: function() {
        this.numLogins++
}
}
var user2 = {
    email:  'aaa@mail.com',
    password: 'hhh',
    status: false,
    numLogins: 0,
    activate: function() {  
        if(user1.status) {  
    user1.status = false;   
}                             
        else{               
    user1.status = true;    
}                           
    },                      
    newLogin /* <---- method */: function() {
        this.numLogins++
}
}

var user3 = {
    email:  'bbbbbb@mail.com',
    password: 'mmm',
    status: false,
    numLogins: 0,
    activate: function() {  
        if(user1.status) {  
    user1.status = false;   
}                             
        else{               
    user1.status = true;    
}                           
    },                      
    newLogin /* <---- method */: function() {
        this.numLogins++
}
}

user1.newLogin();
user1.newLogin();
user1.newLogin();

// task: implement the method newLogin for the
//       object user1 and call it 3 times (solution above)



user1.numLogins = user1.numLogins + 1;  // user1.numLogins++

// how can i set the status of true if its false,
// or to false if its true


user1.activate();
user1.newLogin();
user1.newLogin();
user1.newLogin();
console.log(user1);


var userArray = [user1, user2, user3];


