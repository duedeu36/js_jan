var fs = require('fs');

var file1 = fs.readFileSync('./halloworld.txt', 'utf-8');

console.log( file1 );

var str1 = 'Hallo World to a new file.';

//with this code the file "newfile.txt" is created
fs.writeFileSync('./newfile.txt', str1);

var str2 = 'This will overwrite a file...';

//with this code the file "newfile.txt" will be overwrite with the value of str2
fs.writeFileSync('./newfile.txt', str2);

var str3 = 'This will be appended to a file ...';

fs.appendFileSync('./newfile.txt', str3);

var objFromFile = JSON.parse(fs.readFileSync('./person.json', 'utf-8')
);

console.log(objFromFile);

var objFromFile2 = require('./person.json');

console.log(objFromFile2);

// Task:
//
// Open the users.csv and create an array of 4 javascript objects having the proper key and value pairs.

let usersArray = [];
var str = fs.readFileSync('./users.csv', 'utf-8');
var userLines = str.split('\n');

for(let i = 0 ; i < userLines.length; i++ ) {
    let user = userLines[i].split(';');

    let userObj = {
        name: user[0],
        email: user[1],
        lastLogin: user[2]
    };

    usersArray.push(userObj);
}

console.log(usersArray);

let usersJson = JSON.stringify(usersArray);

fs.writeFileSync('./users.json', usersJson);

//delete a file
fs.unlinkSync('./users.json');

//Show the files of a directory. 

var filelist = fs.readdirSync('.');

for(let i = 0; i < filelist.length; i++) {
    console.log(filelist[i]);
}

console.log('Number of files: ' + filelist.length);

let info1 = fs.lstatSync('./person.json');
let info2 = fs.lstatSync('./level1');

if( info1.isFile() ) {
    console.log('Its a file!' );
} else {
    console.log('Its a folder!');
}

if( info2.isFile() ) {
    console.log('Its a file!' );
} else {
    console.log('Its a folder!');
}

// Task:

// a) Show all JPG images that are in the image folder
// b) afterwards, delete all images that are NOT JPG

// a)

var ImageList = fs.readdirSync('./images');
for(let j = 0; j < ImageList.length; j++) {
    console.log(ImageList[j]);
}


// // b)
for(let x = 0; x < ImageList; x++) {
    if(ImageList[x] !== 'jpg')
}


