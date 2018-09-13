<<<<<<< HEAD
$(document).ready(function () {


    $('#modularSection').hide();
    $('#addMovie').hide();

    $('#showMovies').click(function () {

        $('#allMovies').show();
        $('#addMovie').hide();
        // $('#allMovies').toggle();
    });

    $('#addingMovie').click(function () {
        $('#addMovie').show();
        $('#allMovies').hide();
        // $('#addMovie').toggle();
    });

});



// GET request to show all movies

$.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: '/products',
    dataType: 'json',
    success: function (response) {
        console.log(response);
        $.each(response, function (index, element) {
            console.log(element)
/* 
        <section id="mainContent">
            <div class="all-items" id="allMovies">
                <div class="d-flex flex-wrap" id="Items">
                    
                </div>
            </div>
            <div class="modular" id="Modular">
            <div class="content" id="Content">
            <h2>Title</h2>
                    <p>Description of the movie</p>
                </div>
            </div>
        </section> */

        var allMoviesDiv = $('<div></div>');
        allMoviesDiv.addClass('all-items');
        allMoviesDiv.attr('id','allMovies');
        $('#mainContent').append(allMoviesDiv);
        var allItmesDiv = $('<div></div>');
        allItmesDiv.addClass('d-flex flex-wrap');
        allItmesDiv.attr('id', 'Items');
        allMoviesDiv.append(allItmesDiv);
        var itemsDiv = $('<div></div>');
        itemsDiv.addClass('items');
        allItmesDiv.append(itemsDiv);
        var itemImg = $('<img>');
        itemImg.attr('src', element.imgURL);
        itemsDiv.append(itemImg);

        var modularDiv = $('<div></div>');
        modularDiv.addClass('modular');
        modularDiv.attr('id', 'Modular');
        $('#mainContent').append(modularDiv);
        var modularContentDiv = $('<div></div>');
        modularContentDiv.addClass('content');
        modularContentDiv.attr('id', 'Content');
        modularDiv.append(modularContentDiv);
        var itemTitle = $('<h2></h2>');
        itemTitle.html(element.title);
        modularContentDiv.append(itemTitle);
        var itemParagraph = $('<p></p>');
        itemParagraph.html(element.description);
        modularContentDiv.append(itemParagraph);







                
        
        $(document).click(function(event) {
            if(!$(event.target).closest('#modularSection').length) {
                if($('#modularSection').is(":visible")) {
                            $('#modularSection').remove();
                        }
                    }
                });
                
            });
            
        },
        error: function (xhr, status, error) {
            console.log(`
            error: ${error},
            status: ${status},
            xhr: ${JSON.stringify(xhr)}
            `);
        }
        
    });
    /*                 var modularDiv = $('<div></div>');
                    modularDiv.addClass('modular');
                    var modularContent = $('<div></div>');
                    var addImage = $('<img>');
                    addImage.attr('src', element.Poster);
                    modularContent.addClass('content');
                    var contentTitle = $('<h2></h2>');
                    contentTitle.html(element.Title);
                    var contentParagraph = $('<p></p>');
                    contentParagraph.html(element.Type);
    
                    $(itemDiv).on('click',function() {
                        $('#Modular').show();
                    });
                    var itemDiv = $('<div></div>');
                    itemDiv.addClass('items');
                    
                    itemDiv.append(addImage);
                    $('#Items').append(itemDiv);
                    $('#Modular').append(modularDiv);
                    modularDiv.append(modularContent);
                    modularContent.append(contentTitle);
                    modularContent.append(contentParagraph); */
=======
$(document).ready(function() {

    $('#allMovies').hide();
    $('#addMovie').hide();

    $('#showMovies').click(function () {
        // $('#allMovies').show();
        $('#allMovies').toggle();
    });

    $('#addingMovie').click(function () {
        // $('#addMovie').show();
        $('#addMovie').toggle();

    });



});
>>>>>>> bac3e241c9c7ca2aaba6922885663ad8ca6bea89
