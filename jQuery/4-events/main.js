$(document).ready(function() {
    console.log('Document is ready: Hello world');
    
    /* VanillaJS:
    let clickbuttonObj = document.getElementById('clickbutton);
    clickbuttonObj.onclick = ...
    */
    
    $('#clickbutton').click(function(e) {
        alert('This is the click handler!');
    });
    
    $('#clickbutton').click(function(e) {
        alert('This is the 2nd click handler!');
    });
    
    $('#bindbutton').bind('click', function(e) {
        alert('This is the bind handler!')
    });
    
    $('#onbutton').on('click', function(e) {
        alert('This is the on handler')
    });
    
    // Task:
    // 
    // Create a clickEvent for all li-items that alerts the html inside of the li. Use the debugger of your browser to analyze the "this"-keyword inside the event-function. 
    
    $('li').click(function(e) {
        alert($(this).html())
    });
    
    // Taks:
    //
    // Create a click event for the links that makes it possible that the user cannot open evil link, i.e. a link that does contain the word "evil".
    
    $('a').click(function(e) {  
        let link = $(this);
        if($(link).attr('href').indexOf('evil') !== -1) {
            e.preventDefault();
        }
    });
    
});

