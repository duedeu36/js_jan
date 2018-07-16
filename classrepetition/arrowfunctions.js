const years = [1990, 1965, 1982, 1937];

// es5:
/// "map" can go through each element of an array
let ages = years.map(function(element) { // map forms a certain function on each element
    //return 'i am the replacement of ' + element;
    return 2018 - element;
});

console.log(ages);

// map performs an anonymous function on each element of an array

// arrow functions with one parameter
let ages6 = years.map( (element2) => {
    return 2018 - element2;
});

console.log(ages6);
/////--------
// arrow functions with two parameters
// functional
let ages6b = years.map(element2b => 2018 - element2b);

console.log(ages6b);

// two parameters, imperative
let ages6c = years.map((element2c, index) => {
    return 'index: ' + index + ' , age: ' + (2018 - element2c);
})

console.log(ages6c);


let ages6d = years.map(
    (element2d, index) => 'index: ' + index +  ' , age: ' + (2018 - element2d)
);

console.log(ages6d);

let obj = {
    x: 1,
    y: 2,
    hallo: function() {
        
    }
}

// es5
let box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('green').addEventListener('click', function() {
            
        })
    }
}
































