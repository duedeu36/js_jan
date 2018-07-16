///////////// Task 1

var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function() {
        if(this.count === undefined)
            this.count = 0;
            console.log( 'My name is ' + this.myName );
            this.count++;
    },
    setLastName: function(lastname) {
    this.lastname = lastname;
    }
}
var gonzo = {
    myName: 'Gonzo',
    age: 40,
    }

alfred.sayYourName.call(gonzo);
alfred.setLastName.call(gonzo, 'Gonzales');

///////////// Taks 2

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
                console.log('Good ' + timeOfDay
                    + ' Ladies and Gentlemen I am '
                    + this.name + ', I am a '
                    + this.job + ' and I am '
                    + this.age + ' years old.');
        } else if(style === 'friendly') {
                console.log('Hey whatsup.'
                    + 'I am '
                    + this.name + ', I am a '
                    + this.job + ' and I am '
                    + this.age + ' years old.'
                    + 'Have a nice ' + timeOfDay);
        }
    }
};

john.presentation('formal', 'morning');
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'evening');
john.presentation.apply(emily, ['friendly', 'evening']);


/////////////// Task 3

function Item( name, price ) {
    this.name = name;
    this.price = price;
    this.sold = false;
}
Item.prototype.sell = function() {
    this.sold = true;
}

function Book( name, price, author) {
    Item.call(this, name, price);
    this.author = author;
    this.category = 'book';
}

Book.prototype = Object.create(Item.prototype);

function Movie( name, price, director ) {
        Item.call(this, name, price);
        this.director = director;
        this.category = 'movie';
}

Movie.prototype = Object.create(Item.prototype);

var casino = new Movie('Casino', 10, 'Martin Scorsese');
var IT = new Book('IT', 10, 'Stephen King');

casino.sell();
IT.sell();


function ComicBook(name, price, author, minAge = 6) {
    Book.call(this, name, price, author)
    if(minAge < 6) {
        this.minAge = 6;
    } else 
        this.minAge = minAge;
}

ComicBook.prototype = Object.create(Book.prototype);

var jessicaJones = new ComicBook('Jessica Jones', 10, 'Marvel', 12);

jessicaJones.sell();

////// Task: Convert this ec5 code to ec6 code

function Item( name, price ) {
    this.name = name;
    this.price = price;
    this.sold = false;
}

Item.prototype.sell = function() {
    this.sold = true;
}
function Book( name, price, author ) {
    Item.call(this, name, price);
        this.author = author;
        this.category = 'book';
}
Book.prototype = Object.create(Item.prototype);

function Movie( name, price, director ) {
    Item.call(this, name, price);
        this.director = director;
        this.category = 'movie';
}

Movie.prototype = Object.create(Item.prototype);

/// solution:

class Item2 {
    constructor(name, price){
        this.name = name,
        this.price = price;
        this.sold = false;
    }
    sell() {
        this.sold = true;
       // console.log(this.sold);
    }
}

class Book2 extends Item2 {
    constructor(name, price, author) {
        super(name, price),
        this.author = author
    }
}
        
class Movie2 extends Item2 {
    constructor(name, price, director) {
        super(name, price),
        this.author = director
    }
}


var casino2 = new Movie2('Casino', 10, 'Martin Scoresese');

casino2.sell();

var IT2 = new Book2('IT', 10, 'Stephen King');

IT2.sell();
















