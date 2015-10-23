function initMap() {
    var map = new google.maps.Map(document.getElementById('google-maps-box'), {
        center: {lat: 37.7396515, lng: -122.2921592},
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    });


    var dispensaries = [
        {
            name: 'Sparc',
            address: '1256 Mission St, San Francisco, CA 94103'
        }

    ];

    var img = 'img/location-marker.png';
    var size = new google.maps.Size(25,25);
    var icon = new google.maps.MarkerImage(img, null, null, null, size);

    for (var i = 0; i < dispensaries.length; i++) {
        var dispensary = dispensaries[i];

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': dispensary.address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    icon: icon
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
}
