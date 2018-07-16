// var keyword:

for(var i1 = 0; i1 < 10; i1++) { // block scope
    console.log(i1);
} // block scope ends here

console.log('i1 after the loop: ' + i1);

function counter() { // function scope
    for(var i2 = 0; i2 < 5; i2++) { // block scope
        console.log(i2);
    }
} // function scope ends here

counter();

// console.log('i2 after the loop:: ' + i2);

// conditional block

if(true) {
    var i3 = 2;
    
}

console.log(i3);

// annoymous block, NOT a function block
{
    var i4 = 3;
}

console.log(i4);



///// let keyword:  

{
    let i5 = 4;
}

// console.log(i5);   <--error, because not inside 


/*
var is valid outside the function scope
let, const are valid inside
*/

if(true) {
    let i6 = 8;
}

// console.log(i6); <--- error

for(let i7 = 0; i7 < 5; i7++) {
    console.log(i7);
}

// console.log(i7); <--- with this line its a error


///// const keyword:  


var i8a = 10;        //1. assignment
i8a = 15;            //2. assignment, re-assignment
console.log(i8a);

let i8b = 10;        //1. assignment
i8b = 17;            //2. assignment, re-assignment
console.log(i8b);

const i9 = 20;      //1. assignment
//i9 = 25;            //2. assignment

// annonymous block
{
    const i10 = -5; // block scope
    console.log(i10); 
}

// console.log(i10); <---- error

function f(x) {
    let c = 7;
    return 2*x + c;
}

console.log(f(2));



























