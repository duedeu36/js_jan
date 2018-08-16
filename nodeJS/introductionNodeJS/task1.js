/*
Taks1:
Create a module countdown.js that counts from 20 to 0.
Import it to this file and use it.
*/

// Taks 1:
var countdown = require('./countdown.js');

countdown();

/*
Taks2:
Create a module introduction.js that exports a function with one parameter userInfo.
userInfo should consist of firstName, lastName, email and birthYear

When calling the function "introduction", the module should print a text like:

"Hi, my name is FIRSTNAME LASTNAME and my email is EMAIL. I was born in BIRTHDATE."
*/

//Taks 2:
var intro = require('./introduction.js');

introduction({
    firstName: 'Damir',
    lastName: 'Lucic',
    email: 'damir@web.de',
    birthYear: '1989'
});

intro.introduction();

/*
Taks 3: 
Create a module that exports the following class:

class Person {
    constructor(firstname, lastname, email, yearOfBirth) 
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
    }
}

Create 3 different persons!

*/

//Task 3:

var Person = require('./Person.js');

var maria = new Person('Maria', 'Mueller', 'maria@web.de', 1990);
var bernd = new Person('Bernd', 'Mueller', 'bernd@web.de', 1968)

console.log(maria, bernd);


