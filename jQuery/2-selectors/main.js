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
    // 5. make all list items which are children of ULs of class flagship blue
    $('ul.flagship li').addClass('blue-color');
    
    /////////////////////////////////
    
    // 1 Make all rows with an even index cornflowerblue
    $('tr:even').addClass('even-row');
    // 2 Make the rest of 1 yellow
    $('tr:odd').addClass('odd-row');
    // 3 Make the TDs inside the TRs with an even index blue
    $('tr > td:even').addClass('blue-color');
    // 4 Make the Tds inside the TRs wikth an odd index yellow
    $('tr > td:odd').addClass('odd-row');
    // 5 Highlight all TDs that contain 'Hagrid' (highlight-2)
    $("td:contains(Hagrid)").addClass('highlight-2');
    // 6 Highlight all non-humans with index = 1
    $('.non-human:eq(1)').addClass('highlight-2');
    // 7 Highlight all non-humans with index > 1
    $('.non-human:gt(1)').addClass('highlight-2');
    // 8 Highlight all non-humans with index < 1
    $('.non-human:lt(1)').addClass('highlight-2');
    
    //////////////////////////////////
    
    // 1 Make the parent of the father red
    //---$('.father').parent().addClass('red-color');
    // 2 Make all parents of the son blue
    //---$('.son').parents().addClass('red-color');
    // 3 Make all parents of the son red, until gthe great-grandfather
    //---$('.son').parentsUntil('.great-grandfather').addClass('red-color');
    // 4. Make the closest div to the daughter green
    $('.daugther').closest('div').addClass('red-color');
    // 5. Make the closest div to the mother green
    //---$('.mother').closest('div').addClass('red-color');
    // 6. Make all children of the father red
    //---$('.father').children().addClass('red-color');
    // 7. Make the next sibling of the great-grandfather red
    //---$('.great-grandfather').next().addClass('red-color');
    // 8. Make the great-grandfather red, from the perspective of the great-grandmother
    //---$('.great-grandmother').prev().addClass('red-color');
    // 9. Make all siblings next to the great-grandfather
    //---$('.great-grandmother').nextAll().addClass('red-color');
    // 10. Make the first sibling next to the great-grandfather red
    //---$('.great-grandfather').nextAll().first().addClass('red-color');
    // 11. Make the last sibling next to the great-grandfather red
    //---$('.great-grandfather').nextAll().last().addClass('red-color');
    // 12. Make all siblings left of the great-grandaunt red
    //---$('.great-grandaunt').prevAll().addClass('red-color');
    
    
});



