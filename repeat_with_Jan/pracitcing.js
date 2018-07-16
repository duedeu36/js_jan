// Task:
//
// define a function that has one parameter: yearBorn
// and it returns the age based on the current year 2018


function funcName(yearBorn){
    return 2018 - yearBorn;
}

console.log(funcName(1989));


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
    return 'A is a ' + a + ' and B is a ' + b;

}

console.log(f('string', 'string'));
console.log(f(10, 'string'));
console.log(f(10, 10));
console.log(f(10, undefined));
console.log(f(null, 'string'));
console.log(f(undefined, 'string'));
console.log(f(undefined, undefined));


// Task:
//
// write a function greaterTen that returns true if the parameter n is greater than 10. 
// return false if it less than 10.


function greaterTen(n){
    if(n>10){
        return true;
    }
    else{
        return false;
    }
}
    console.log(greaterTen(11));
// also posible with a var n


//      Task:
//
//      write a function weather with one parameter quality
//      return 'great' --> quality between 8 and 10
//      return 'good' --> quality between 6 and 8
//      return 'okay' --> quality between 3 and 6
//      return 'not so good' --> quality between 0 and 3



function weather(quality){
    if(quality >=8 && quality <=10){
        return 'Great';
    }
    else if(quality >=6 && quality <=8){
        return 'Good';
    }
    else if(quality >=3 && quality<=6){
        return 'Okay';
    }
    else if(quality >=0 && quality<=3){
        return 'not so good';
    }
}
console.log(weather(8));
// also posible with a var quality


// Taks:    invent one function with two parameters that
//          returns a string using the two parameters


function aFunction(param1, param2){
    return param1 + param2;
}

console.log(aFunction('string1 ' , 'string2'));


//  Task
//  write a function q that takes one parameter p
//  and that prints out p if p is not undefined, not null
//  and not false


function q(p){
    if(p != undefined && p != null && p != false){
    return p;
    }
}

console.log(q('string'));

/*
if(p) means the same, because: when its called if() with nothing inside than its at the same time undefined, null and false and the code will not be executed 

function q(p){
    if(p){
        console.log(p);
    }

}

q('Hallo World');
*/

function double(x){
    console.log('I am going to double x soon ...');
    console.log('Wait for it...')
    
    return 2 * x; // the programm ends when the return part is called... this afterwards will not be executed
    console.log('This string here will not be executed');
}

console.log(double(4));


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


function retiresIn(name, yearOfBirth){
    var age = 2018 - yearOfBirth;
    var retirement = 67 - age;
    return name + ' retires in ' + retirement + ' years.';
    
}

console.log(retiresIn('Damir', 1989));



//      Task:
//      Write a function introduction that generates an introduction
//      about yourself. You  have the parameters:
//      
//      firstName, lastName, countryBorn, countryLiving, age, resistenceCity
//
//      Example:
//      My name is jan schulz. I was born in germany, i live in berlin. I'm 32 years old. I live in Berlin.


function introduction(firstName, lastName, countryBorn, countryLiving, resistenceCity, age){
    return 'My Name is ' + firstName + ' ' + lastName + '. I was born in ' + countryBorn + ' and I live in ' + countryLiving + ', ' + resistenceCity + '. I am ' + age + ' Years old.'
}

console.log(introduction('Damir', 'Lucic', 'Bosna', 'Germany', 'Berlin', 28));


//  Task:
//
//  Create an array that consists the numbers 5 to 10
//
//  - change (replace) the value of the element with the index 1 to 7
//  - add an element 11 at the end
//  - add an element -1 at the beginning

















