//////////////////////////////////////////////////

var person = {
    age: 30,
    name: 'Max',
    intro() {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.')
    }
}

person.intro();

/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and the color is '+ this.color;
            alert(str);
        });
    }
}

box5.clickMe();
*/

// parent object:
var box6 = {
   color: "green",
   position: 1,
   clickMe: function() {
       // arrow function uses the this from context right here
       document.querySelector(".green").addEventListener("click", () => {
           var str = "This is box number " + this.position + " and the color is " + this.color;
           alert(str);
       });
   },
   foo1: () => {
       console.log('My position is ' + this.position);
       // alert.position is undefined because
       // 'this' will reference to windows object
   },
   foo2() { // es6, same sd foo2: function() {}
              //
        var x = () => {
        console.log(' parent scope this.position = ' + this.position);
        }
        x();
   }
}

box6.clickMe();
box6.foo1();
box6.foo2();
