//////////////////////// Multi-level inheritance     animals.js
/// Task

class Animal {
    constructor(name) { // will be 
        this.name = name;
        this.isAlive = true;
    }
    
    sleep() { }
    eat() { }
    die() {
        console.log(this.name + ' is dead now' );
        this.isAlive = false;
    }
}

class Mammal extends Animal {
    constructor(name) {
        super(name); // super calls the constructor of the mother class.. therefore we dont need this.name = name
    } 

    breathe() { }
    
}

class Tiger extends Mammal {
    constructor(name) {
        super(name);
    }
    kill(otherAnimal) {
        otherAnimal.die()  // Kill() calls the die() function of otherAnimal
                // die code from line 12 
    }
}

class Horse extends Mammal {
    constructor(name) {
        super(name);
    }
}


class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    
    fly() { }
    breathe() { }
    sing() { }
}

class Woodpecker extends Bird {
    constructor(name) {
        super(name);
    }
}

class Hummingbird extends Bird {
    constructor(name) {
        super(name);
    }
}


class Fish extends Animal {
    constructor(name) {
        super(name);
    }
    
    swim() { }
}

class Shark extends Fish {
    constructor(name) {
        super(name);
    }
    kill(otherAnimal) {
        otherAnimal.die()  // Kill() calls the die() function of otherAnimal
                // die code from line 12
    }
}

class Tuna extends Fish {
    constructor(name) {
        super(name);
    }
}

let vitaly = new Tiger('Vitaly');
let nemo = new Shark('Nemo');
let fury = new Horse('Fury');

nemo.kill(fury);
nemo.kill(vitaly);
nemo.die();






