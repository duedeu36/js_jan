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