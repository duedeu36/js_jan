///////// unary operators
/*
var obj = {
x0 : +3,
x1 : +'3',
x2 : +'-3',
x3 : +'3.14',
x4 : +true,
x5 : +false,
    
x6 : this.x4 + this.x5,
x8 : this.x4 + this.x4 + this.x5,  // 1+1+0
    
x9 : -'15+5',
x10 : '15',
x11 : -'15+5',
x12 : this.x0+this.x3,
x13 : -'15'+'5',    // -155
x14 : -'15'-'5',    // -20
x15 : -15-5,        // -20


x16 : !false,       // true
x17 : !NaN,         // true
x18 : !this.x11,         // true
x19 : !null,        // true
x20 : !!NaN,        // false
x21 : !undefined,   // true
x22 : !"",          // true
x23 : !true,        // false
x24 : !0,           // true
x25 : !-3,          // false
x26 : !"-3",        // false
x27 : !{},
x28 : ![]
}


for(var key in obj) {
    console.log(key + ' = ' + obj[key]);
}

*/

var x0 = +3;
var x1 = +'3';
var x2 = +'-3';
var x3 = +'3.14';
var x4 = +true;
var x5 = +false;
var x6 = x4 + x5;
var x8 = x4 + x4 + x5;  // 1+1+0
var x9 = -'15+5';
var x10 = '15';
var x11 = -'15+5';
var x12 = x0+x3;
var x13 = -'15'+'5';    // -155
var x14 = -'15'-'5';    // -20
var x15 = -15-5;        // -20


var x16 = !false;       // true
var x17 = !NaN;         // true
var x18 = !x11;         // true
var x19 = !null;        // true
var x20 = !!NaN;        // false
var x21 = !undefined;   // true
var x22 = !"";          // true
var x23 = !true;        // false
var x24 = !0;           // true
var x25 = !-3;          // false
var x26 = !"-3"         // false

////// typeof

var obj2 = {
    x1: typeof 2,
    x2: typeof -3.14,
    x3: typeof 0xff,
    x4: typeof true,
    x5: typeof false,
    x6: typeof null,
    x7: typeof Infinity,
    x8: typeof [1,2],
    x9: typeof {a:1, b:2},
   x10: typeof function() {},
   x11: typeof 'hallo',
   x12: typeof { f: function() {} },
   x13: typeof hi,
   x14: typeof x7
};

for(var key in obj2) {
    console.log(key + ' = ' + obj2[key]);
}

//////// delete

var hi = 'hi';
delete hi;

function yo() {}
delete yo;

var pub = {bar: 1}
delete pub;

var array = [1,2,3,4,5];
delete array;

var fruits = { abc: 'apple', def: 'mango'};
delete fruits['abc'];   // expeceted output: def: 'mango'

var numbers = [1,2,3,4,5];
delete numbers[2];      // expected output: [1, 2, empty, 4, 5]
//console.log(numbers);

















