class ITGuy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Constructing IT Guy');
    }
    
    drinkCoffee() { // method 1
        console.log('My name is ' + this.name + ', and I am drinking coffee.');
    }
    
    talkAboutTechStuff() { // method 2
        console.log('My name is ' + this.name + ', and I am talking about tech stuff.');
    }
    
    talkAboutCodingSpeed() { // method 3
        console.log('My name is ' + this.name + ', and I am talking about coding speed.');
    }
}

var max = new ITGuy('Max', 35);
var sabine = new ITGuy('Sabine', 28);

class Developer extends ITGuy {
    constructor(name, age, skills, github) {
        super(name, age); //inheritance the constructors of the main class
        this.skills = skills;
        this.github = github
    }
    
    understandJavaScript() {
        if(really) {
            console.log('I am understanding JavaScript.');
        }
        else {
            console.log('Too bad.'); 
        }
    }
    
    copyPasteFromStackOverflow() {
        console.log('Once again, I am copy pasting from StackOverflow.')
    }
}

// Taks:
// Create two subclasses QualityAssurance and ProjectManager
// from the parent class ITGuy

class QualityAssurance extends ITGuy {
    constructor(name, age, experience, patience) {
        super(name, age);
        this.experience = experience;
        this.patience = patience
    }
    
    checkQuality(product) {
        console.log('Looks good.')
    }
    
    graduatedIn() {
        console.log('Computer Science, Bachelor of Engineering');
    }
    
}

class ProjectManager extends ITGuy {
    constructor(name, age, salary, graduation) {
        super(name, age);
        this.salary = salary;
        this.graduation = graduation
    }
    
    graduatedIn() {
        console.log('Project Manegement, Bachelor of Arts');
    }
    
    abusePower() {
        console.log('When is it done?');
    }
    
    burnOut() {
        setTimeout( function(e) {
            console.log('I am going to sabbatical.')
        }, 1000*60*24*30*6); // half a year
    }
}

// Lets create 2 developers and 1 project manager

var jan = new Developer('Jan', 32, ['JavaScript', 'CSS', 'HTML', 'NodeJS'], 'foobaroo');
var ashok = new Developer('Ashok', 32, ['JavaScript', 'CSS', 'HTML', 'NodeJS'], 'ashok');
var johannes = new ProjectManager('Johannes', 32, 1000000, 'Doctor');











