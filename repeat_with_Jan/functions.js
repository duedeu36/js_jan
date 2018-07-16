console.log('My name is Damir')  // a fuction call (...)    
console.log() // name of a function
// calling says to js to run the code inside the function body


console.log('Hey');
console.log('How are you doing?');
console.log('I am fine, thanks');
console.log(2);
// one function called three times (with each 1 parameter what is in this case the datatype string)
console.log(2, 5); // two parameters which have in this case the datatype number
console.log(2, 5, 10, 20); // same
console.log(2,5,10,20);  // same
// multiple parameters are separated by commas

console.log('Hello', 'World' ); // two paramteres in the function (datatype string)

function intro(){  // defined 
    var a = 1+3;
    console.log('Hi my name is Damir'); // defined the function value: ('Hi my name is Damir')
    console.log('and I am 28 years old.'); // same
    console.log('1+3 = ' + a);
}
var a = 4;
console.log('1 + 3 ist gleich ' + a);  
intro();


function intro2(paramName) { // name is defined but no value right now
    console.log('Hi my name is ' + paramName);
}

intro2('Damir');  // here its the value putted in as 'Damir'

// Task: add a second and a third parameter
//       to intro2: city and age
// 


function intro3(name, city, age) { // name is defined but no value right now
    
    console.log('Hi my name is ' + name + ' I come from ' + city + ' and I am ' + age + ' years old.');
}

intro3('Marko', 'Berlin', 28);  // the function it's called here

/////

function triple(number) {
    console.log('number x three = ' + number * 3);
}

triple(3);

function triple2(number, number2) {
    console.log('product = ' + number * number2);
}

triple2(3, 5);

/////

function returnOne() {
    return 1;
}

var x = 1;
var y = returnOne();

if( x === y) {
    console.log('Will this be printed?'); // yes, it will, because x and y are the same
}

/////

function returnOne() {
    return 1+1;
}

var x = 1;
var y = returnOne();

if( x === y) {
    console.log('Will this be printed?'); //, becausse x and y arent the same, y btw returnOne is 2
}



function double(x) {
    console.log('I am about to double x ...');
    console.log('In a moment');
    return 2*x
}

var z = double(4);  // becomes 8
console.log(z);


// Task:
//
// define a function that has one parameter: yearBorn
// and it returns the age based on the current year 2018

function calcAge(yearBorn) {  // every parameter (yearBorn) you define here should be used in the function body
    return 2018 - yearBorn;    // like here
}


console.log(calcAge(1989));

/////

function calcTwoAges(yearBorn1, yearBorn2) {
    var age1 = 2018 - yearBorn1;
    var age2 = 2018 - yearBorn2;
    
    var ages = [age1, age2];       // put the two ages together in a array     //  Array is a list of values
    
    return ages;
}

// Task:   analyze this function and what would be the
//         output if you call
//         calcTwoAges (1990, 1992)?

///  ???? ///

// Task
// write a function f that makes two parameters
// a and b. f should return a + b
//      1. call f using a string, b string
//      2. call f using a number, b string
//      3. call f using a number, b number
//      4. call f using a number, b undefined
//      5. call f using a null, b string
//      6. call f using a undefined, b string
//      7. call f using a undefined, b undefined
//
//      lastly, console.log out each return value of f


function f(a, b) {
    
    return 'A is a ' + a + ' and B is a ' + b;
}

console.log(f('string' , 'string'));
console.log(f(10 , 'string'));
console.log(f(10 , 10));
console.log(f(10 , undefined));
console.log(f(null , 'string'));
console.log(f(undefined , 'string'));
console.log(f(undefined , undefined));


// Task:
//
// write a function greaterTen that returns true if the parameter n is greater than 10. 
// return false if it less than 10.

function greaterTen(n) {
    if(n > 10)
        return true;
    else{
        return false;
    }
}

console.log(greaterTen(5));


//      Task:
//
//      write a function weather with one parameter quality
//      return 'great' --> quality between 8 and 10
//      return 'good' --> quality between 6 and 8
//      return 'okay' --> quality between 3 and 6
//      return 'not so good' --> quality between 0 and 3


function weather(quality) {
    if(quality > 8 && quality < 10){
        return 'great';
    }
    else if(quality > 6 && quality < 8)
        return 'good';

    else if(quality > 3 && quality < 6)
        return 'okay';

    else{
        return 'not so good';
    }
    }

console.log(weather(2));

// Taks:    invent one function with two parameters that
//          returns a string using the two parameters


function funcName(param1, param2){
    return param1 + param2;
}

console.log(funcName('Hallo', 'World'));
//
function a(one, two){
    return one + two;
}
//
function form(firstName, lastName){
    return firstName + lastName;
}






