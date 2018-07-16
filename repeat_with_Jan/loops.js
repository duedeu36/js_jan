////// Loops //////

var x = 0;

if(x>0){ // its true
    console.log('x is greater then 0');
}

/*
while(x < 6) { // unless it becomes false
    console.log('x is '+ x + 'and smaller then 6');
    x =  x + 1;
}


var arrEmpty = [];

for(var i = 0; i<=10; i = i + 1){    // i = i + 1     =     i++
    arrEmpty.push( i ); // pushed values of i into the empty Array
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

console.log(arrEmpty);



Create a variable of an empty array and fill it with two for loops that you got a stair structure like:

[1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[1, 2, 3, 4, 5]



// the empty array will only be called WHEN the for-loop finished complete... so it will be called once.

// ----- 1. round ----->  [1]               the array gets filled...
//            . 
//            . 
//            . 
// ----- 5. round ----->  [1, 2, 3, 4, 5]   ...until the loop reaches the condition of i<=5

var arr = [];

for(i=1; i<=5; i++) {
    arr.push(i);   

}
        console.log(arr);

///// the difference now: 
// the empty array gets filled and get printed with console.log [1]. a ADDITIONAL array takes the velue of the previous one [1], does the for loop again (i++) AND print it out BECAUSE console.log is in the curly brackets {}. this means the array is printed again and again and again until the loop is finished

// ----- 1. round ----->  [1]               array 1         the array gets filled
// ----- 2. round ----->  [1, 2]            array 2         an ADDITIONAL array gets filled and takes the value of the previous array
// ----- 3. round ----->  [1, 2, 3]         array 3         "
// ----- 4. round ----->  [1, 2, 3, 4]      array 4         "
// ----- 5. round ----->  [1, 2, 3, 4, 5]   array 5         "

var arr = [];

for(i=1; i<=5; i++) {
    arr.push(i);   

        console.log(arr);
}

*/
///////////////////////////// HA Task
/*
var arr = []
for(i=0; i<6; i++){
    var arr2 = [];
    for(j=0; j<=i; j++){
        arr2.push(j);
    }
    arr.push(arr2);
}

console.log(arr); 
*/

var firstArray = [];

for(var i = 0; i < 6; i++){
    var secondArray = [];
    for(j = 0; j <= i; j++){
        secondArray.push(j);
        
    }
    firstArray.push(secondArray);
}
console.log(firstArray);
