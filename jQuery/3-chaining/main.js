$(document).ready(function() {
    console.log('Document is ready: Hello world');    
});


// Taks 1:

// Select the li with the id "chaos" and from there, navigate to the div with the id "a-level0" and print out the id using the attr() method

console.log($('#chaos').parent().closest('div').parent().attr('id'));

// Taks 2:

// Select the li with the id "chaos" and from there, navigate to replace the placeholders $HALLOWORLD1, $HALLOWORLD2, and $HALLOWORLD3 by "Hallo World 3" respectiely. Use the html() method that behaves identically to the VanillaJS "innerHTML" attribute.

// Perform both tasks in one chain

$('#chaos').parentsUntil('li#a-level0').next().children().first()
    .html('Hello World 1')
    .next()
    .html('Hello World 2')
    .next()
    .html('Hello World 3')

$('#chaos').parent()
    .closest('div')
    .parent()
    .next()
    .find('#p1')
    .html('ABC')
    .end()
    .find('#p2')
    .html('DEF')
    .end()
    .find('#p3')
    .html('HIJ')