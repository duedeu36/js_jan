$(document).ready(function() {
    console.log('WEIRD Document is ready: Hello world');  
    
    /*
    let headerObjects = document.getElementById('h1');
    
    for(let i=0; i<headerObjects.length; i++) {
        headerObjects[i].classList.add('red-color');
    }
    */
    
    //we use tag h3 and add the class "red-color", which is in the css file
    $('h1').addClass('red-color');
    
    $('#firstpara').addClass('blue-color');
    //$(firstpara).addClass('blue-color');
    
    $('.para-class').addClass('green-color');
    
    
    // 1. Make all list items with the name "theking" red
    $('li[name="theking"]').addClass('red-color');
    // 2. Make all list items of class company and of class ceo underline
    $('.company, .ceo').addClass('underline');
    // 3. Give all li items that are direct children of the element with id "companies" a border
    $('#companies > li').addClass('border');
    // 4. Highlight all list items of class "company", if they have an index greater than 0
    $('li.company:gt(0)').addClass('highlight');
    // 5. Make all list items which are children of ULs of class flagship blue
    $('li').children('ul').addClass('flagship, blue-color')
    
});