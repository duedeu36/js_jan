/*
function q(p) { console.log(p); }

var txt1 = 'Apple, Banana, Kiwi';
var result1 = txt1.slice(15, 19);

q(result1);
var result2 = txt1.slice(15);
q(result2);
var result3 = txt1.slice(-4);
q(result3);
var result4 = txt1.substr(7, 6);
q(result4);
var result5 = txt1.replace('Kiwi', 'Orange');
q(result5);
var result6 = txt1.toUpperCase();
q(result6);
var result7 = txt1.toLowerCase();
q(result7);

var firstName = 'Bob', secondName = 'Jones';
var result8 = firstName.concat(secondName);
q(result8);
q(firstName+secondName);

var result8a = 'Hallo'.concat(' ', 'World');
q(result8a);
var result8b = 'Hallo'.concat(' ', txt1.slice(0, 5));
q(result8b);


var str1 = 'Hallo World';
var result9 = str1.charAt(0);
q(result9);

var result10 = str1[0];
q(result10);

var str2 = ['H' + 'a' + 'l' +  'l' + 'o' + ' '+  'W' + 'o' + 'r' + 'l' + 'd'];

q(str1);
q(str2);

var str3 = 'a, b ,c ,d, e';
q(str3);

var arrStr3 = str3.split(',');  //  makes a array of an string
q(arrStr3);

var str4 = 's, d, g, j; a, d, e, c';
q(str4);
var arrStr4 = str4.split(';');  // the ; is here the seperator
q(arrStr4);

var str5 = 's, d, g, j, a, d, e, c';
q(str5);
var arrStr5 = str5.split(',').sort();  // the ; is here the seperator
q(arrStr5);


var str6 = 'schulz,mueller,meier,schmidt,';
q(str6);
var arrStr6 = str6.split(',').sort();
q(arrStr6);

// Task: given is the following string
var str7 = `devugees is a very good learning institute where we learn good stuff like HTML, CSS and JavaScript.`;
q(str7);

// create a function named countWords which takes two
// paramteres searchTerm and str which returns the total 
// occurences(Auftreten) of searchTerm in str
// test with str7
// hint: keep things simple
// dont use indexOf or search
// use split

function countWords(searchTerm, str){  
    var arrayStr = str.split(' ');
    var counter = 0;
    for(i=0; i<=arrayStr.length; i++){
       if (searchTerm === arrayStr[i])
        counter++; // shows more then one of the strings.. wothout counter++ it will for example show only the number of one 'good', not two
    }
    
    return counter;
}
*/
/*
console.log(countWords('good', str7));

var str8 = 'Hallo sun';
var result11 = str8.indexOf('sun');
q(result11);

var str9 = 'Hallo World'; 
var result12 = str9.indexOf('sun'); // output -1 because the string which is searching is not found
q(result12);


var str10 = 's, d, g, j, a, d, e, c';
var arrStr10 = str10.split(',');
q(arrStr10);

var str11 = arrStr10.join(',');
q('joined together back as ' + str11);

var str12 = 'abcdefghijklmnopqrstuvwxyz01234567891';
var arrStr12 = str12.split('');
q(arrStr12);


//      Task:
//
//      1) Google how to use Math.random()
//      2) Create a function activationCode(n) with one
//      parameter n that returns a string of length n whereas each character 
//      is a random character of the alphabet and the numbers 0 to 9
//
//      example: activationCode(5) = 'f94kx';
//
//      3) add a feature that each character randomly can be
//      either uppercase or lowercase


function activationCode(n) {
        
    var code = '';
    var chara = 'damir lucic';
    var numbers = 0123456789;
    var upp = chara.toUpperCase();
    var allCharacters = chara + numbers + upp;
    for(i = 0; i < n; i++){
    
        var randomIndex = Math.floor(Math.random() * allCharacters.length);  // code = code + chara[Math.floor(Math.random() * chara.length )]
        
        code += allCharacters[randomIndex];
    }
    
    return code;

}
console.log(activationCode(8));
*/



function validateEmailAdress(email){
    
    
    var parts = email.split('@'); // seperator (the 'splitter') is @
    console.log(parts);
    
    // != ==
    // !== ===
    
    if(parts.length != 2) {
        console.log('You forget the @ sign.')
        return false;  
    }
   /* else if(parts.length >= 3){
        console.log('You have too much @ signs here.');
        return false
        }*/
    if(parts[0].length >=32 || parts[0].length < 8){
        console.log('Please give a email name between 7 and 33 characters.')
        return false;
    }
    /*
    var numNumbers = 0;
    for(var i=0; i<parts.length; i++){
        var numbers = [0,1,2,3,4,5,6,7,8,9];
        var numberFound = false;
        for(var j=0; j<numbers.length; j++){
            if(parts.charAt(i) == numbers[j]){
                numNumbers++;
                numberFound = true;
                break;
            }
        }
    }
    if(parts.length === numNumbers){
        console.log('The first part is a number.');
        return false;
    }
    */
    if(Number(parts[0]) == parts[0] && parts[0].length > 0){
        return false;
    }
    if(parts[0].indexOf('$') >= 0 || parts[0].indexOf('%') >= 0 ){
        console.log('The sign $ or % are not allowed.');
        return false;
    } 
    
    var right = parts[1].split('.');
    var ending = right[1];
    var domain = right[0];
    if(ending != 'com' && ending != 'org' && ending != 'de'){
        return false; 
    }
    
    if(domain.length >16 || domain.length <5 ){
        return false;
    }
    
    
return true;
}


console.log(validateEmailAdress('damir.lucic89@gmail.com'));


function q(p) { console.log(p); }

var str1 = 'Hallo World';
var result9 = str1.charAt(0);
q(result9);

/*

console.log(countWords('good', str7));

var str8 = 'Hallo sun';
var result11 = str8.indexOf('sun');
q(result11);


var str1 = 'Hallo World';
var result9 = str1.charAt(0);
q(result9);


*/









