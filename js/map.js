var dispensaries = [
    {
        name: 'Sparc',
        address: '1256 Mission St, San Francisco, CA 94103',
        location: {lat: 37.7768998, lng: -122.41421489},
        phone: '',
        url: '',
    },
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('google-maps-box'), {
        center: {lat: 37.7396515, lng: -122.2921592},
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    });

    var img = 'img/location-marker.png';
    var size = new google.maps.Size(25,25);
    var icon = new google.maps.MarkerImage(img, null, null, null, size);

    for (var i = 0; i < dispensaries.length; i++) {
        var dispensary = dispensaries[i];

        var marker = new google.maps.Marker({
            position: dispensary.location,
            map: map,
            icon: icon
        });
    }
}
