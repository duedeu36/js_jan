/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var jane = {
    name: 'Jane',
    yearOfBirth: 1991,
    job: 'marketing',
};

var mark = {
    name: 'Mark',
    yearOfBirth: 1948,
    job: 'taxidriver',
};
*/

// a function that creates objects: function constructor
function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge()
    this.lastname;
    
};

Person.prototype.calculateAge = function() {
    this.age = (2018 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1991, 'marketing');
var mark = new Person('Mark', 1948, 'taxidriver');

Person.prototype.lastname = 'Smith';

//console.log(mark.calculateAge());

var personProto = {
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    },
    
    sayMyName: function() {
        console.log('My name is ' + this.name);
    }
}

var julia = Object.create(personProto);
julia.yearOfBirth = 1991;
julia.job = 'waitress';
julia.name = 'Julia';




/*

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge();
    this.lastname;
}


Person.prototype.calculateAge = function () {
        this.age = (2018 - this.yearOfBirth)
    }



Person.prototype.lastname = 'Smith';

var mark = new Person('Mark', 1948, 'taxidriver');
var sandra = new Person('Sandra', 1995, 'waitress');
var jane = new Person('Jane', 1991, 'marketing');
var john = new Person('John', 1990, 'teacher');

// console.log(Person);

*/




function LolChamp(type, lane, carry, winrate) {
    this.type = type;
    this.lane = lane;
    this.carry = carry;
    this.winrate = winrate;
}

var quinn = new LolChamp('range', 'top', true, 54);
var ryze = new LolChamp('range', 'mid', true, 52);
var gangplank = new LolChamp('melee', 'top', false, 50);


// console.log(LolChamp);

function Wm2018(games, cities, goals, won) {
    this.games = games;
    this.cities = cities;
    this.goals = goals;
    this.won = won;
    //this.final(); <---- why error?
    this.host;
    //this.winner(); <---- why error?
}


var croatia = new Wm2018(1, 'Kaliningrad', 2, true);
var germany = new Wm2018(1, 'Moskau', 0, false);
var spain = new Wm2018(1, 'St. Petersburg', 3, undefined);
var portugal = new Wm2018(1, 'Moskau', 3, undefined);

Wm2018.prototype.host = 'Russia';

/*Wm2018.prototype.winner = function () {
    if(this.goals < 2) {
        console.log('Winner');
    } else {
        console.log('Looser');
    }
}*/

/*
Wm2018.prototype.final = function () {
    if(this.croatia.goals > this.germany.goals) {
        console.log('Croatia is world champion');
    } else{
        console.log('Germany is world champion');
    }
}
*/




////// es5

function Person5(name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

////// es6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name,
        this.yearOfBirth = yearOfBirth,
        this.job = job;
    }
    
    calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);    
    }
    
    static gretting() {
        console.log('Hallo');
    }
}

var john6 = new Person6('John', 1990, 'teacher');

Person6.gretting();





////// example es5



function Athlete5(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
        this.olympicGames = olympicGames,
        this.medals = medals;       
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10 );

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();





////// example es6



class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) { 
        super(name, yearOfBirth, job),
        this.olympicGames = olympicGames,
        this.medals = medals
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}


var johnAthelte6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);
johnAthelte6.calculateAge();
johnAthelte6.wonMedal();

















