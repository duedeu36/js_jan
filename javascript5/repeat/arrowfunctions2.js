
// Hoisting: a variable can be declared after it has been used

// function expression 

sayHelloExpression();  // <--- hoisting possible

function sayHelloExpression() {
    console.log('Hello from function expression');
}

// sayHelloStatement(); <--- undefined: no hoisting possbile here
// console.log( y );
console.log( x );

// function statement
// statements cope with a assignment operator

var sayHelloStatement = function() {
    console.log('Hello from function statement')
}

var x = 1;

sayHelloStatement();

// es6

var sayHelloStatement6 = () => {
    console.log('Hello from functions statement es6');
}

sayHelloStatement6();

// only possible with statement functions:

var sayHelloStatement6b = (name) => {
    console.log('Hello ' + name + ' from function statement es6');
}

sayHelloStatement6b('Damir');

var multiply1 = (a, b) => { return a * b }; // imperative syntax
console.log( multiply1(2, 5));

var multiply2 = (a, b) => a * b; // functional syntax
console.log( multiply2(2, 10));


// Task: Write an arrow function version of the following es5 functions
/*
function intro(name, age) {
    return 'My name is ' + name + ' and I am ' + age + ' years old.';
}

function doubleArr(arr) {
    return arr.map (function(el) {
        return 2*el;
    });
}

var person = {
    age: 30,
    name: 'max',
    intro: function() {
        console.log('My name is ' + name + ' and I am ' + age + ' years old.');
    }
}
*/
// solution in es6:

var intro = (name, age) => {
    console.log('My name is ' + name + ' and I am ' + age + ' years old.')
}

intro('Max', 30);

/////

var doubleArr = (arr) => arr.map(el => 2*el);

/////

var person = (age, name) => {
    this.age = age;
    this.name = name;
    this.intro = () => console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.');
}

//////////////////////////////////////////////////

var person = {
    age: 30,
    name: 'Max',
    intro() {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.')
    }
}

person.intro();

/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and the color is '+ this.color;
            alert(str);
        });
    }
}

box5.clickMe();
*/

var box6 = {
   color: "green",
   position: 1,
   clickMe: function() {
       document.querySelector(".green").addEventListener("click", () => {
           var str = "This is box number " + this.position + " and the color is " + this.color;
           alert(str);
       });
   }
   
}

box6.clickMe();

/*
var box5 = {
   color: 'Green',
   position: 1,
   clickMe: function(){
       document.querySelector('.green').addEventListener('click', () => {
           var str = 'This is box number ' + this.position + ' and the color is ' + this.color;
           alert(str);
       });
   }
}

box5.clickMe()

*/









