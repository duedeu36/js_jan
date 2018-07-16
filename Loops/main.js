///////////////// Loops ///////////////////


/* 
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World'); 
*/

for(var i = 0; i > 10; i++){
    
    console.log('Hallo World' + i);
}


var counter = 0;
while(counter < 10){
    console.log('Hallo World' + counter);
    counter = counter + 1;
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

console.log( names[0]);
console.log( names[1]);

for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

/* for(var i= 0; true; i++) {
    console.log('Chrome is kind of slow and INFINITY!!!!' + i);
} */

for(var i=0; false; i++){
    console.log('This loop will never be entered');
}

var apple1 = { color: 'red', size: 'big'}
var apple2 = { color: 'green', size: 'small'}
var apple3 = { color: 'yellow', size: 'big'}
var apples = [ apple1, apple2, apple3];

// Task: create a for-loop that prints out all the sizes of the apples

for(var size= 0; size<apples.length; size++){
    console.log(apples[size].size);
}
    
/* 
Task:

Create a function numArray which takes two parameters
a and b. a and b are numbers like 1 and 10 or 5 and 20.
So, the function returns false if a > b or a < 0 or b < 0.

Otherwise, it returns an array of all numbers between a and b
including a and b.

EXAMPLE: a = 12 and b = 16
numArray return [12, 13, 14, 15, 16]

Hint: consider using push() for creating the restulting array.
*/


function numArray(a, b)
{
    if(a > b || a < 0 || b < 0)
    { 
        return false;
    }
    else{
            var retArray = [];
            for(var i=a; i<=b; i++) 
            {
                retArray.push(i);
            }
                return retArray;
           
        }
    
}

console.log(numArray(2,8));


// Task:
//
// - lets  assume we have 100 images in our image/ folder
// - we want to create an array of images
// - and the array should consist of the filenames which are
//   images_1.jpg to image_100.jpg

// Task 2:
//
// - we want to standardize the filenaming and also display
// - the number of digits
// - image_001.jpg to image_100.jpg

// for both tasks, create a function imageArray1 and imageArray2 that
// does not take any parameters and returns an array of 100 filenames



function imageArray1(img1, img100)
{
    if(img1 > img100)
        {
            return false;
        }
    else{
        var countImg = [];
        for(var i=1; i<=100; i++)
            {
                countImg.push('image_'+ i + '.jpg');
            }
                return countImg;
    }
}

console.log(imageArray1());



 //  2.  make here image_001.jpg till image_100.jpg 


function imageArray2()
{
    if(img1 > img100)
        {
            return false;
        }
    else{
        var countImg = [];
        for(var i=1; i<=100; i++)
            {
                countImg.push('image_'+ i + '.jpg');
            }
                return countImg;
    }
}

console.log(imageArray1());





/* for(var i = 0; i < 5; i++) 
    {
        console.log('i = ' + i);
        
        for(var j= 0; j<3; j++){
            console.log('    j = ' +j);
            
            for(var k=0; k<2; k++){  // i put here for " (var k=0; j<2; k++){ " and chrome crashed
                console.log('     k = ' +k);
            }
        }
    }

*/


function printStars(){
var stars = 'O';
    for(var i=0; i<6; i++){
        for(var j=0; j<1; j++){
        console.log(stars);
            stars = stars + 'X';
            }
        }
}

function printStars2(){
var stars = 'O';
    for(var i=0; i<6; i++){
        for(var j=0; j<1; j++){
        console.log(stars);
            stars = stars + '*';
            }
        }
}

function printStars3(){
    for(var i=0; i<6; i++){
        var stars = '';
        for(var j=0; j<i; j++){
            stars = stars + '*';
        }
        console.log(stars);
    }
}

printStars() ;
printStars2();
printStars3();

// implement printStars with a nested loop (already done)


///////////////////////////////////// While ///////////////////////////////////////

var numbers = [3, 6, 10, 12, 15, -1];


/*for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}*/

var i=0;
while( i< numbers.length){
    console.log(numbers[i]);
    i++;
}

console.log('i = ' +1);




