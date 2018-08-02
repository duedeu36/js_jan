$(document).ready(function () {

    var marker, location;
    var allMarkers = [];


   
    $("#zoomout").click(function () {

        map.setZoom(3);
    });

    $("#zoomin").click(function () {

        map.setZoom(12);
    });


    $("#addLocation").click(function () {

            var geocoder = new google.maps.Geocoder();

            location = $("#inputLocation").val();
            geocoder.geocode({
                    'address': location
                },
                function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        let lat = results[0].geometry.location.lat();
                        let lng = results[0].geometry.location.lng();

                        marker = new google.maps.Marker({
                            position: {
                                lat: lat,
                                lng: lng
                            },
                            map: map,
                            title: location
                        });

                        map.setCenter({
                            lat: lat,
                            lng: lng
                        });

                        map.setZoom(8);

                        allMarkers.push(marker);

                        $("select").append("<option class='opt' value='" + location + "'>" + location + "</option>");

                        $("#inputLocation").val("");

                    } else {
                        alert("invalid location");
                    };
               
            });
    });


    $("#remove").click(function () {
        //console.log("Remove button pressed");

        location = $(".selectBox").val();

        $(".selectBox option[value='" + location + "']").remove();

        //console.log(marker);
        //console.log(allMarkers);

        for (var i = 0; i < allMarkers.length; i++) {
            console.log(allMarkers[i].title);

            if (location === allMarkers[i].title) {
                marker = allMarkers[i];
                allMarkers.splice(i, 1);

            };

        };


        marker.setMap(null);

    });

})
    
    $(window).bind('load', function() {
        $.ajax({
            url: '/location',
            type: 'GET',
            dataType: 'json', 
            success: function(response) {
                console.log(response);
            }
        })
    })