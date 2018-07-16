/*
var name = 'John';
function first(){
    var greeting = 'Hallo ';
    var x = greeting + name;
    second();
    console.log(x);
}

function second(){
    var greeting = 'Hi ';
    var x = greeting + name;
    third();
    console.log(x);
}

function third(){
    var greeting = 'Hey ';
    var x = greeting + name;
    console.log(x);
}

// first();


console.log('x: ' + x);
var x = 5; // expression, usually are marked by var

hello();
function hello(){ // statement
    console.log('hallo');

}

hello2();
var hello2 = function(){ // expression
    console.log('hallo2');
}

// statements can be hoisted, exprressions not

*/

/* 

var global = 0;
function parent() {
    var x = 1;
    
    function child1() {
        console.log('child1 x is ' + x);
    }
    function child2() {
        x = 3;
        console.log('child2 x is ' + x);
       // child2(); infinity loop
        function child2_1() {
            console.log('Child2_1 x is ' + x);
        }
    }
    
    child1();
    child2();
    child1();
}

parent();


/////////////// implement function methods in each object that change the object attributes

var monster = {
    name: 'casper',
    color: 'white',
    height: 'flexible',
    visible: false,
    opacity: 0.6,
    brothers: 3,
    kill: function(address) {},
    sleep: function() {},
    charm: function() {},
};

//////////////////////////////////////////////

var championLol = {
    mana: 200,
    health: 200,
 // skills: ['ignite', 'flash', 'heal', 'exhaust'],
    inventory: ['sword', 'tesla', 'shield', 'potion'],
    fight: function(type, enemy) { 
                this.inventory[0] = 'big sword';
                if (enemy = 'shooting'){
                this.health = 150;
                }
                if(this.mana = 0){
                console.log('You don\'t have enough mana to fight');                  
                }
                return },
    kill: function(attack) {
                attack = 50;
                if(this.health - attack){
                console.log('You lost ' + attack + 'health now.');
                }
                else{
                    console.log('Hallo')
                }
                return health;
    },
    die: function(attacking) {
                this.health = 0;
    },
    move: function(speed, direction, style) {
                speed > 0;
                this.health > 0;
    },
};

console.log(this.championLol);

//////////////////////////////////////////////////

var cardGame = {
    deck: function() {
          if(this.yourCardNumber = 0){
             console.log('You lose!');
          }
          else{
              console.log('You win!');
          }
    },
    fight: function(){ },
    yourCardNumber: 10,  
    yourMonsterNumber: 5,
    enemyCardNumber: 10,
    enemyMonsterCards: 5,
    
};

console.log(cardGame);
*/
//////////////////////////////////////////////////

/////////////////// entenhausen

var entenhausen = {

   population: 150,
   shops: 10,
   weather: '50/50',
   animals: ['ducks', 'mice', 'dogs', 'geese', 'cats'],

   grow: function(numPopulation) {
       this.population *= 1.2; // population = population * 1.2
   },
   celebrate: function() {
       if(numPopulation > 1000)
       {
           this.shops = 20;
           this.animals.push('lion', 'wolf', 'tiger');
       }
       this.weather = '100%';
       this.population *= 2.0;
   },
   burn: function() {
       this.population = 0;
       this.weather = 'doesnt matter';
       this.shops = 1;
   },
   occupied: function() {
       this.population = 1000;
       this.shops = 0;
       this.weather = 'rainy';
       this.animals.push('snake', 'alligator', 'scorpion');
   }

}; 

console.log(entenhausen);


/*

function calculateAge(year) {
    console.log(2018 - year);
    console.log( this );
}

console.log(calculateAge(1985));


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth );
    }
}

john.calculateAge();


var championLol = {
    health: 2000,
    mana: 200,
    fight: function(attack) {
        attack: 50;
        for(i=health; i<0; i--){
            console.log('You got damage!')
        if(this.health - attack ){
            console.log('You lost ' + attack + 'health.')
        }
        else{
            console.log('ggggggggg')
        }
        }
    }

};

console.log(this.championLol);

*/


championLol


var championLol = {
    health: 200,
    enemyHealth: 200,
    mana: 200,
    armor: 400,
    fight: function(attack) {
        console.log('You got damage!');
        //for(i = attack; i> this.health; i++){
        //    
        //  }
        var newHealth = this.health - attack;
        var incDamage = attack - 200;
        
        if(attack > this.health && attack < 500){
        console.log('You got ' + incDamage + ' more damage as you can withstand. You\'re dead!')
        }
        else if(attack < this.health){
            console.log('You have ' + newHealth + ' health left and should also attack now.');
        }
        else if(attack === this.health){
            console.log('You got exact ' + this.health + ' damage. You\'re dead!');
        }
        else if(attack >= 500){
            console.log('You got ' + incDamage + ' more damage as you can withstand. That\'s a lot! Whats wrong with you? Buy some armor! You\'re dead, of course!')
        }
        /*
        function gotArmor(upgrade) {
            var healthArmor = newHealth + this.armor
            if(newHealth >= 1){
                console.log('Lucky boy! You can upgrade your armor now. You got ' + this.armor + ' more health now.')
            }
            else if (newHealth < 1){
                console.log( 'youre dead again.');
            }
            return healthArmor;
        }
        */
        

},
    
};

console.log(championLol.fight(prompt()));
// console.log(championLol.fight.gotArmor()));





















