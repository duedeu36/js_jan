// Spread
// mostly used for easly con for arrays
// basicly can also used for arrays as parameter lists
function addFourAge(a,b,c,d) {
    return a+b+c+d; // + undefined
}

var sum = addFourAge(18, 30, 12, 21);
console.log(sum);

// Spread operator

//es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAge.apply(null, ages);
// apply is the same as call with array as parameter list
console.log(sum2);

//es6
var sum3 = addFourAge(...ages);
console.log(sum3);

ages.push(9); //its now five ages
var sum4 = addFourAge(...ages);
// var sum4 = addFourAges.apply(null, ages);
console.log(sum4);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['mary', 'bob', 'ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);


// Rest operator

function isFullAge5() {
    console.log(arguments); // exists in each js function
    // converting from array-like object to real array
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach( function(cur) {
        console.log( (2018 - cur) >= 18); // true or false
    });
}

isFullAge5(1990, 2002, 1965);
// isFullAge5(1990, 2002, 1965, 2011, 1944, 1968, 2016);

function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log( (2018 - cur) >= 18) );
}

isFullAge6(1990, 1999, 1965);

function isFullAge6b(limit, ...years) { // rest of the parameters
    console.log(years);
    years.forEach( cur => console.log( (2018 - cur) >= 18) );
}

isFullAge6b(21, 1990, 1999, 1965);






































