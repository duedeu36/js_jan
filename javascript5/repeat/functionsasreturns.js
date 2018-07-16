function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ' What is UX?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log(name + ' What subject do you teach?');
        }
    } else {
        return function(name) {
            console.log(name + ' So what do you do?');
        }
    }
}

function sayHello() {
    return function(name) {
        console.log('Hallo');
    }
}

sayHello()();

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Max');
designerQuestion('Damir');

//////////// Closures

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(67);
retirementGermany(1990);

var retirementIceland = retirement(64);
retirementIceland(1990);

/*
Task:

Create a function inc() which has a variable counter that is
initially set to 0. Create an inner function of inc() that increases counter by 1

Use the principle of closures to increase the counter 5 times

*/

function inc(param) {
    var counter = 0;
    var limit = 5;
    
    return function() {
        if(counter < limit) counter++;
        return counter;
    }
}

var c = inc();

console.log( c() );
console.log( c() );
console.log( c() );
console.log( c() );
console.log( c() );

inc()();











