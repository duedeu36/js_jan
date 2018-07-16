/*
var arrYears = [1990, 2001, 1956, 2016, 2006, 1947];


function printFullAge(paramPersonsBorn){
var a = [];

for(var i = 0; i < paramPersonsBorn.length; i++){
    console.log(2018 - paramPersonsBorn[i];
    a.push(true);
} 
   
for(var i= 0; i < arrEmpty.length; i++){
    if(paramPersonsBorn[i] >=18){
        b.push(true);
    }
    else{
        console.log('Person is NOT full age');
        b.push(false);
    }
}
    return b
}

console.log('printFullAge returns: ');
console.log(printFullAge(personBorn));

var full_1 = printFullAge([1999, 2003, 1980]);
var full_2 = printFullAge([1995, 1990, 1978]);

console.log('full_1 = ');
console.log('full_2 = ');
*/

function numberTable(rows, columns){
    var retArray = [];
    var c = 0;
    for(var i=0 ;i<rows; i++){
        var x = [];
        for(var j=0; j<columns; j++){
          c++;
            x.push(c);
            //  x.push(i*rows + j);
        }
        
        retArray.push( x );
    }
    return retArray;
}

console.log(numberTable(8, 8));