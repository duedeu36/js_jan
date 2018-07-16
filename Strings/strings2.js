
// Task:
// generate an email based on this mailTemplate and
// print it out.
// genarate it for the user "Alex" who has 100$ and 
// whoes activationlink will be generated with the
// activationcode function and has 20 charcters.
//
// Hint: use the replace-Function

    var mailTemplate = `
    Hallo $USERNAME,
    Thank you for your registration at MyService.com.
    Your account balance is $ACCOUNT_BALANCE.
    Please hit the following activation link in order 
    to complete your registration at MyService.com:

    https://myservice.com/activation/$ACTIVATIONCODE

    Have fun,
    your MyService.com - Team

    
`;
    
/*
    var name = mailTemplate.replace('$USERNAME', 'Alex');
    console.log(name);
    var balance = mailTemplate.replace('$ACCOUNT_BALANCE', '100$');
    console.log(balance);
    var newCode = mailTemplate.replace('$ACTIVATIONCODE', '123' );
    console.log(newCode);
*/
    var mailFinal0 = name.replace('$USERNAME', 'Alex');
    // console.log(mailFinal0);
    var mailFinal1 = mailFinal0.replace('$ACCOUNT_BALANCE', '100$');
    // console.log(mailFinal1);
    var mailFinal2 = mailFinal1.replace('$ACTIVATIONCODE', '123');
    console.log(mailFinal2);

    var pipeMe = 'Hallo World';

var finalStr = pipeMe.replace('Hallo', 'Hi').replace('Hi', 'Goood morning').toUpperCase().concat(', ' + 'students').toLowerCase();

console.log(finalStr);
    


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


var str1 = 'Hallo World';
var result9 = str1.charAt(0);
q(result9);

*/

/*

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

