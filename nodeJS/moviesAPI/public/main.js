$(document).ready(function () {


    $('#Modular').show();
    $('#addMovie').hide();
    // $('.all-items').hide();

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

    // $('#Items').click(function() {
    //     $('#Modular').show();
    // });

});



// GET request to show all movies

$.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: '/products',
    dataType: 'json',
    success: function (response) {
        console.log(response);
        var allMoviesDiv = $('<div></div>');
        allMoviesDiv.addClass('d-flex flex-wrap');
        allMoviesDiv.attr('id', 'Items');
        var modularDiv = $('<div></div>');
        modularDiv.addClass('modular');
        modularDiv.attr('id', 'Modular');
        var modularContentDiv = $('<div></div>');
        modularContentDiv.addClass('content');
        var h2Title = $('<h2></h2>');
        var paragraph = $('<p></p>');
        $.each(response, function (index, element) {
            console.log(element)

            /*     
            <section id="mainContent">

                <div class="d-flex flex-wrap">
                    <div class="items">........</div>
                    <div class="items">........</div>
                    <div class="items">........</div>

                    <div class="modular" id="Modular">
                        <div class="content">
                            <h2>TITLE</h2>
                            <p>TEST</p>
                        </div>
                    </div>

                </div>

            </section> 
            */

            $('#mainContent').append(allMoviesDiv);
            var allItmesDiv = $('<div></div>');
            allItmesDiv.addClass('items');
            allMoviesDiv.append(allItmesDiv);
            var itemImg = $('<img>');
            itemImg.attr('src', element.imgURL);
            allItmesDiv.append(itemImg);
            //modular:

            allMoviesDiv.append(modularDiv);

            modularDiv.append(modularContentDiv);

            h2Title.html(element.title);
            modularContentDiv.append(h2Title);

            paragraph.html(element.Year);
            modularContentDiv.append(paragraph);



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

//end of ajax

/* 
            //modular:
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
*/
