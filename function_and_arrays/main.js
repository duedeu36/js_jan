/*  Silly Game Solution by Jan:

var johnHeight = 185;
var bobHeight = 190;

var johnAge = 30;
var johnBob = 27;

var scroeJohn = johnHeight + 5 * johnAge;
var scoreBob = bobHeight + 5 * johnBob;

if( scroeJohn < scoreBob){
    console.log('Bob won.')
}

else if( scroeJohn === scoreBob){
    console.log('Its a tie!')
}

else{
    console.log('John won!');
} 

*/

//////////////////////////
// Weather function

function weatherFunction(weather){
    
    console.log('The weather today is really good.');
    
    if(weather){
        if(weather >= 8){
            console.log('weather is great');
        }
        else if(weather > 5 && weather <= 8){
            console.log('weather is good.');
        }
        else if (weather <=5 && weather > 2){
            console.log('weather is not so good');
        }
        else{
            console.log('weather is bad');
        }
    }

}

weatherFunction();

//  Task
//  write a function q that takes one parameter p
//  and that prints out p if p is not undefined, not null
//  and not false


function q(p){
    if(p){
        console.log(p);
    }

}

q('Hallo World');


/////

function double(x){
    console.log('I am going to double x soon ...');
    console.log('Wait for it...')
    
    return 2 * x; // the programm ends when the return part is called... this afterwards will not be executed
    console.log('This string here will not be executed');
}

console.log(double(4));


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


function f(a, b){
    
    return a + b;
}

var u; // undefined variable; no value

    // 1
    console.log(f('a','b'));
    // 2
    console.log(f(6,' b')); // type coercion
    // 3
    console.log(f(8,6)); // no type coercion
    // 4
    console.log(f(7,u)); // type coercion not possible NaN
    // 5
    console.log(f(null,' b'));
    // 6
    console.log(f(u,' b'));
    // 7
    console.log(f(u, u)); // NaN



///////

function calculateAge(yearOfBirth)
{
    var age = 2018 - yearOfBirth;
    return age;
}
    
var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1989);

console.log('age of John is ' +ageJohn);
console.log('age of Mary is ' +ageMary);



//      Task:
//      
//      Assume that the retirement age is 67.
//      Write a function retiresIn what calculates
//      the Number of years in which a person retires.
//      This function has two parameters
//      
//      name and year of birth
//
//      The return value should be a string like the following:
//      *Jan retires in 35 years
//


/// my "solution":
/*
function retiresIn(retirementIn, name )
{
    var age = 2018 - YearOfBirth;
    var name = Damir;
    var retirementIn = 67 - age;
    
    console.log(retiresIn(name + ' retires in ' + retirementIn + 'years.'));
}
*/


///// Jan solution: //////

function retiresIn(name, yearOfBirth)
{
    var retires = 67 - (2018 - yearOfBirth);
    return name + ' will retire in ' + retires + ' years.';
}

console.log(retiresIn('Damir', 1989));


/////

var hallo = 'Hallo ';
var world = 'world ';
var name = 'Damir';

console.log(hallo + world + name);


function f(x)
{
    return Math.pow(x, 2) + 2 * x + 1;
}

console.log(f(1));


//      Task:
//      Write a function introduction that generates an introductions
//      about yourself. You  have the parameters:
//      
//      firstName, lastName, countryBorn, countryLiving, age, resistenceCity
//
//      Example:
//      My name is jan schulz. I was born in germany, i live in germany. I'm 32 years old. I live in Berlin.


/*

function introduction(firstName, lastName, countryBorn, countryLiving, age, restistenceCity)
{
    var firstName = 'Damir ';
    var lastName = 'Lucic';
    var countryBorn = 'Bosnia';
    var countryLiving = 'Germany';
    var age = '28';
    var restistenceCity = 'Berlin'; 
    

    return 'My Name is ' + firstName + lastName + '. I was born in ' + countryBorn + '. I live in ' + countryLiving + '. I am ' + age + ' years old.' + ' I live in' + restistenceCity ;

}

console.log(introduction('firstName', 'lastName', 'countryBorn', 'countryLiving', 'age', 'restistenceCity'));

*/


////////////////////////////////// ---------second solution:------------- /////////////////////////////////////


function introduction(firstName, lastName, countryBorn, countryLiving, age, restistenceCity)
{
    return 'My Name is ' + firstName + lastName + '. I was born in ' + countryBorn + '. I live in ' + countryLiving + '. I am ' + age + ' years old.' + ' I live in ' + restistenceCity ;
}

console.log(introduction('Damir ', 'Lucic', 'Bosnia & Herzegowina', 'Germany', '28', 'Berlin'));


////////////////////////////////// ---------third solution:------------- /////////////////////////////////////

/* 
function introduction(firstName, lastName, countryBorn, countryLiving, age, restistenceCity)
{
  /*  return 'My Name is ' + firstName + lastName + '. I was born in ' + countryBorn + '. I live in ' + countryLiving + '. I am ' + age + ' years old.' + ' I live in ' + restistenceCity ;
    
    console.log(`My Name is ${firstName}`)  usw.
}

introduction('Damir ', 'Lucic', 'Bosnia & Herzegowina', 'Germany', '28', 'Berlin'); */


/////////////////////////////////////////// ------------- Arrays -------------- /////////////////////////////////////////////


var name0 /* <--- index */ = 'John';
var name1 = 'Mary';
var name2 = 'Bob';
var name3 = 'Peter';
var name4 = 'Julia';


// var names =[];
var names = ['John', 'Mary', 'Bob', 'Peter', 'Julia'];
//              0      1       2       3        4


console.log('First element of names: ' + names[0])
console.log('Last element of names: ' + names[4])

var myInfo = ['Damir', 'Lucic', 28];
//               0        1     2

names.push('Ralf');        // use push to add elements at the end of an array
console.log(names);

myInfo.push('Berlin');
console.log(myInfo);

myInfo.unshift('Mr.');  // use unshift to add elements at the begin of an array
console.log(myInfo);

myInfo.pop();           // removes the last element of an array
console.log(myInfo);

myInfo.shift();         // removes the first element of an array
console.log(myInfo);


//      Task:
//
//      Create an array that consists of the numbers 5 to 10
//
//      - change (replace) the value of the element with the index 1 to 7
//      - add an element 11 at the end
//      - add an element -1 at the beginning


var numbers = [5, 6, 7, 8, 9, 10];

// 1.
numbers[1] = 7;
console.log(numbers);
// 2.
numbers.push(11);
console.log(numbers);
// 3. 
numbers.unshift(-1);
console.log(numbers);

console.log(names);
names.splice(2, 1);
console.log(names);

console.log('Numbers of items in a array: ' + names.length);
console.log('Last item of the names array: ' + names[names.length -1]);
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

names.splice(2, 0, 'Max', 'Damir');
console.log(names);

function average(x, y, z)
{
    return (x + y + z) / 3;
}

console.log(average(5, 5, 4) );


//      Task:
//      
//      Rewrite average to accept one parameter instead of three
//      parameters and return the average
//      Test your function with the same numberic values.

//// solution: ////

function average2(arr)
{
    var avg = (arr[0] + arr[1] + arr[2]) / 3;
    return avg;
}

var arrAvg = [5, 5, 4];
console.log('average = ' + average2([5, 5, 4]));

//////

var fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];
console.log(fruits);


// how to write a function that removes apple and lemon
// and return the rest of the fruits


function fruitCutter(arrFruit){
    arrFruit.shift();
    arrFruit.pop();
    return arrFruit;
}

var cuttedFruits = fruitCutter(fruits);
console.log(cuttedFruits); 


